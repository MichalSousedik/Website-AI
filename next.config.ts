import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
      { protocol: "https", hostname: "media.licdn.com" },
      { protocol: "https", hostname: "cdn-icons-png.flaticon.com" },
    ],
  },
};

export default nextConfig;
