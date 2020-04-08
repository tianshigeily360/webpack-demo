const webpack = require("webpack");
const commonConfig = require("./webpack.common");
const merge = require("webpack-merge");

const devConfig = {
  mode: "development",
  devtool: "eval-cheap-module-source-map", //
  devServer: {
    contentBase: "./dist",
    open: true,
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js"
  }
};

module.exports = merge(devConfig, commonConfig);
