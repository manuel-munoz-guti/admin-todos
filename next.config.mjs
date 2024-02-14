/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tailus.io',
            port: '',
            pathname: '/sources/**',
          },
        ],
      },
};

export default nextConfig;
