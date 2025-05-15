import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const repoName = 'next-tab';

const nextConfig: NextConfig = {
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  output: 'export',
  distDir: 'out',
};

export default nextConfig;
