/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Vault-2047' : '',
  images: {
    unoptimized: true,
  },
  // Allow network access from the host IP
  allowedDevOrigins: ['192.168.254.105', 'localhost:3000'],
};

export default nextConfig;
