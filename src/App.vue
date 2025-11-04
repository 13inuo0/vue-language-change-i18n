<template>
  <div>
    <!-- 헤더 -->
    <Header_w :isDark="isDarkHeader" :logoSrc="isDarkHeader ?  '/images/favicon_192.png':'/images/link.png' " />
    <!-- <Header_w :isDark="isDarkHeader" :logoSrc="isDarkHeader ?  '/images/favicon_192.png':'/images/link.png' " /> -->
    <!-- 페이지 내용 -->
    <router-view></router-view>
    <QuickTop />
  </div>
</template>
<script setup>
import { computed } from "vue";
import Header_w from "./components/Header_w.vue";
import QuickTop from "./components/QuickTop.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const isDarkHeader = computed(() => ["ReserVue", "ReviewVue"].includes(route.name));
</script>

<style lang="scss" scoped></style>
