const path = require("path");
const IgnoreEmitPlugin = require("ignore-emit-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    single: [path.resolve(process.cwd(), "assets/css/single.css"), path.resolve(process.cwd(), "style.css")],
    contact: [path.resolve(process.cwd(), "assets/css/contact.css"), path.resolve(process.cwd(), "style.css")],
    sitemap: [path.resolve(process.cwd(), "assets/css/sitemap.css"), path.resolve(process.cwd(), "style.css")],
    page: [path.resolve(process.cwd(), "assets/css/page.css"), path.resolve(process.cwd(), "style.css")],
    category: [path.resolve(process.cwd(), "assets/css/category.css"), path.resolve(process.cwd(), "style.css")],
    author: [path.resolve(process.cwd(), "assets/css/author.css"), path.resolve(process.cwd(), "style.css")],
    index: [path.resolve(process.cwd(), "assets/css/index.css"), path.resolve(process.cwd(), "style.css")],
    search: [path.resolve(process.cwd(), "assets/css/search.css"), path.resolve(process.cwd(), "style.css")],
    404: [path.resolve(process.cwd(), "assets/css/404.css"), path.resolve(process.cwd(), "style.css")],
  },
  output: {
    path: path.resolve(__dirname, "assets", "css"),
  },
  devServer: { hot: true },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    minimize: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].min.css",
    }),
    new IgnoreEmitPlugin(["single.js", "page.js", "category.js", "author.js", "index.js", "search.js", "404.js", "contact.js", "sitemap.js"]),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
