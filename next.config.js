const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // Desativa PWA no desenvolvimento
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPWA(nextConfig);
