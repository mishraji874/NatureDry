import type { NextConfig } from "next";

const nextConfig = {
  turbopack: {
    resolveAlias: {
      fs: { browser: "./empty.js" },
      path: { browser: "./empty.js" },
    },
  },
};

export default nextConfig;
