const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimazeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const fs = require("fs");
const lessToJs = require("less-vars-to-js");
const themeVariables = lessToJs(
  fs.readFileSync(path.join(__dirname, "./src/ant.less"), "utf8")
);

const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";

const optimization = () => {
  let config = {
    splitChunks: {
      chunks: "all",
    },
  };
  if (isProd) {
    config.minimizer = [
      new OptimazeCssAssetsWebpackPlugin(),
      new TerserPlugin(),
    ];
  }

  return config;
};
const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const styleLoader = (loader) => {
  let configLoader = [
    MiniCssExtractPlugin.loader,
    "css-loader",
    "postcss-loader",
  ];

  switch (loader) {
    case "sass-loader": {
      configLoader.push(loader);
      return configLoader;
    }
    case "less-loader": {
      configLoader.push({
        loader: loader,
        options: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: themeVariables,
          },
        },
      });
      return configLoader;
    }
    default: {
      return configLoader;
    }
  }
};

const babelLoader = (preset) => {
  let loaders = [
    {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: [
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-transform-runtime",
          ["import", { libraryName: "antd", style: true }],
        ],
      },
    },
  ];

  if (preset) {
    loaders[0].options.presets.push(preset);
  }

  if (isDev) {
    loaders.push({
      loader: "eslint-loader",
      options: {
        fix: true,
      },
    });
  }

  return loaders;
};

module.exports = {
  mode: process.env.NODE_ENV,
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    hot: isDev,
    port: 3000,
  },
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: filename("js"),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: optimization(),
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./static/index.html"),
      filename: "index.html",
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./static/favicon.ico"),
          to: path.resolve(__dirname, "./dist"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
  ],
  module: {
    rules: [
      //JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: babelLoader(),
      },
      //TypeScript
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: babelLoader("@babel/preset-typescript"),
      },
      //React
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: babelLoader(),
      },
      //Img
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      //Fonts and svg
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        test: /\.css$/,
        use: styleLoader(),
      },
      {
        test: /\.less$/,
        use: styleLoader("less-loader"),
      },
      //Sass
      {
        test: /\.(sass|scss)$/,
        use: styleLoader("sass-loader"),
      },
    ],
  },
};