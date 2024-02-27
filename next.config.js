/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
    relay: {
      src: './',
      artifactDirectory: './__generated__',
      language: 'typescript',
      eagerEsModules: false,
    },
    reactRemoveProperties: true,
    removeConsole: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: 'default-src "self"; script-src "none"; sandbox;',
    domains: [
      'movementstrategy.com',
      'imager-prod.onquidd.com',
      'rickandmortyapi.com',
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig
