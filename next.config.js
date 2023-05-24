/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: '@import "src/public/styles/variables.scss"; @import "src/public/styles/mixins.scss";',
  },
};

module.exports = nextConfig;
