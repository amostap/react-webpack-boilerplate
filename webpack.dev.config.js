const merge = require('webpack-merge');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path');
const config = require('./webpack.base.config');

const GLOBALS = {
  'process.env': {
    NODE_ENV: JSON.stringify('development')
  }
};

module.exports = merge(config, {
  cache: true,
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new OpenBrowserPlugin({ url: 'http://localhost:8080/' })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loaders: 'eslint-loader',
        options: {
          quiet: false,
          failOnWarning: false
        }
      },
      // Global styles(hot loading enabled by default)
      {
        test: /\.css$/,
        include: path.resolve(__dirname, './src/styles'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      // CSS-modules
      {
        test: /\.css$/,
        include: [
          // Directories enabled CSS-modules
          path.resolve(__dirname, './src/components'),
          path.resolve(__dirname, './src/layouts')
        ],
        use: [
          'css-hot-loader',
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]--[hash:base64:5]'
            }
          },
          'postcss-loader'
        ]
      },
      // ANT-Design
      {
        test: /antd.*\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    port: 8080,
    host: '0.0.0.0',
    hot: true,
    inline: true,
    compress: false,
    stats: {
      colors: true,
      modules: false
    }
  }
});
