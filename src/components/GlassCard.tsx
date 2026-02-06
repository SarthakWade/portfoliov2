import { PropsWithChildren, type CSSProperties } from "react";

export default function GlassCard({
  children,
  className = "",
  style,
}: PropsWithChildren<{ className?: string; style?: CSSProperties }>) {
  return (
    <div
      className={`rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-125 shadow-lg ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
