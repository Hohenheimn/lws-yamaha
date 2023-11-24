/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GMAP_API_KEY: process.env.GMAP_API_KEY,
    IMAGE_BASE_URL: process.env.IMAGE_BASE_URL,
    API_BASE_URL: process.env.API_BASE_URL,
    API_NEXT_BASE_URL: process.env.API_NEXT_BASE_URL,
  },
  images: {
    domains: [
      "yamaha-storage.s3.ap-southeast-1.amazonaws.com",
      "www.yamaha-motor.com.ph",
      "yamaha-motor.com",
      "yamaha-motor.com.ph",
    ],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
