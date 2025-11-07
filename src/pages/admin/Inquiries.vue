<template>
  <div class="space-y-6 bg-white text-black dark:bg-black dark:text-white p-4 rounded">
    <h1 class="text-3xl font-bold text-gray-800 dark:text-white">문의관리</h1>
    
    <!-- 통계카드 -->
    <DashboardStats :stats="stats" class="md:grid-cols-4" />
  </div>
  
</template>
<script setup>
import DashboardStats from '@/components/DashboardStats.vue';

// 통계더미
const stats = [
  {
    title: "전체 문의",
    value: 5,
    icon: "fas fa-inbox",
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "답변 대기",
    value: 3,
    icon: "fas fa-clock",
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    title: "답변 완료",
    value: 2,
    icon: "fas fa-check-circle",
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "오늘 문의",
    value: 0,
    icon: "fas fa-comments",
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
];
</script>
