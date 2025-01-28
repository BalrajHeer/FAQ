const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", // Change to "production" for production build
  entry: "./faq.js", // Entry point (JS file)
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Output folder
  },
  devServer: {
    static: "./dist",
    hot: true,
    port: 9000, // Change if needed
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // SCSS to CSS
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/, // Handle HTML files
        use: ["html-loader"],
      },
      {
        test: /\.js$/, // JS processing
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Optional if using ES6+ features
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html", // Use index.html as the template
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({ filename: "styles.css" }),
  ],
};
