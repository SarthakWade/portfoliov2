import { PropsWithChildren } from "react";

export default function Section({ id, title, subtitle, children }: PropsWithChildren<{ id: string; title: string; subtitle?: string }>) {
  return (
    <section id={id} className="w-[min(1100px,92%)] mx-auto scroll-mt-24">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-4xl tracking-wider font-pixel">{title}</h2>
        {subtitle ? (
          <p className="text-sm text-neutral-400 mt-1">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
