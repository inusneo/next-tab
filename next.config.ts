import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const repoName = 'https://inusneo.github.io/next-tab/';

const nextConfig: NextConfig = {
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
