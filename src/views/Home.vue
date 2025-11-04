<template>
  <div class="home">
    <h1>🏠 {{ $t("home.title") }}</h1>
    <router-link to="/reser" class="btn">{{ $t("home.goReserve")}}</router-link>
    <router-link to="/review" class="btn">{{ $t("home.goReview")}}</router-link>
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
    margin-left: 10px;
    padding: 10px 20px;
    background: #222;
    color: white;
    border-radius: 10px;
    text-decoration: none;
  }
}
</style>
