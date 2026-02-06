import Image from "next/image";
import GlassCard from "@/components/GlassCard";
import { TbWindowMaximize } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

export type ProjectCardProps = {
  name: string;
  description: string;
  languages: { name: string; logo: string }[];
  githubLink?: string | null;
  liveLink?: string | null;
};

export default function ProjectCard({ name, description, languages, githubLink, liveLink }: ProjectCardProps) {
  const ghPalette = ["#131C27", "#1C353C", "#294F58", "#357571", "#48BA9F"];
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
    <GlassCard
      className="p-5 flex flex-col gap-4 h-full relative overflow-hidden"
      style={{
        border: `1px solid ${ghPalette[1]}`,
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="flex flex-col gap-3 flex-grow">
        <h3 className="text-lg font-semibold tracking-tight text-white">{name}</h3>
        <p className="text-sm text-neutral-200 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {languages.map((l) => {
            const color = colorFor(l.name);
            const bg = color ? `${color}1f` : "#ffffff12";
            return (
              <div
                key={l.name}
                className="rounded-lg px-2 py-1 flex items-center gap-1 border backdrop-blur-md backdrop-saturate-125 shadow transition-all hover:-translate-y-[1px] hover:shadow-lg"
                style={{
                  borderColor: color || ghPalette[4],
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
      </div>

      <div className="flex gap-3 mt-auto pt-2">
        {githubLink && (
          <a
            className="flex-1 flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            style={{
              borderColor: `${ghPalette[4]}66`,
              background: `${ghPalette[2]}33`,
              color: "#E9FAF5",
            }}
          >
            <FaGithub className="h-4 w-4" />
            <span>Code</span>
          </a>
        )}
        {liveLink && (
          <a
            className="flex-1 flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            style={{
              borderColor: `${ghPalette[4]}66`,
              background: `${ghPalette[3]}33`,
              color: "#E9FAF5",
            }}
          >
            <TbWindowMaximize className="h-4 w-4" />
            <span>Live</span>
          </a>
        )}
      </div>
    </GlassCard>
  );
}
