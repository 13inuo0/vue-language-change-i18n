<template>
  <div class="space-y-6 bg-white text-black dark:bg-black dark:text-white p-4 rounded">
    <h1 class="text-3xl font-bold text-gray-800 dark:text-white">기사관리</h1>
    <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">기사 정보를 관리하고 상태를 확인할 수 있습니다.</p>
    <!-- 통계카드 -->
    <DashboardStats :stats="stats" />
  </div>
  
</template>
<script setup>
import DashboardStats from '@/components/DashboardStats.vue';
import { ref } from 'vue';

const stats = ref([
  {
    title: "전체 기사",
    // value: `${worker_name.value.length}명`,
    value: "15명",
    change: "+3명",
    icon: "fas fa-user-tie",
    bg: "bg-blue-100 dark:bg-blue-900",
    color: "text-blue-600 dark:text-blue-300",
  },
  {
    title: "활동중",
    value: "4명",
    change: "+1명",
    icon: "fas fa-check-circle",
    bg: "bg-green-100 dark:bg-green-900",
    color: "text-green-600 dark:text-green-300",
  },
  {
    title: "평균 평점",
    value: "4.6",
    change: "+0.1",
    icon: "fas fa-star",
    bg: "bg-yellow-100 dark:bg-yellow-900",
    color: "text-yellow-600 dark:text-yellow-300",
  },
]);
</script>
