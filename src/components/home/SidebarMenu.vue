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

  },
  created () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/default";

.sidebar-menu {
  .sidebar-menu-head {
    color: $dq-gray-07;
    font-size: 14px;
    font-weight: 400;
    display: block;
    padding: 0 12px;
  }

  .sidebar-menu-list {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      &>a {
        display: block;
        padding: 7px 12px;
        border-radius: 3px;
        color: #000;

        &.active {
          background-color: $dq-color-07;
          color: #fff;
        }
      }
    }
  }
}
</style>
