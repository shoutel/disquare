const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: {
    index: path.resolve(__dirname, 'server', 'entry.server.js')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VUE_SSR': true
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    publicPath: '/',
    libraryTarget: 'commonjs2'
  }
})
