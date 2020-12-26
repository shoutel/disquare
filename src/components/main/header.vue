<template>
  <header
    id="header"
    class="dq-header"
  >
    <div class="header-inner">
      <div class="header-left">
        <div class="logo-area">
          <router-link
            to="/"
            class="brand"
            :title="siteName"
          >
            Disquare
          </router-link>
        </div>
        <ul class="nav-menu">
          <li
            v-for="nav in siteNavItem"
            :key="nav.idx"
          >
            <router-link
              :to="{ path: nav.url }"
              active-class="active"
              exact
            >
              {{ nav.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="header-right">
        <div class="find-integrate-mini-bar">
          <form
            class="find-integrate-post-frm"
            action="/search"
            method="get"
            autocomplete="off"
          >
            <label
              class="find-integrate-search-icon"
              for="header-search-input"
            >
              <HeaderSearchIcon fill="#666" />
            </label>
            <input
              id="header-search-input"
              type="text"
              name="q"
              class="find-integrate-input"
              placeholder="Search"
            >
          </form>
        </div>
        <template v-if="isLogged">
          <router-link
            class="write-post-btn"
            to="/write"
          >
            <HeaderWriteIcon
              fill="#fff"
              class="icon-write-pencil"
            />
            <span>글쓰기</span>
          </router-link>
          <div
            class="my-profile-menu"
          >
            <a
              href="javascript:;"
              class="profile"
            >
              <img src="../../assets/user_profile.png">
              <span class="nickname-text">Guest</span>
              <ArrowBottomIcon class="icon-arrow-bottom" />
            </a>
          </div>
        </template>
        <template v-else>
          <router-link
            class="header-login-btn"
            to="/login"
          >
            <UserIcon class="icon-user" />
            <span>로그인</span>
          </router-link>
        </template>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderSearchIcon from '../../assets/svg/search.svg'
import HeaderWriteIcon from '../../assets/svg/pencil.svg'
import UserIcon from '../../assets/svg/user.svg'
import ArrowBottomIcon from '../../assets/svg/arrow-bottom.svg'

export default {
  name: 'DisquareHeader',
  components: {
    HeaderSearchIcon,
    HeaderWriteIcon,
    ArrowBottomIcon,
    UserIcon
  },
  data () {
    return {
      menuVisible: false,
      isLogged: false,
      siteName: 'Shoutel',
      siteNavItem: [
        {
          idx: 0,
          url: '/',
          name: '홈'
        },
        {
          idx: 1,
          url: '/hot',
          name: '화제의 게시물'
        },
        {
          idx: 2,
          url: '/community',
          name: '커뮤니티'
        }
      ]
    }
  },
  methods: {
    menuToggle: function () {
      this.menuVisible = this.menuVisible === false
      document.removeEventListener('click', this.menuToggle)
    },
    menuControl: function () {
      if (this.menuVisible === true) {
        document.addEventListener('click', this.menuToggle)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/default";

$header-height: 54px;

.dq-header {
  width: 100%;
  height: $header-height;
  background-color: #fff;
  display: block;

  a:hover,
  button:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }

  .header-inner {
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    @include flexbox();
    @include flex-direction(row);
    @include justify-content(space-between);
    @include align-items(center);

    .header-left {
      .logo-area,
      .nav-menu {
        overflow: hidden;
      }

      .logo-area {
        float: left;
        width: 110px;
        height: $header-height;

        a.brand {
          background-image: url(../../assets/shoutel.png);
          background-repeat: no-repeat;
          background-size: auto 20px;
          background-position: 0 50%;
          height: 100%;
          display: block;
          text-indent: -1000000px;
        }
      }

      .nav-menu {
        list-style: none;
        float: left;
        height: $header-height;
        margin: 0;
        margin-left: 1.4rem;
        padding: 0;
        @include flexbox();
        @include flex-direction(row);

        li {
          font-size: 14px;
          position: relative;
          line-height: $header-height;

          &>a {
            color: #000;
            display: block;
            height: 100%;
            padding: 0 .75rem;

            &:hover {
              color: $dq-dark-04;
            }

            &.active {
              font-weight: 700;

              &::after {
                content: '';
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
                height: 2px;
                background-color: #000;
              }
            }
          }
        }
      }
    }

    .header-right {
      @include flexbox();
      @include flex-direction(row);

      .find-integrate-mini-bar {
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;

        .find-integrate-post-frm {
          position: relative;

          .find-integrate-search-icon {
            position: absolute;
            top: 8px;
            left: 0;
            width: 16px;
            height: 16px;
            margin-left: 12px;
          }

          .find-integrate-input {
            border: 1px solid $dq-gray-02;
            box-shadow: none;
            border-radius: 3px;
            background-color: #fff;
            height: 32px;
            width: 234px;
            margin: 0;
            padding: 6px 12px 6px 34px;
            box-sizing: border-box;
            transition: background-color .2s, border .2s, width .4s;

            &:focus {
              border: 1px solid $dq-gray-03;
              background-color: $dq-gray-00;
              width: 280px;
            }

            &::placeholder {
              color: $dq-dark-03;
            }
          }
        }
      }

      .write-post-btn {
        display: block;
        padding: 0 10px;
        margin-left: 10px;
        color: #fff;
        background-color: $dq-color-07;
        border-radius: 3px;
        transition: background-color .2s;
        @include flexbox();
        @include align-items(center);

        &:hover {
          background-color: $dq-color-08;
        }

        .icon-write-pencil {
          margin-right: 3px;
        }
      }

      .header-login-btn {
        padding: 0 16px;
        margin-left: 10px;
        height: 32px;
        border-radius: 3px;
        border: 1px solid $dq-gray-02;
        background-color: transparent;
        color: #000;
        transition: background-color .2s;
        @include flexbox();
        @include align-items(center);

        .icon-user {
          fill: $dq-dark-05;
          margin-right: 5px;
        }

        &:hover {
          background-color: $dq-gray-01;
          border: 1px solid $dq-gray-03;
        }
      }

      .my-profile-menu {
        margin-left: 10px;

        a {
          color: #000;

          &:hover {
            color: $dq-dark-04;
          }

          &.profile {
            @include flexbox();
            @include align-items(center);

            img {
              width: 32px;
              height: 32px;
              border-radius: 100%;
            }

            .nickname-text {
              margin-left: 5px;
              max-width: 86px;
              display: block;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .icon-arrow-bottom {
              fill: $dq-dark-05;
              margin-left: 3px;
            }
          }
        }
      }
    }
  }
}

@media (-webkit-min-device-pixel-ratio: 1.25),
      (min-device-pixel-ratio: 1.25),
      (min-resolution: 1.25dppx),
      (min-resolution: 120dpi) {
  .dq-header .logo-area a.brand {
    background-image: url(../../assets/shoutel@2x.png);
  }
}

@media (-webkit-min-device-pixel-ratio: 2),
      (min-device-pixel-ratio: 2),
      (min-resolution: 2dppx),
      (min-resolution: 192dpi) {
  .dq-header .logo-area a.brand {
    background-image: url(../../assets/shoutel@3x.png);
  }
}
</style>
