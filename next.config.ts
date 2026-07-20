import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root (a parent folder also has a lockfile).
  turbopack: { root: import.meta.dirname },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [
      { protocol: "https", hostname: "flagcdn.com" },
    ],
  },
};

export default nextConfig;
