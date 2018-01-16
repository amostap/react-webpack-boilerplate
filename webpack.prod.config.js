const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const config = require('./webpack.base.config');

const GLOBALS = {
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
};

module.exports = merge(config, {
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/'
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
        drop_console: true
      },
      output: {
        comments: false
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
      allChunks: true
    })
  ],
  module: {
    rules: [
      // Global styles
      {
        test: /\.css$/,
        include: path.resolve(__dirname, './src/styles'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        })
      },
      // CSS-modules
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, './src/components'),
          path.resolve(__dirname, './src/elements'),
          path.resolve(__dirname, './src/layouts')
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]--[hash:base64:5]'
              }
            },
            'postcss-loader'
          ]
        })
      },
      // ANTDesign less
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'less-loader'
          ]
        })
      },
      // Images optimisation
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        loader: 'image-webpack-loader',
        enforce: 'pre'
      }
    ]
  }
});
