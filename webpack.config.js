const path = require("path");
const PugPlugin = require("pug-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  output: {
    path: path.join(__dirname, "dist/"),
    publicPath: "/",
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new PugPlugin({
      minify: true,
      pretty: "auto",
      entry: {
        index: "./src/pages/index.pug",
        catalog: "./src/pages/catalog.pug",
        product: "./src/pages/product.pug",
        cooperation: "./src/pages/cooperation.pug",
      },
      js: {
        filename: "js/[name].[contenthash:8].js",
      },
      css: {
        filename: "css/[name].[contenthash:8].css",
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ["css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|webp)/,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name].[hash:8][ext]",
        },
      },
      {
        test: /\.(woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext][query]",
        },
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    watchFiles: {
      paths: ["src/**/*.*", "assets/css/scss/**/*.*"],
      options: {
        usePolling: true,
      },
    },
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.devtool = "source-map";
    config.mode = "development";
  }
  return config;
};
