import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.bharatbooking.com",
      },
    ],
  },
  typescript:{
    ignoreBuildErrors:true, // ignore build errors
  }
  /* config options here */
};

export default nextConfig;
