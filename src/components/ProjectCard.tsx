import Image from "next/image";
import GlassCard from "@/components/GlassCard";

export type ProjectCardProps = {
  name: string;
  description: string;
  languages: { name: string; logo: string }[];
  githubLink?: string | null;
  liveLink?: string | null;
};

export default function ProjectCard({ name, description, languages, githubLink, liveLink }: ProjectCardProps) {
  const colorFor = (n: string): string | undefined => {
    const key = n.trim().toLowerCase();
    const map: Record<string, string> = {
      html: "#FC573B",
      css: "#2965F1",
      javascript: "#F7DF1E",
      typescript: "#3178C6",
      react: "#61DBFB",
      "react native": "#61DBFB",
      "tailwind css": "#38BDF8",
      python: "#3776AB",
      flask: "#eeeade",
      opencv: "#5C3EE8",
      expo: "#000000",
    };
    return map[key];
  };

  return (
    <GlassCard className="p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
        <div className="flex gap-2">
          {liveLink ? (
            <a className="text-sm hover:opacity-80" href={liveLink} target="_blank" rel="noreferrer">Live</a>
          ) : null}
          {githubLink ? (
            <a className="text-sm hover:opacity-80" href={githubLink} target="_blank" rel="noreferrer">GitHub</a>
          ) : null}
        </div>
      </div>
      <p className="text-sm text-neutral-300 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mt-1">
        {languages.map((l) => {
          const color = colorFor(l.name);
          const bg = color ? `${color}20` : undefined;
          return (
            <div
              key={l.name}
              className="rounded-lg px-2 py-1 flex items-center gap-1 border backdrop-blur-md backdrop-saturate-125 shadow transition-all hover:-translate-y-[1px] hover:shadow-lg"
              style={{
                borderColor: color,
                background: bg,
              }}
            >
              <div className="relative h-4 w-4">
                <Image src={l.logo} alt={l.name} fill sizes="16px" className="object-contain" />
              </div>
              <span className="text-xs text-white">{l.name}</span>
            </div>
          );
        })}
      </div>
    </GlassCard>
  );
}
