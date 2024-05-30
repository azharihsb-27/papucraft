const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    watchFiles: ["src/**/*"],
    open: true,
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin allow-popup",
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    compress: true,
  },
});
