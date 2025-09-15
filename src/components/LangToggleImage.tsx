"use client";

import Image from "next/image";
import { useState } from "react";

export default function LangToggleImage() {
  const [sleepMode, setSleepMode] = useState(false);

  return (
    <div className="relative">
      <Image
        src={sleepMode ? "/sleep.jpg" : "/lang.gif"}
        alt={sleepMode ? "Sleeping" : "Languages collage"}
        width={425}
        height={425}
        className="object-cover rounded-2xl rounded-br-none"
      />
      <button
        onClick={() => setSleepMode((v) => !v)}
        className="absolute bottom-2 right-2 border-2
                   bg-white/10 backdrop-blur-3xl backdrop-saturate-125 rounded-2xl px-4 py-1 
                   hover:opacity-90 cursor-pointer"
      >
        or
      </button>
      <div className="absolute bottom-2 right-16 flex gap-2 py-1 px-4 bg-white/10 backdrop-blur-3xl backdrop-saturate-125 rounded-2xl border border-white/20">
        <p>Me right now probably..</p>
      </div>
    </div>
  );
}
