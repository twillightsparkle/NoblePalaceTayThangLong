import type { NextConfig } from "next";

const isProd = true;
const repoName = 'NoblePalaceTayThangLong';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
