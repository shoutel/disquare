<template>
  <div class="sidebar-menu">
    <h4 class="sidebar-menu-head">
      홈
    </h4>
    <ul class="sidebar-menu-list">
      <li
        v-for="menu in menuListItem"
        :key="menu.idx"
      >
        <router-link
          :to="{ path: menu.url }"
          active-class="active"
          exact
        >
          {{ menu.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
  components: {

  },
  data () {
    return {
      menuListItem: [
        {
          idx: 0,
          name: '맞춤',
          url: '/'
        },
        {
          idx: 1,
          name: '인기',
          url: '/trending'
        },
        {
          idx: 2,
          name: '최신',
          url: '/new'
        }
      ]
    }
  },
  computed: {
    stateHomeList () {
      return this.$store.state.homeList
    }
  },
  created () {

  },
  methods: {

  }
}
</script>
