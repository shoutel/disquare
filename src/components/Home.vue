<template>
  <div class="dq-body">
    <div class="container">
      <div class="sidebar-left">
        <sidebar-menu />
      </div>
      <div class="main-content">
        <div class="title-area">
          <h2>맞춤 게시물</h2>
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
    title: '',
    titleTemplate (titleChunk) {
      const siteName = this.$default.site_name

      return titleChunk ? `${titleChunk} - ${siteName}` : `${siteName}`
    }
  }
}
</script>

<style lang="scss">
@import "../styles/default";

.dq-body {
  .container {
    width: 960px;
    margin: 0 auto;
    margin-top: 16px;
    padding: 0;
    @include flexbox();
    @include flex-direction(row);
    @include justify-content(space-between);

    .sidebar-left {
      width: 200px;

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
    }

    .main-content {
      width: 744px;

      .title-area {
        @include flexbox();
        @include flex-direction(row);
        @include align-items(center);
        @include justify-content(space-between);
        margin-bottom: 18px;

        h2 {
          font-size: 22px;
          font-weight: 700;
          margin: 0;
        }
      }
    }
  }
}
</style>
