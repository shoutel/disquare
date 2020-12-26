// Import App
import Vue from 'vue'
import axios from 'axios'
import Options from '../src/options'
import vueRouter from '../src/router'
import vueStore from '../src/store'
import MainTemplate from '../src/App'

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

export default context => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$default = Options.default
    Vue.prototype.$http = axios

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
