const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimazeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const fs = require("fs");
const lessToJs = require("less-vars-to-js");
const { loader } = require("mini-css-extract-plugin");
const themeVariables = lessToJs(
  fs.readFileSync(path.join(__dirname, "./src/ant.less"), "utf8")
);

const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

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

const getStyleLoader = (cssOptions, preProcessor) => {
  const loaders = [
    isDev && 'style-loader',
    isProd && MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: cssOptions
    },
    "postcss-loader",
  ].filter(Boolean);
  if (preProcessor) {
    loaders.push({
      loader: 'resolve-url-loader',
      options: {
        sourceMap: isProd,
        root: path.appSrc,
      },
    })
    switch (preProcessor) {
      case "sass-loader": {
        loaders.push({
          loader: preProcessor,
          options: {
            sourceMap: isDev,
          }
        });
        return loaders;
      }
      case "less-loader": {
        loaders.push({
          loader: preProcessor,
          options: {
            sourceMap: isDev,
            lessOptions: {
              javascriptEnabled: true,
              modifyVars: themeVariables,
            },
          },
        });
        return loaders;
      }
      default: {
        return loaders;
      }
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

const returnContentBase = () => {
  if (isDev) {
    return path.resolve(__dirname, "./src")
  }
  if (isProd) {
    return path.resolve(__dirname, "./dist")
  }
}

module.exports = {
  mode: process.env.NODE_ENV,
  devServer: {
    historyApiFallback: true,
    contentBase: returnContentBase(),
    watchContentBase: true,
    open: true,
    compress: true,
    hotOnly: isDev,
    inline: true,
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
        test: cssRegex,
        exclude: cssModuleRegex,
        use: getStyleLoader({
          importLoaders: 1,
          sourceMap: isDev
        })
      },
      {
        test: cssModuleRegex,
        use: getStyleLoader({
          importLoaders: 1,
          sourceMap: isDev,
          modules: {
            getLocalIdent: getCSSModuleLocalIdent,
          }
        })
      },
      //less
      {
        test: lessRegex,
        exclude: lessModuleRegex,
        use: getStyleLoader({
          importLoaders: 3,
          sourceMap: isDev
        }, 
        'less-loader')
      },
      {
        test: lessModuleRegex,
        use: getStyleLoader({
          importLoaders: 3,
          sourceMap: isDev,
          modules: {
            getLocalIdent: getCSSModuleLocalIdent,
          }
        },
        'less-loader')
      },
      //Sass
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: getStyleLoader({
          importLoaders: 3,
          sourceMap: isDev
        },
        'sass-loader')
      },
      {
        test: sassModuleRegex,
        use: getStyleLoader({
          importLoaders: 3,
          sourceMap: isDev,
          modules: {
            getLocalIdent: getCSSModuleLocalIdent,
          }
        },
        'sass-loader')
      },
    ],
  },
};