import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/countries",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
