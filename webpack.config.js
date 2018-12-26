const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9999,
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "src/index.html"),
        to: path.join(__dirname, "dist/index.html"),
      },
      {
        from: path.join(__dirname, "src/style.css"),
        to: path.join(__dirname, "dist/style.css"),
      },
    ]),
  ],
}
