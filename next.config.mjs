/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media-us.landmarkshops.in",
      },
    ],
  },
};

export default nextConfig;
