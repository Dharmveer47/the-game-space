/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.rawg.io',
      },
    ],
  },
  env: {
    apiKey: '284927aaf6594ba5b51fc99e2a4dfa26',
  },
};

module.exports = nextConfig;
