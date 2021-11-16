const path = require("path");
const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config.js");
const IgnoreEmitPlugin = require("ignore-emit-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  ...defaultConfig,
  entry: {
    ...defaultConfig.entry,
    style: path.resolve(process.cwd(), "src", "style.css"),
    editor: path.resolve(process.cwd(), "src", "editor.css"),
  },
  optimization: {
    ...defaultConfig.optimization,
    splitChunks: {
      cacheGroups: {
        default: false,
      },
    },
    minimizer: [new OptimizeCssAssetsPlugin()],
    minimize: true,
  },
  plugins: [...defaultConfig.plugins, new IgnoreEmitPlugin(["editor.js", "style.js", "editor.asset.php", "editor.asset.php", "style.asset.php", "editor.css.map", "style.css.map"])],
};
