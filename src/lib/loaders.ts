import 'server-only';
import { promises as fs } from 'fs';
import path from 'path';

export type LangItem = {
  name: string;
  logo: string;
  dominantColor?: string;
};

export type LangSection = {
  section: string;
  items: LangItem[];
};

export type Project = {
  id: number;
  name: string;
  description: string;
  languages: { name: string; logo: string }[];
  githubLink: string | null;
  liveLink: string | null;
};

async function readPublicJson<T>(fileName: string): Promise<T> {
  const filePath = path.join(process.cwd(), 'public', fileName);
  const raw = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(raw) as T;
}

export async function loadLanguages(): Promise<LangSection[]> {
  // Prefer languages.json if present else fall back to lang.json
  try {
    const data = await readPublicJson<LangSection[]>('languages.json');
    return await applyResolver(data);
  } catch {
    const data = await readPublicJson<LangSection[]>('lang.json');
    return await applyResolver(data);
  }
}

export async function loadProjects(): Promise<Project[]> {
  return await readPublicJson<Project[]>('projects.json');
}

// --- helpers ---
async function applyResolver(sections: LangSection[]): Promise<LangSection[]> {
  return Promise.all(
    sections.map(async (section) => ({
      ...section,
      items: await Promise.all(
        section.items.map(async (i) => ({
          ...i,
          logo: await resolveLogoAsync(i.name, i.logo),
        }))
      ),
    }))
  );
}

async function resolveLogoAsync(_name: string, logo: string): Promise<string> {
  // Enforce local-first: if it's a relative path, prefer it; if it exists, great; if not, still return it.
  if (logo.startsWith('/')) {
    const absPath = path.join(process.cwd(), 'public', logo);
    try {
      await fs.access(absPath);
      return logo; // local file exists
    } catch {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`[assets] Missing icon: ${logo}. Expected at ${absPath}`);
      }
      return logo; // keep as provided; no CDN fallback
    }
  }
  // If it's an absolute URL, keep it (in case your JSON intentionally uses one)
  return logo;
}
