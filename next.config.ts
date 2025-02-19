import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // Allow all images from Unsplash
      },
    ],
  },
  experimental: {
    serverActions: {}, // Fixes the "Expected object, received boolean" issue
  },
};

export default nextConfig;
