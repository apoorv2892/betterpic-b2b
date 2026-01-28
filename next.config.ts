import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  ...(process.env.NODE_ENV === 'development' ? {
    turbopack: {
      rules: {
        "*.{jsx,tsx}": {
          loaders: [path.resolve(process.cwd(), 'src/visual-edits/component-tagger-loader.js')]
        }
      }
    }
  } : {})
};

export default nextConfig;
