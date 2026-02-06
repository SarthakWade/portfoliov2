"use client";

import Image from "next/image";
import { useState } from "react";
import heroBg from "@/app/bg.png";
import heroBg2 from "@/app/bg2.png";
import GlassCard from "@/components/GlassCard";

export default function Hero() {
  const [revealed, setRevealed] = useState(false);
  const [showResume, setShowResume] = useState(false);

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
                  <video
                    src="/coffee.webm"
                    width={40}
                    height={40}
                    className="w-10 h-auto rounded-xl"
                    playsInline
                    autoPlay
                    muted
                    loop
                  />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowResume(true)}
                  className="rounded-xl px-3 py-1 text-md sm:text-xl border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-125 shadow hover:opacity-90 font-pixel tracking-wide cursor-pointer"
                >
                  Resume
                </button>
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
                className="absolute bottom-4 right-4 rounded-xl px-4 py-2 text-sm border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-125 shadow hover:opacity-90 cursor-pointer"
              >
                {revealed ? "Clouds can wait" : "Gaze at the sky"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Resume Modal */}
      {showResume && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Resume"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowResume(false)} />
          {/* Toolbar above the popup */}
          <div className="fixed top-6 left-0 right-0 z-[60] justify-center px-4 hidden sm:flex">
            <div className="flex items-center gap-3 rounded-xl border border-white/30 bg-black text-white backdrop-blur-md px-3 py-2 shadow-lg">
              <span className="hidden sm:inline text-sm opacity-80">resume.pdf</span>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-md px-2 py-1 text-xs border border-white/30 bg-white/10 hover:bg-white/20"
              >
                Open in new tab
              </a>
              <a
                href="/resume.pdf"
                download
                className="rounded-md px-2 py-1 text-xs border border-white/30 bg-white/10 hover:bg-white/20"
              >
                Download
              </a>
              <button
                onClick={() => setShowResume(false)}
                className="sm:hidden rounded-md px-2 py-1 text-xs border border-white/30 bg-white/10 hover:bg-white/20"
                aria-label="Close resume"
              >
                Close
              </button>
            </div>
          </div>
          <div className="relative bg-white/5 border border-white/20 rounded-none sm:rounded-2xl backdrop-blur-xl backdrop-saturate-125 shadow-2xl w-full max-w-[100vw] sm:max-w-4xl h-[90vh] sm:h-[80vh] overflow-hidden">
            {/* Prefer <object> for broader mobile support with fallback */}
            <object
              data="/resume.pdf#view=FitH"
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-center p-4">
                <p className="text-white/90">PDF preview isn’t supported on this device.</p>
                <div className="flex gap-2">
                  <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-md px-3 py-2 text-sm border border-white/30 bg-white/10 hover:bg-white/20">Open in new tab</a>
                  <a href="/resume.pdf" download className="rounded-md px-3 py-2 text-sm border border-white/30 bg-white/10 hover:bg-white/20">Download</a>
                </div>
              </div>
            </object>
          </div>
        </div>
      )}
    </div>
  );
}
