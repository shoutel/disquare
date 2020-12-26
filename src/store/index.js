import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let listType = localStorage.getItem('listType')
if (!listType) listType = 'default'

const store = new Vuex.Store({
  state: {
    homeList: {
      listType: listType
    }
  },
  mutations: {
    setFeedListStyle (state) {
      state.homeList.listType = 'feed'
      localStorage.setItem('listType', 'feed')
    },
    setDefaultListStyle (state) {
      state.homeList.listType = 'default'
      localStorage.setItem('listType', 'default')
    }
  }
})

export default store
