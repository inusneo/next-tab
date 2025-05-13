import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  assetPrefix: isProd ? 'https://inusneo.github.io/next-tab' : '',
};

export default nextConfig;
