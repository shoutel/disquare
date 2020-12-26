<template>
  <div class="dq-body">
    <div class="ca-info-top">
      <h4 class="preface">
        유저 정보
      </h4>
      <h1 class="nickname">
        {{ $route.params.username }}
      </h1>
      <div class="controls">
        <a
          class="button favorite"
          href="#"
          title="즐겨찾기 추가"
        >
          <span class="fi-star" />&nbsp;즐겨찾기
        </a>
        <a
          class="button"
          href="#"
          title="텍스트"
        ><span class="fi-book" />&nbsp;문서</a>
        <a
          class="button"
          href="#"
          title="평가하기"
        >평가하기</a>
        <div class="rating">
          <div
            class="star"
            title="평점"
          >
            총 5점 중 5점
          </div>
          <span class="rating-score">5/5</span>
          <button
            class="button-info"
            title="상세정보"
          >
            <span class="cai">
              <InfoIcon fill="#373589" />
            </span>
          </button>
          <div class="information">
            <div class="info-top">
              <div class="rate-group">
                <span class="star-mini r5" />
                <span class="bar">
                  <span
                    class="filled"
                    :style="{
                      width: ratePercent[0] + '%'
                    }"
                  />
                </span>
              </div>
              <div class="rate-group">
                <span class="star-mini r4" />
                <span class="bar">
                  <span
                    class="filled"
                    :style="{
                      width: ratePercent[1] + '%'
                    }"
                  />
                </span>
              </div>
              <div class="rate-group">
                <span class="star-mini r3" />
                <span class="bar">
                  <span
                    class="filled"
                    :style="{
                      width: ratePercent[2] + '%'
                    }"
                  />
                </span>
              </div>
              <div class="rate-group">
                <span class="star-mini r2" />
                <span class="bar">
                  <span
                    class="filled"
                    :style="{
                      width: ratePercent[3] + '%'
                    }"
                  />
                </span>
              </div>
              <div class="rate-group">
                <span class="star-mini r1" />
                <span class="bar">
                  <span
                    class="filled"
                    :style="{
                      width: ratePercent[4] + '%'
                    }"
                  />
                </span>
              </div>
            </div>
            <div class="info-bottom">
              총 <span>132,189</span>명 투표
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="ca-stat info-page">
      <div class="container">
        <div class="ca-stat-header">
          <h1>{{ $route.params.username }}님의 마이페이지</h1>
        </div>
        <div class="ca-stat-view">
          <div class="stat-tab">
            <ul>
              <li class="active">
                <a href="#">메인</a>
              </li>
              <li><a href="#">게시물</a></li>
              <li><a href="#">댓글</a></li>
              <li><a href="#">정보</a></li>
            </ul>
          </div>

          <div class="stats">
            <div class="about-user">
              <h3>회원 정보</h3>
              <p>가입일: 2019-05-11 00:00:00</p>
              <h3>연락하기</h3>
              <ul>
                <li>Email: example@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoIcon from '../assets/svg/info.svg'

export default {
  name: 'UserInfo',
  metaInfo: {
    title: '회원 정보',
    titleTemplate: '%s | 디스퀘어'
  },
  components: {
    InfoIcon
  },
  data () {
    return {
      ratePercent: [0, 0, 0, 0, 0]
    }
  },
  created () {
  }
}
</script>
