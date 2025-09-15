import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

// Configure GitHub Pages basePath/assetPrefix when building in Actions
const isGithubActions = !!process.env.GITHUB_ACTIONS;
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrgPages = !!repo && repo.endsWith(".github.io");
const hasCustomDomain = fs.existsSync(path.join(process.cwd(), "public", "CNAME"));

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",
  // Set basePath and assetPrefix only when building on GitHub Actions (for <user>.github.io/<repo>)
  // Do NOT set basePath if using a custom domain (CNAME present)
  ...(isGithubActions && repo && !isUserOrOrgPages && !hasCustomDomain
    ? {
      basePath: `/${repo}`,
      assetPrefix: `/${repo}/`,
    }
    : {}),
  images: {
    // GitHub Pages doesn't support the default Next.js Image Optimization CDN
    unoptimized: true,
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
