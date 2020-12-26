
<template>
  <footer
    id="footer"
    class="dq-footer"
  >
    <ul class="terms">
      <li><a href="#">이용약관</a></li>
      <li><a href="#">개인정보처리방침</a></li>
    </ul>
    <p class="copyright">
      &copy; 2019 {{ siteName }}
    </p>
  </footer>
</template>

<script>
export default {
  name: 'DisquareFooter',
  data () {
    return {
      siteName: this.$default.site_name
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/default";

.dq-footer {
  width: 100%;
  .terms {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
    list-style: none;
    padding-top: 30px;
    li {
      padding-right: 10px;
      margin-right: 10px;
      border-right: 1px solid #e0e0e0;
      &:last-child {
        padding: 0;
        margin: 0;
        border: none;
      }
      a {
        font-weight: 700;
      }
    }
  }
  .copyright {
    padding-top: 10px;
    text-align: center;
    padding-bottom: 30px;
    margin: 0;
  }
}
</style>
