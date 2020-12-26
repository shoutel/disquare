<template>
  <div class="dq-body">
    <div class="container">
      <div class="sidebar-left">
        <sidebar-menu />
      </div>
      <div class="main-content">
        <div class="title-area">
          <h2>새로운 게시물</h2>
          <home-list-type-control />
        </div>
        <common-list />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMenu from './home/SidebarMenu.vue'
import CommonList from './board/CommonList.vue'
import HomeListTypeControl from './board/HomeListTypeControl.vue'

export default {
  name: 'Home',
  components: {
    'sidebar-menu': SidebarMenu,
    'common-list': CommonList,
    'home-list-type-control': HomeListTypeControl
  },
  data () {
    return {

    }
  },
  metaInfo: {
    title: '새로운 게시물',
    titleTemplate (titleChunk) {
      const siteName = this.$default.site_name

      return titleChunk ? `${titleChunk} - ${siteName}` : `${siteName}`
    }
  }
}
</script>
