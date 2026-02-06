import 'server-only';

export type Contribution = {
  date: string;
  count: number;
  level: number;
};

const ONE_HOUR = 60 * 60;

export async function loadContributions(): Promise<Contribution[] | null> {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'SarthakWade';
  const endpoint = `https://github-contributions-api.jogruber.de/v4/${username}?y=last`;

  try {
    const res = await fetch(endpoint, {
      // cache on the server to avoid hitting the API every request
      next: { revalidate: ONE_HOUR },
    });

    if (!res.ok) return null;
    const json = await res.json();
    return json.contributions ?? null;
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[github] failed to fetch contributions', err);
    }
    return null;
  }
}
