// Helper to get the asset base path for use in dynamic image src
// Next.js basePath/assetPrefix handles static src="..." automatically,
// but dynamic template literals like `/assets/${file}` need this prefix.
const ASSET_BASE = process.env.NODE_ENV === 'production' ? '/Vault-2047' : '';

export function assetUrl(path) {
  // path should start with /assets/...
  return `${ASSET_BASE}${path}`;
}

export default ASSET_BASE;
