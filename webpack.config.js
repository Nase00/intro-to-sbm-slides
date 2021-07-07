/* globals __dirname */
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const baseContext = path.join(__dirname, "./");

module.exports = {
  context: baseContext,
  entry: ["babel-polyfill", "./index"],
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    publicPath: "/",
    libraryTarget: "umd"
  },
  resolve: {
    modules: [baseContext, "node_modules"],
    extensions: [".js", ".jsx", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.js(x|)?$/,
        use: {
          loader: "babel-loader"
        },
        include: baseContext,
        exclude: /node_modules/
      },
      {
        test: /(\.css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.(svg|png|gif)$/,
        use: {
          loader: "file-loader"
        },
        include: [baseContext],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html"
    })
  ]
};
