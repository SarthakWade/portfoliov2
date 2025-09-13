import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "static.expo.dev" },
      { protocol: "https", hostname: "www.chartjs.org" },
      { protocol: "https", hostname: "vectorsj.com" },
    ],
  },
};

export default nextConfig;
