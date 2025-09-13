"use client";

import Image from "next/image";
import { useState } from "react";
import heroBg from "@/app/bg.png";
import GlassCard from "@/components/GlassCard";

export default function Hero() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div id="hero" className="relative min-h-[100dvh] w-full overflow-hidden flex items-center">
      {/* Background image layer (fades in on reveal) */}
      <div className={`absolute inset-0 -z-10 transition-opacity duration-700 ${revealed ? "opacity-100" : "opacity-0"}`}>
        <Image src={heroBg} alt="" fill priority className="object-cover opacity-80" aria-hidden />
      </div>

      {/* Constrained content container */}
      <div className="w-[min(1100px,92%)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <GlassCard className="p-8 md:p-10">
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">Portfolio</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                Sarthak Wadegaonkar
              </h1>
              <p className="text-neutral-300 max-w-[60ch]">
                Full‑stack developer and AI/ML enthusiast crafting clean, performant experiences across web, mobile, and vision. Glassy minimal UI with tasteful pixel grit.
              </p>
              <div className="flex gap-3 pt-2">
                <a href="#projects" className="rounded-xl px-4 py-2 text-sm border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-125 shadow hover:opacity-90">View Projects</a>
                <a href="#skills" className="rounded-xl px-4 py-2 text-sm border border-white/20 hover:bg-white/5">Skills</a>
              </div>
            </div>
          </GlassCard>

          {/* Boy card showing a slice of the background, with the boy image in front */}
          <div className="relative aspect-[4/3] md:aspect-square w-full">
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden flex items-end justify-start border border-white/20"
            >
              {/* Background slice inside the card */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{ backgroundImage: `url(${heroBg.src})` }}
                aria-hidden
              />
              {/* Foreground boy image */}
              <Image src="/boy.png" alt="boy" width={320} height={320} className="relative z-[1] rounded-2xl object-contain" />
              {/* Reveal button */}
              <button
                onClick={() => setRevealed((v) => !v)}
                className="absolute bottom-4 right-4 rounded-xl px-4 py-2 text-sm border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-125 shadow hover:opacity-90"
              >
                {revealed ? "Back to dark" : "Gaze at the sky"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
