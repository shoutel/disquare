const path = require('path')

module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [
            { removeDoctype: true },
            { removeComments: true },
            { removeViewBox: false }
          ]
        }
      })
    config
      .plugin('html')
      .tap(args => {
        args[0].template = path.resolve(__dirname, 'public', 'index.html')
        return args
      })
  },
  assetsDir: 'assets'
}
