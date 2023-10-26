/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  i18n: {
    locales: ["en", "fr", "kn"],
    defaultLocale: "en",
  },
  nextConfig,
};
