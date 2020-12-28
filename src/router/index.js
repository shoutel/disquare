import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import MainTemplate from '../components/main/MainTemplate'
import Home from '../components/Home'
import TrendingList from '../components/Trending'
import NewList from '../components/New'
import UserInfo from '../components/UserInfo'
import PageNotFound from '../components/errors/NotFound'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainTemplate,
      children: [
        {
          path: '/',
          component: Home,
          name: 'Home'
        },
        {
          path: '/custom',
          component: Home,
          name: 'CustomList'
        },
        {
          path: '/trending',
          component: TrendingList,
          name: 'TrendingList'
        },
        {
          path: '/new',
          component: NewList,
          name: 'NewList'
        },
        {
          path: '/user/:username',
          component: UserInfo,
          name: 'UserInfo'
        }
      ]
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
})

export default router
