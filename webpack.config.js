const path = require('path');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    main:'./src/js/main.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devtool: isDevelopment && "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|gif|jpg|png|eot|woff|ttf)$/,
        loader: 'url-loader',
        options: {
          limit: 8000,
          sourceMap: true
        }
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          sourceMap: true
        }
      },
      {
        test: /\.(jpg|png|gif|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/',
              useRelativePath: true
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: true
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
      
    ]
  }
};
