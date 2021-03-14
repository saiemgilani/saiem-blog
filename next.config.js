module.exports = {
  async rewrites() {
    return [
      {
        source: '/landing',
        destination: '/',
      },
    ]
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generateSitemap')
    }

    return config
  },
}
