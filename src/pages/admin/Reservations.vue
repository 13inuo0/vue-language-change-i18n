<template>
  <div class="space-y-6 bg-white text-black dark:bg-black dark:text-white p-4 rounded">
    <h1 class="text-3xl font-bold text-gray-800 dark:text-white">예약관리</h1>
    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">예약 정보를 관리하고 상태를 확인할 수 있습니다.</p>
    <!-- 통계카드 -->
    <DashboardStats :stats="stats" />
  </div>
</template>
<script setup>
import DashboardStats from '@/components/DashboardStats.vue';


// 통계 더미
const stats = [
  {
    title: "전체 예약",
    value: "24건",
    change: "+5건",
    icon: "fas fa-calendar-check",
    bg: "bg-blue-100 dark:bg-blue-900",
    color: "text-blue-600 dark:text-blue-300",
  },
  {
    title: "확정 예약",
    value: "18건",
    change: "+3건",
    icon: "fas fa-check-circle",
    bg: "bg-green-100 dark:bg-green-900",
    color: "text-green-600 dark:text-green-300",
  },
  {
    title: "대기 예약",
    value: "6건",
    change: "+2건",
    icon: "fas fa-clock",
    bg: "bg-yellow-100 dark:bg-yellow-900",
    color: "text-yellow-600 dark:text-yellow-300",
  },
];
</script>
