"use client";

import Image from "next/image";
import { useState } from "react";
import heroBg from "@/app/bg.png";
import heroBg2 from "@/app/bg2.png";
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
      <div className="w-[min(1100px,92%)] mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <GlassCard className="p-8 md:p-10">
            <div className="flex flex-col gap-4">
              <span className="text-md uppercase tracking-[0.25em] text-neutral-400 font-pixel">Portfolio</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wider font-pixel">
                Sarthak Wadegaonkar
              </h1>
              <div className="flex items-end">
                <p className="text-neutral-300 max-w-[60ch]">
                  Developing till my <span className="bg-gradient-to-r from-[#FFF7E6] via-[#F5DEB3] to-[#EED9C4] bg-clip-text text-transparent font-pixel text-xl">coffee</span> arrives.
                  </p>
                  <Image
                    src="/coffee.gif"
                    alt="About animation"
                    width={20}
                    height={20}
                    className="w-10 h-auto rounded-xl"
                    priority={false}
                    />
              </div>
              <div className="flex gap-3 pt-2">
                <a href="#projects" className="rounded-xl px-4 py-2 text-sm border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-125 shadow hover:opacity-90">View Projects</a>
                <a href="#skills" className="rounded-xl px-4 py-2 text-sm border border-white/20 hover:bg-white/5">Skills</a>
              </div>
            </div>
          </GlassCard>

          {/* Boy card showing a slice of the background, with the boy image in front */}
          <div className="relative aspect-[4/3] md:aspect-square w-full">
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden flex items-end justify-start border-2 border-white/20"
            >
              {/* Background slice inside the card */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{ backgroundImage: `url(${heroBg2.src})` }}
                aria-hidden
              />
              {/* Foreground boy image (smaller on mobile) */}
              <Image
                src="/boy.png"
                alt="boy"
                width={320}
                height={320}
                sizes="(max-width: 640px) 40vw, (max-width: 768px) 50vw, 320px"
                className="relative z-[1] rounded-2xl object-contain w-44 sm:w-40 md:w-80 h-auto"
              />
              {/* Reveal button */}
              <button
                onClick={() => setRevealed((v) => !v)}
                className="absolute bottom-4 right-4 rounded-xl px-4 py-2 text-sm border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-125 shadow hover:opacity-90"
              >
                {revealed ? "Clouds can wait" : "Gaze at the sky"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
