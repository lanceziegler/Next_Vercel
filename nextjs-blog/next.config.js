const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  // Customizing the build directory
  distDir: 'build',

  // Adding environment variables
  env: {
    MY_CUSTOM_VARIABLE: 'Hello World!',
  },

  // Adding webpack configuration
  webpack: (config, { isServer }) => {
    // Custom webpack configuration
    // Example: Adding a new rule to handle SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Modify the webpack config based on the target (server or client)
    if (!isServer) {
      // Modify client-side webpack configuration
    }

    return config;
  },

  // Adding CSS configuration
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]_[hash:base64:5]',
  },

  // PostCSS configuration
  postcssLoaderOptions: {
    // Custom PostCSS plugins or options
  },

  // Adding other Next.js configuration options
  // Example: Setting a custom asset prefix for static files
  assetPrefix: '/my-assets',

  // Setting up redirects and rewrites
  async rewrites() {
    return [
      {
        source: '/old-url',
        destination: '/new-url',
        permanent: true,
      },
    ];
  },
});
