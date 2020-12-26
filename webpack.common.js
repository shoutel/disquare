const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [
              { removeDoctype: true },
              { removeComments: true },
              { removeViewBox: false }
            ]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
        options: {
          name: './assets/img/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './assets/css/[name].css'
    }),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, 'src/')
    },
    extensions: ['*', '.js', '.vue', '.json']
  }
}
