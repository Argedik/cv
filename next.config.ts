import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // ⬅️ BURAYA (root seviyesine)
  images: {
    unoptimized: true,     // ⬅️ sadece images ayarları burada kalacak
  },
};

export default nextConfig;
