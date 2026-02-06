"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(() => import("@/components/GitHubCalendar"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse flex gap-1 items-end h-[120px] w-full justify-center opacity-50">
      {Array.from({ length: 40 }).map((_, i) => (
        <div key={i} className="bg-neutral-800 w-3 rounded-sm" style={{ height: "80%" }} />
      ))}
    </div>
  ),
});

export default function GitHubCalendarClient() {
  return <GitHubCalendar />;
}
