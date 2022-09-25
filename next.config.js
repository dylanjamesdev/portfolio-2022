/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/dylanjamesdev',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/http',
        permanent: true,
      },
      {
        source: '/webmaster',
        destination: '/rants/webmaster',
        permanent: true,
      },
      {
        source: '/words',
        destination: '/rants/words',
        permanent: true,
      },

    ]
  },

};

module.exports = nextConfig;
