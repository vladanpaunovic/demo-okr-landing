/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.ctfassets.net", "www.1ovmany.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
