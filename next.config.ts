import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/list-countries",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
