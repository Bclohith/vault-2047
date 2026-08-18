/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  ...(isProd ? { output: 'export' } : {}),
  
  
  images: {
    unoptimized: true,
  },
  // Allow network access from the host IP
  allowedDevOrigins: ['192.168.254.105', 'localhost:3000'],
  
  async rewrites() {
    if (!isProd) {
      return [
        {
          source: '/assets/:path*',
          destination: '/assets/:path*',
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
