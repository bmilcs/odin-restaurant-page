const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "img/[name].[ext]",
    clean: true, // remove unused files
  },

  mode: "development",

  devtool: "inline-source-map", // debugging

  plugins: [
    new HtmlWebpackPlugin({
      title: "Burger World: Odin Project #10",
      template: "./src/template.html",
      filename: "index.html",
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
        test: /\.(png|jpg|jpeg|gif)$/i, // images
        type: "asset/resource",
      },

      {
        test: /\.svg$/i,
        use: "raw-loader",
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // fonts
        type: "asset/resource",
      },
    ],
  },

  devServer: {
    static: "./dist",
  },

  optimization: {
    runtimeChunk: "single", // dev-server
  },
};
