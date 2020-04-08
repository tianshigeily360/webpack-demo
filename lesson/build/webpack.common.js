const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    // publicPath: "https://www.cdn.com", // 公共资源地址
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        use: {
          loader: "url-loader",
          options: {
            name: "assets/images/[name].[hash].[ext]",
            limit: 20480
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: true
            }
          },
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  optimization: {
    runtimeChunk: {
      name: "runtime"
    },
    usedExports: true,
    splitChunks: {
      chunks: "all", // 分割异步代码还是同步代码，默认为 "all"，同时分割
      minSize: 30000, // 分割引入代码的最小值(默认 30 kb)
      // minRemainingSize: 0, // webpack5 中的新增选项，分割后剩余的代码模块的最小体积，默认值为 minSize，开发模式为 0
      maxSize: 0, // 大于多少进行二次分割
      minChunks: 1, // 分割后必须共享模块的最小块数，默认最少有一个可分割模块要用到此模块 (ex: 打包生成的 dist 目录下最少有一个文件要用到 lodash模块，才会对 lodash 进行分割打包)
      maxAsyncRequests: 6, // 异步按需加载时，并行请求的最大数量，数量过多会对服务器造成压力
      maxInitialRequests: 4, // 一个入口文件的最大并行请求数量
      automaticNameDelimiter: "~", // 文件名称分隔符
      automaticNameMaxLength: 30, // 文件名的最大字符数
      cacheGroups: {
        // 缓存组，通过前面配置的代码在这里做缓存，然后根据下面配置项进行细分配置
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 根据正则过滤这个组选择哪些模块
          priority: -10 // 优先级
          // filename: "vendors.[name].js" // 打包后的文件名
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true // 是否重用已分割打包的模块
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: path.resolve(__dirname, "../dist")
    })
  ],
  performance: false
};
