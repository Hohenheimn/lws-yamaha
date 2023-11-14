/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GMAP_API_KEY: process.env.GMAP_API_KEY,
  },
};

module.exports = nextConfig;
