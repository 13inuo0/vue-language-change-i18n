<template>
  <div class="space-y-6 bg-white text-black dark:bg-black dark:text-white p-4 rounded">
    <h1 class="text-3xl font-bold text-gray-800 dark:text-white">관리자 대시보드</h1>
    <!-- 통계카드 -->
    <DashboardStats :stats="stats" />

    <!-- 예약현황 -->
    <!-- 기사현황 -->
    <!-- 차트와 최근 예약 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 차트 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">예약 추이</h2>
        <div class="h-64">
          <Chart />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Chart from "@/components/Chart.vue";
import DashboardStats from "@/components/DashboardStats.vue";

// 통계카드 더미
const stats = [
  {
    title: "전체 예약",
    value: "120",
    change: "+12%",
    icon: "fas fa-calendar-check",
    // bgColor: "bg-blue-100 dark:bg-blue-900",
    // textColor: "text-blue-600 dark:text-blue-300",
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "전체 사용자",
    value: "50",
    change: "+5%",
    icon: "fas fa-users",
    // bgColor: "bg-green-100 dark:bg-green-900",
    // textColor: "text-green-600 dark:text-green-300",
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "평균 평점",
    value: "4.8",
    change: "+0.2",
    icon: "fas fa-star",
    // bgColor: "bg-yellow-100 dark:bg-yellow-900",
    // textColor: "text-yellow-600 dark:text-yellow-300",
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
];
</script>
