/* eslint-disable */

const path = require("path");
const webpack = require("webpack");

const base = require("./webpack.config.js");

module.exports = {
  context: base.context,
  entry: base.entry,
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "./dist/"
  },
  plugins: base.plugins.concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]),
  module: base.module
};
