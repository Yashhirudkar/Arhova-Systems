/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'arhovasystems.com',
      },
      {
        protocol: 'https',
        hostname: 'toposel.com',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
