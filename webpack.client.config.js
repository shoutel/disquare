const path = require('path')
const merge = require('webpack-merge')
const CopyPlugin = require('copy-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: {
    index: './src/main.js'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: './public',
          to: './',
          globOptions: {
            dot: false,
            gitignore: false,
            ignore: [
              '**/index.html'
            ]
          }
        }
      ]
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './assets/js/[name].bundle.js',
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendor'
        }
      }
    }
  }
})
