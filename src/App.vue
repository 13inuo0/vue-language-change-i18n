<template>
  <div v-if="!isSpecialPage">
    <!-- 헤더 -->
    <Header_w :isDark="isDarkHeader" :logoSrc="isDarkHeader ? '/images/favicon_192.png' : '/images/link.png'" />
    <!-- <Header_w :isDark="isDarkHeader" :logoSrc="isDarkHeader ?  '/images/favicon_192.png':'/images/link.png' " /> -->
    <!-- 페이지 내용 -->
    <router-view></router-view>
    <QuickTop />
  </div>
  <!-- 관리자, 기사페이지 -->
  <div v-else>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { computed } from "vue";
import Header_w from "./components/Header_w.vue";
import QuickTop from "./components/QuickTop.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isDarkHeader = computed(() => ["ReserVue", "ReviewVue"].includes(route.name));
// 관리자 기사 페이지 레이아웃
const isSpecialPage = computed(() => {
  return route.path.startsWith("/admin") || route.path.startsWith("/worker");
});
</script>

<style lang="scss" scoped></style>
