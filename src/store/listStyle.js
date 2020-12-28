import Cookie from 'js-cookie'

const types = [
  'default',
  'feed'
]

let isServer
if (process.env.VUE_SSR) {
  isServer = true
}

const listStyle = {
  type: undefined,
  feedType () {
    const t = types[1]
    if (!isServer) Cookie.set('listType', t)
    this.type = t
  },
  defaultType () {
    const t = types[0]
    if (!isServer) Cookie.set('listType', t)
    this.type = t
  },
  setTypeByCookie (c) {
    const t = c.get('listType')
    if (!t || t === types[0]) {
      this.defaultType()
    } else if (t === types[1]) {
      this.feedType()
    } else {
      this.defaultType()
    }
  }
}

export default listStyle
