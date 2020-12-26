<template>
  <div class="list-type-control">
    <ul>
      <li>
        <a
          href="javascript:;"
          :class="{ active: listType['default'] }"
          @click="setListType('default')"
        >
          <ListIcon
            width="16"
            height="16"
          />
          <span class="screenreader-txt">리스트형</span>
        </a>
      </li>
      <li>
        <a
          href="javascript:;"
          :class="{ active: listType['feed'] }"
          @click="setListType('feed')"
        >
          <ListRichIcon
            width="16"
            height="16"
          />
          <span class="screenreader-txt">피드형</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import ListIcon from '@/assets/svg/list.svg'
import ListRichIcon from '@/assets/svg/list-rich.svg'

export default {
  name: 'HomeListTypeControl',
  components: {
    ListIcon,
    ListRichIcon
  },
  data () {
    return {
      listType: {
        default: true,
        feed: false
      }
    }
  },
  computed: {
    stateHomeList () {
      return this.$store.state.homeList
    }
  },
  created () {
    const listType = this.stateHomeList.listType
    this.setListType(listType)
  },
  methods: {
    setListType (type) {
      if (type === 'default') {
        this.$store.commit('setDefaultListStyle')
        this.listType.default = true
        this.listType.feed = false
      } else if (type === 'feed') {
        this.$store.commit('setFeedListStyle')
        this.listType.default = false
        this.listType.feed = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/default";

.list-type-control {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    @include flexbox();
    @include flex-direction(row);

    li {
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }

      &>a {
        display: block;
        width: 16px;
        height: 16px;

        svg {
          fill: $dq-gray-06;
        }

        &.active {
          svg {
            fill: #000;
          }
        }

        .screenreader-txt {
          text-indent: -1000000px;
          font-size: 0%;
        }
      }
    }
  }
}
</style>
