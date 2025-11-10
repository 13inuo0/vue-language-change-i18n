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
      <!-- 최근 내역 -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">최근 예약</h2>
        <div class="space-y-4">
          <div
            v-for="reservation in recentReservations"
            :key="reservation.Id"
            class="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div>
              <p class="font-medium text-gray-900 dark:text-white">{{ reservation.customerName }}</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ reservation.date }}</p>
            </div>
            <span :class="getStatusClass(reservation.status)" class="px-2 py-1 text-xs font-semibold rounded-full">
              {{ reservation.status }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Chart from "@/components/Chart.vue";
import DashboardStats from "@/components/DashboardStats.vue";
import { ref } from "vue";

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
// 최근예약
const recentReservations = ref([
  { id: 1, customerName: "김철수", date: "2024-03-20", status: "확정" },
  { id: 2, customerName: "이영희", date: "2024-03-21", status: "대기" },
  { id: 3, customerName: "박민수", date: "2024-03-22", status: "취소" },
  { id: 4, customerName: "정지은", date: "2024-03-23", status: "확정" },
]);

// 에약 상태 css
// 상태 css
const getStatusClass = (status) => {
  const statusClasses = {
    예약완료: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300",
    진행중: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300",
    대기중: "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300",
    확정: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300",
    대기: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300",
    취소: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300",
    활동중: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300",
  };
  return statusClasses[status] || "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300";
};
</script>
