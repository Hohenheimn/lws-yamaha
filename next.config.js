/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GMAP_API_KEY: process.env.GMAP_API_KEY,
    IMAGE_BASE_URL: process.env.IMAGE_BASE_URL,
    API_BASE_URL: process.env.API_BASE_URL,
    API_NEXT_BASE_URL: process.env.API_NEXT_BASE_URL,
    GRECAPTCHA_API_KEY: process.env.GRECAPTCHA_API_KEY,
  },
  images: {
    domains: [
      "yamaha-storage.s3.ap-southeast-1.amazonaws.com",
      "www.yamaha-motor.com.ph",
      "yamaha-motor.com",
      "yamaha-motor.com.ph",
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/home",
  //     },
  //   ];
  // },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
