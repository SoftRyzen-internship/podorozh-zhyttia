const { i18n } = require('./next-i18next.config');
/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  reactStrictMode: true,
  images: {
    domains: ['www.datocms-assets.com'],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /.svg$/i,
        resourceQuery: /url/,
      },

      {
        test: /.svg$/i,
        issuer: /.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: ['@svgr/webpack'],
      }
    );

    fileLoaderRule.exclude = /.svg$/i;

    return config;
  },
  i18n,
};

module.exports = nextConfig;
