import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
