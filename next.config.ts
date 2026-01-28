import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(process.cwd(), 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  distDir: '.next',
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
// Orchids restart: 1769086751583
