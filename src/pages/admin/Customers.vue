<template>
  <div class="space-y-6 bg-white text-black dark:bg-black dark:text-white p-4 rounded">
    <h1 class="text-3xl font-bold text-gray-800 dark:text-white">고객관리</h1>
    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">고객 정보를 관리하고 상태를 확인할 수 있습니다.</p>
    <!-- 통계카드 -->
    <DashboardStats :stats="stats" />
  </div>
</template>
<script setup>
import DashboardStats from "@/components/DashboardStats.vue";
import { ref } from "vue";

const stats = ref([
  {
    title: "전체 고객",
    value: `10명`,
    change: "+2명",
    icon: "fas fa-users",
    bg: "bg-blue-100 dark:bg-blue-900",
    // text: "text-blue-600 dark:text-blue-300",
    color: "text-blue-600",
  },
  {
    title: "활성 고객",
    value: `7명`,
    change: "+1명",
    icon: "fas fa-check-circle",
    bg: "bg-green-100 dark:bg-green-900",
    text: "text-green-600 dark:text-green-300",
    color: "text-green-600",
  },
  {
    title: "평균 예약",
    value: "3.2건",
    change: "+0.5건",
    icon: "fas fa-calendar-check",
    bg: "bg-yellow-100 dark:bg-yellow-900",
    text: "text-yellow-600 dark:text-yellow-300",
    color: "text-yellow-600",
  },
]);
</script>
