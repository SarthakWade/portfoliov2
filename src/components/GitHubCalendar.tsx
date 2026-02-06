"use client";

import { useEffect, useState } from "react";
import { ActivityCalendar, type Activity, type ThemeInput } from "react-activity-calendar";

// Define a custom theme to match the portfolio's aesthetic
// User specified custom palette:
// 0: #131C27 (Background/Empty)
// 1: #162632 (Low) - Skipped to fit standard 5-level scale
// 2: #1C353C (Med-Low) -> mapped to index 1
// 3: #294F58 (Medium) -> mapped to index 2
// 4: #357571 (High) -> mapped to index 3
// 5: #48BA9F (Max) -> mapped to index 4
const customTheme: ThemeInput = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#131C27", "#1C353C", "#294F58", "#357571", "#48BA9F"],
};

const BAR_COUNT = 40;

export default function GitHubCalendar() {
  const [data, setData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [barHeights, setBarHeights] = useState<number[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        // Fetching last year's contributions for SarthakWade
        const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "SarthakWade";
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Failed to fetch");
        const json = await response.json();
        // The API returns an object { contributions: [...] } or just the array depending on endpoint versions.
        // v4 normally returns { contributions: [] }
        if (json.contributions) {
           setData(json.contributions);
        } else {
           setData([]);
        }
      } catch (e) {
        if ((e as Error).name === "AbortError") return;
        if (process.env.NODE_ENV !== "production") {
          console.error(e);
        }
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    let idleId: number | null = null;
    if (w.requestIdleCallback) {
      idleId = w.requestIdleCallback(fetchData);
    } else {
      idleId = window.setTimeout(fetchData, 0);
    }

    return () => {
      controller.abort();
      if (idleId !== null) {
        if (w.cancelIdleCallback) {
          w.cancelIdleCallback(idleId);
        } else {
          clearTimeout(idleId);
        }
      }
    };
  }, []);

  useEffect(() => {
    if (loading) {
      // Only generate on client
      setBarHeights(Array.from({ length: BAR_COUNT }, () => Math.random() * 80 + 20));
    }
  }, [loading]);

  if (error) {
    return (
      <div className="flex items-center justify-center text-sm text-neutral-500 py-6">
        Unable to load GitHub contributions.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden">
      {loading ? (
        <div className="animate-pulse flex gap-1 items-end h-[120px] w-full justify-center opacity-50">
          {/* Simple loading skeleton mimicking bars */}
          {barHeights.length === BAR_COUNT
            ? barHeights.map((height, i) => (
                <div
                  key={i}
                  className="bg-neutral-800 w-3 rounded-sm"
                  style={{ height: `${height}%` }}
                ></div>
              ))
            : Array.from({ length: BAR_COUNT }).map((_, i) => (
                <div
                  key={i}
                  className="bg-neutral-800 w-3 rounded-sm"
                  style={{ height: `80%` }}
                ></div>
              ))}
        </div>
      ) : (
        <div className="w-full flex justify-center overflow-x-auto no-scrollbar py-4">
          <ActivityCalendar
            data={data}
            theme={customTheme}
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            labels={{
              legend: {
                less: "Less",
                more: "More",
              },
              months: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              totalCount: "{{count}} contributions in the last year",
              weekdays: [
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
              ],
            }}
            colorScheme="dark"
            style={{
              maxWidth: "100%",
            }}
          />
        </div>
      )}
    </div>
  );
}
