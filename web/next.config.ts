import type { NextConfig } from "next";

/**
 * GitHub Pages serves this project from a subpath, so basePath comes from the
 * environment: empty locally, `/gabriel-career-evolution-os` in CI.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
