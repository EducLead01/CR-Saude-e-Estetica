import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/CR-Saude-e-Estetica",
  assetPrefix: "/CR-Saude-e-Estetica",
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/CR-Saude-e-Estetica",
  },
};

export default nextConfig;
