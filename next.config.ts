import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  // Run velite during `next dev` / `next build` via webpack tap (optional).
  webpack: (config) => {
    config.plugins ||= [];
    // Velite is wired via build script; keeping webpack cfg minimal here.
    return config;
  },
};

export default nextConfig;
