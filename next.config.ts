import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
