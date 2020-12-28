<template>
  <main-board-list :page-title="pageTitle" />
</template>

<script>
import MainBoardList from './home/MainBoardList'

export default {
  name: 'Home',
  components: { MainBoardList },
  data () {
    return {
      pageTitle: '인기 게시물'
    }
  },
  metaInfo () {
    return {
      title: this.pageTitle,
      titleTemplate (titleChunk) {
        const siteName = this.$default.site_name
        return titleChunk ? `${titleChunk} - ${siteName}` : `${siteName}`
      }
    }
  }
}
</script>
