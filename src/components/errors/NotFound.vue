<template>
  <div id="error-box-center">
    <div class="container">
      <div
        id="notfound"
        class="text-center"
      >
        <h1>404</h1>
        <h2>Oops! Page not found.</h2>
        <p>찾으시는 페이지가 존재하지 않거나 이동되었습니다.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundError',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
#error-box-center {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    padding: 25px;
  }

  .text-center {
    text-align: center;
  }

  h1 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 60px;
    font-weight: 700;
    line-height: 60px;
  }

  h2 {
    margin: 0;
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
  }
}
</style>
