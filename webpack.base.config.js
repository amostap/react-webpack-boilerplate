const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
  entry: {
    app: ['babel-polyfill', 'app.jsx']
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx', '.json', '.css'],
    alias: { 'lodash-es': 'lodash' }
  },
  plugins: [
    new MomentLocalesPlugin(),
    new WebpackChunkHash(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: m => m.context && m.context.includes('node_modules')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
        removeRedutantAttributes: true
      }
    })
  ],
  module: {
    rules: [
      // JavaScript / ES6 / React
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, './src')],
        loader: 'babel-loader'
      },
      // Inline base64 URLs for <=8k images, direct URLs for the rest
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: 'images/[name].[ext]?[hash]'
        }
      },
      // Inline base64 URLs for <=8k SVGs, direct URLs for the rest
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          limit: 8 * 1024,
          name: 'images/[name].[ext]?[hash]',
          noquotes: true
        }
      }
    ]
  }
};
