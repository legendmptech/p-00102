/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "https://st2.depositphotos.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "storage.needpix.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "google.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
