/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Vault-2047' : '',
  assetPrefix: isProd ? '/Vault-2047' : '',
  images: {
    unoptimized: true,
  },
  // Allow network access from the host IP
  allowedDevOrigins: ['192.168.254.105', 'localhost:3000'],
};

export default nextConfig;
