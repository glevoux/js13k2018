'use strict';

// Modules
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlMinifierPlugin = require('html-minifier-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const autoprefixer = require('autoprefixer');

var config = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'game.bundle.js'
  },
  resolve: {
    alias: {
      Utils: path.resolve(__dirname, './src/components/utils'),
      Elements: path.resolve(__dirname, './src/components/elements'),
      Game: path.resolve(__dirname, './src/components/game'),
      Map: path.resolve(__dirname, './src/components/map'),
      Events: path.resolve(__dirname, './src/components/events'),
      Menu: path.resolve(__dirname, './src/components/menu/menu')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              autoprefixer: {
                browsers: ['last 2 versions']
              },
              plugins: () => [
                autoprefixer
              ]
            }
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.wav$|\.mp3$/,
        use: {
          loader: 'file-loader',
          options: {
            context: 'public/images/',
            name: '[name].[ext]',
            outputPath: '/'
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin(),
      new OptimizeCSSAssetsPlugin(),
      new HtmlMinifierPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      title: 'How I Save The Internet',
      inject: true,
      inlineSource: '.(js|css)$' // embed all javascript and css inline
    }),
    new HtmlWebpackInlineSourcePlugin()
  ]
}

module.exports = config;
