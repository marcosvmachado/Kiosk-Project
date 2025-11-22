import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
    unoptimized: true,
  },
  basePath: '/Kiosk-Project',
  assetPrefix: '/Kiosk-Project/',
};


export default nextConfig;
