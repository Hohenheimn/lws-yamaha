/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GMAP_API_KEY: process.env.GMAP_API_KEY,
    IMAGE_BASE_URL: process.env.IMAGE_BASE_URL,
  },
  images: {
    domains: [
      "yamaha-storage.s3.ap-southeast-1.amazonaws.com",
      "yamaha-motor.com.ph",
    ],
  },
};

module.exports = nextConfig;
