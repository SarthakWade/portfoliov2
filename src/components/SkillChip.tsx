import Image from "next/image";

export default function SkillChip({ name, logo, dominantColor }: { name: string; logo: string; dominantColor?: string }) {
  // Build a subtle translucent background from the dominantColor if it is a 6‑digit hex
  const bg = dominantColor && /^#([0-9A-Fa-f]{6})$/.test(dominantColor)
    ? `${dominantColor}20` // ~12.5% opacity
    : undefined;
  return (
    <div
      className="rounded-xl px-3 py-2 flex items-center gap-2 border backdrop-blur-md backdrop-saturate-125 shadow transition-all hover:-translate-y-[1px] hover:shadow-lg"
      style={{
        borderColor: dominantColor,
        background: bg,
      }}
    >
      <div className="relative h-5 w-5 shrink-0">
        <Image src={logo} alt={name} fill sizes="24px" className="object-contain" />
      </div>
      <span className="text-sm text-white">{name}</span>
    </div>
  );
}
