const path = require("path");

const CopyrightWebpackPlugin = require(path.resolve(
  __dirname,
  "./plugins/copyright-webpack-plugin"
));

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js"
  },
  resolveLoader: {
    modules: ["node_modules", "./loader"]
  },
  plugins: [new CopyrightWebpackPlugin({ name: "jm" })],
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: "replaceLoader",
            options: { name: "aaaaa" }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  }
};
