<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: 'Disquare',
    titleTemplate: '%s'
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
@import "@/styles/default";
@import "@/styles/st_common";
</style>
