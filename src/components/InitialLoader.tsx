"use client";

import { useEffect, useState } from "react";

export default function InitialLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => {
      // small delay to avoid flash
      setTimeout(() => setVisible(false), 150);
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
    }

    return () => window.removeEventListener("load", hide);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      role="status"
      className={
        `fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`
      }
    >
      <div className="flex flex-col items-center gap-3 text-white">
        <div className="h-10 w-10 rounded-full border-2 border-white/40 border-t-white animate-spin" />
        <p className="tracking-wide font-pixel text-lg sm:text-xl">Loading...</p>
      </div>
    </div>
  );
}
