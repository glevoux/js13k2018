'use strict';

// Modules
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

var config = {
  mode: 'development',
  devtool: 'source-map',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'game.bundle.js'
  },
  resolve: {
    alias: {
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
            name: '[path][name].[ext]',
            outputPath: 'images/'
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    port: 4242
  }
}

module.exports = config;
