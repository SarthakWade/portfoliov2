import { PropsWithChildren } from "react";

export default function GlassCard({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-125 shadow-lg ${className}`}>
      {children}
    </div>
  );
}
