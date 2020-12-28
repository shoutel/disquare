// Import App
import Vue from 'vue'
import Options from '@/options'
import vueRouter from '@/router'
import vueStore from '@/store'
import MainTemplate from '@/App'
import listStyle from '@/store/listStyle'

const createApp = ssrContext => {
  const router = vueRouter
  const store = vueStore

  const app = new Vue({
    router,
    ssrContext,
    store: store,
    render: h => h(MainTemplate)
  })

  const meta = app.$meta()

  return { app, router, meta, store }
}

const ssrCookie = {
  cookies: null,
  get (k) {
    if (this.cookies) {
      if (k in this.cookies) {
        return this.cookies[k]
      }
    }

    return null
  }
}

export default context => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$default = Options.default

    ssrCookie.cookies = context.cookies
    listStyle.setTypeByCookie(ssrCookie)
    Vue.prototype.$default.listStyle = listStyle

    const { app, router, meta, store } = createApp(context)

    const currentRoute = router.currentRoute
    const currentPath = currentRoute.fullPath
    const currentRouteMatched = currentRoute.matched

    if (currentRouteMatched.length === 0 || currentPath !== context.url) {
      router.push(context.url)
        .catch((err) => {
          if (currentRouteMatched.length !== 0) console.log(err)
        })
    }

    // wait until router has resolved possible async components and hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()

      const error = {
        code: 404
      }

      context.rendered = () => {
        context.state = store.state
      }

      // no matched routes
      if (!matchedComponents.length) {
        return reject(error)
      }

      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            route: router.currentRoute
          })
        }
      })).then(() => {
        context.meta = meta

        resolve(app)
      }).catch((reject) => {
        console.log(reject)
      })
    }, reject)
  })
}
