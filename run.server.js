const express = require('express')
const fs = require('fs')
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')

const server = express()
const port = 3000

const distPath = 'dist'

const template = fs.readFileSync(path.resolve(__dirname, 'html', 'server', 'index.html'), 'utf-8')
const bundle = path.resolve(__dirname, distPath, 'js', 'index.bundle.js')

const renderer = createBundleRenderer(bundle, {
  runInNewContext: false,
  template: template
})

server.use('/assets', express.static(path.resolve(__dirname, distPath, 'assets')))
server.use('/icons', express.static(path.resolve(__dirname, distPath, 'icons')))

server.get('*', (req, res) => {
  const context = { url: req.url, title: 'Disquare' }

  renderer.renderToString(context, (err, html) => {
    if (err) {
      res.status(err.code).end('error')
    } else {
      res.end(html)
    }
  })
})

server.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
