<template>
  <div class="dq-body">
    <div class="container">
      <div class="sidebar-left">
        <sidebar-menu />
      </div>
      <div class="main-content">
        <div class="title-area">
          <h2
            :alt="pageTitle"
          >
            {{ pageTitle }}
          </h2>
          <home-list-type-control />
        </div>
        <common-list />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarMenu from './SidebarMenu.vue'
import CommonList from '@/components/board/CommonList.vue'
import HomeListTypeControl from '@/components/board/HomeListTypeControl.vue'

export default {
  name: 'MainBoardList',
  components: {
    'sidebar-menu': SidebarMenu,
    'common-list': CommonList,
    'home-list-type-control': HomeListTypeControl
  },
  props: {
    pageTitle: {
      type: String,
      default: '홈'
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/default";

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
