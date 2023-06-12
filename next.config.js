/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },

  i18n: {
    locales: ['sl', 'en', 'hr'],
    defaultLocale: 'sl'
  }
  
}

module.exports = nextConfig
