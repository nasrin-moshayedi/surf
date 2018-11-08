// next.config.js
const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/i,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: './',
          outputPath: 'static/css/',
          name: '[name].[ext]',
        },
      },
    });
    return config
  },
});
