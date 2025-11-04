<template>
  <div class="home">
    <h1>🏠 예약페이지</h1>
    <router-link to="/review" class="btn">리뷰 보러가기</router-link>
    
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.home {
  padding-top: 100px;
  text-align: center;

  .btn {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background: rgb(30, 30, 30);
    color: #fff;
    border-radius: 10px;
    text-decoration: none;
  }
}
</style>
