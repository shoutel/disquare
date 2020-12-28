<template>
  <div
    class="list-wrapper"
    :class="listStyle.type"
  >
    <ul>
      <li
        v-for="list in listItem"
        :key="list.idx"
        class="list-item"
      >
        <router-link
          class="list-item-inner"
          :to="list.url"
          tag="div"
        >
          <div
            v-if="listStyle.type === 'default'"
            class="article-type"
          >
            <ImageIcon
              width="16"
              height="16"
            />
          </div>
          <div
            v-if="listStyle.type === 'feed'"
            class="article-thumb"
          >
            <img :src="list.thumbUrl">
          </div>
          <div class="article-info">
            <div class="list-title-comment">
              <p class="title">
                <router-link :to="list.url">
                  <span>Title</span>
                </router-link>
              </p>
              <div class="comment-count">
                <CommentIcon
                  class="icon-comment"
                  width="16"
                  height="16"
                />
                <span class="count">{{ list.comments }}</span>
              </div>
            </div>
            <div class="list-description">
              <div class="post-info">
                <router-link
                  :to="list.boardUrl"
                  class="category"
                >
                  <span>{{ list.boardName }}</span>
                </router-link>
                <span class="post-writer-count">by {{ list.writerInfo.userNick }} · 조회 {{ list.readed }} · 추천 {{ list.voteUp }}</span>
              </div>
              <time
                class="post-date"
                :datetime="list.regdate"
              >방금 전</time>
            </div>
            <div
              v-if="listStyle.type === 'feed'"
              class="list-content-short"
            >
              {{ list.content }}
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import ImageIcon from '@/assets/svg/image.svg'
import CommentIcon from '@/assets/svg/comment-square.svg'

export default {
  name: 'CommonList',
  components: {
    ImageIcon,
    CommentIcon
  },
  data () {
    return {
      listStyle: this.$default.listStyle,
      listItem: [
        {
          idx: 0,
          articleType: 'image',
          title: 'tesrt',
          url: '/sdfdffsd/sdfsdf',
          regdate: '2020-03-13T02:03:26+09:00',
          thumbUrl: 'https://sdfsdf.com/sdfsdf/sdfsdf.jpg',
          comments: 12,
          readed: 33,
          voteUp: 3,
          boardName: '게시판',
          boardUrl: '/c/sdfsdf',
          content: 'ContentTestㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹ',
          writerInfo: {
            userNo: 123894,
            userId: 'admin',
            userNick: '관리자0'
          }
        },
        {
          idx: 1,
          articleType: 'image',
          title: 'tesrt',
          url: '/sdfdffsd/sdfsdf',
          regdate: '2020-03-13T02:03:26+09:00',
          thumbUrl: 'https://sdfsdf.com/sdfsdf/sdfsdf.jpg',
          comments: 12,
          readed: 33,
          voteUp: 3,
          boardName: '게시판',
          boardUrl: '/c/sdfsdf',
          content: 'ContentTestㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹ',
          writerInfo: {
            userNo: 123894,
            userId: 'admin',
            userNick: '관리자0'
          }
        },
        {
          idx: 2,
          articleType: 'image',
          title: 'tesrt',
          url: '/sdfdffsd/sdfsdf',
          regdate: '2020-03-13T02:03:26+09:00',
          thumbUrl: 'https://sdfsdf.com/sdfsdf/sdfsdf.jpg',
          comments: 12,
          readed: 33,
          voteUp: 3,
          boardName: '게시판',
          boardUrl: '/c/sdfsdf',
          content: 'ContentTestㄴㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹ',
          writerInfo: {
            userNo: 123894,
            userId: 'admin',
            userNick: '관리자0'
          }
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

$desc-txt-color: $dq-gray-07;

.list-wrapper {
  ul {
    list-style: none;
    margin: 0;
  }

  .list-item {
    &:first-child {
      .list-item-inner {
        border-top-width: 1px;
        border-radius: 3px 3px 0 0;
      }
    }

    &:last-child {
      .list-item-inner {
        border-radius: 0 0 3px 3px;
      }
    }

    &>.list-item-inner {
      border: 1px solid $dq-gray-02;
      border-top-width: 0;
      background-color: #fff;
      position: relative;
      padding: 6px 14px;
      box-sizing: border-box;
      color: #000;
      @include flexbox;
      @include align-items(flex-start);

      &:hover {
        background-color: $dq-gray-00;
        cursor: pointer;
      }

      .article-type {
        @include flex(0 0 16px);
        padding-top: 2px;
      }

      .article-info {
        width: 100%;
        margin-left: 10px;

        .list-title-comment {
          @include flexbox();
          @include align-items(flex-start);
          margin-bottom: 5px;

          .title {
            @include flex(1);
            line-height: 1.3rem;
            word-break: break-word;
            margin: 0;
            margin-right: 10px;

            a {
              color: #000;
            }
          }

          .comment-count {
            @include flexbox();
            @include align-items(flex-start);
            @include justify-content(flex-end);
            @include flex(0 0 64px);
            padding-top: 2px;

            .icon-comment {
              fill: $desc-txt-color;
            }

            .count {
              line-height: 1rem;
              margin-left: 3px;
              color: $desc-txt-color;
              font-size: 12px;
            }
          }
        }

        .list-description {
          font-size: 12px;
          margin-bottom: 2px;
          line-height: 1rem;
          @include flexbox();
          @include justify-content(space-between);

          .post-info {
            .category {
              font-weight: 700;
              padding: 2px 4px;
              border-radius: 2px;
              background-color: $dq-color-01;
              color: #000;

              :hover {
                color: $dq-dark-04
              }
            }

            .post-writer-count {
              color: $desc-txt-color;
              margin-left: 7px;
            }
          }

          .post-date {
            color: $desc-txt-color;
            text-align: right;
            flex: 0 0 64px;
          }

          .post-writer-count,
          .post-date {
            line-height: 18px;
          }
        }
      }
    }
  }

  /* Feed type */
  &.feed {
    .list-item {
      &>.list-item-inner {
        padding: 10px 14px;

        .article-thumb {
          flex: 0 0 177px;
        }

        .article-info {
          margin-left: 14px;

          .list-description {
            margin-bottom: 7px;
          }

          .list-content-short {
            font-size: 13px;
            line-height: 1.2rem;
            word-break: break-word;
          }
        }
      }
    }
  }
}
</style>
