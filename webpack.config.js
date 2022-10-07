const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // remove unused files
  },
  mode: "development",
  devtool: "inline-source-map", // debugging
  devServer: {
    static: "./dist",
  },
  optimization: {
    runtimeChunk: "single", // dev-server
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Page: Odin Project #10",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i, // css
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i, // sass
        use: [
          // 3. Creates `style` nodes from JS strings
          "style-loader",
          // 2. Translates CSS into CommonJS
          "css-loader",
          // 1. Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // images
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // fonts
        type: "asset/resource",
      },
    ],
  },
};
