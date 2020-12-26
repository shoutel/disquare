<template>
  <div id="mainWrapper">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './header'
import AppFooter from './footer'

export default {
  name: 'DisquareMain',
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {
    }
  }
}
</script>
