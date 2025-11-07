<template>
  <div class="space-y-6 bg-white text-black dark:bg-black dark:text-white p-4 rounded">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">설정</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- 알림 설정 -->
      <div class="bg-white rounded-xl shadow-sm text-gray-700 dark:text-gray-300">
        <div class="bg-indigo-50 p-6 border-b border-gray-200 flex items-center gap-4">
          <i class="fas fa-bell text-xl text-indigo-600"></i>
          <h2 class="text-xl font-semibold text-gray-800">알림 설정</h2>
        </div>
      </div>
      <!-- 시스템 설정 -->
      <div class="bg-white rounded-xl shadow-sm text-gray-700 dark:text-gray-300">
        <div class="bg-green-50 p-6 border-b border-gray-200 flex items-center gap-4">
          <i class="fas fa-cog text-xl text-green-600"></i>
          <h2 class="text-xl font-semibold text-gray-800">시스템 설정</h2>
        </div>
      </div>
      <!-- 데이터 관리 -->
      <div class="bg-white rounded-xl shadow-sm text-gray-700 dark:text-gray-300">
        <div class="bg-blue-50 p-6 border-b border-gray-200 flex items-center gap-4">
          <i class="fas fa-database text-xl text-blue-600"></i>
          <h2 class="text-xl font-semibold text-gray-800">데이터 관리</h2>
        </div>
      </div>
      <!-- 통계 관리 -->
      <div class="bg-white rounded-xl shadow-sm text-gray-700 dark:text-gray-300">
        <div class="bg-purple-50 p-6 border-b border-gray-200 flex items-center gap-4">
          <i class="fas fa-chart-bar text-xl text-purple-600"></i>
          <h2 class="text-xl font-semibold text-gray-800">통계 관리</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
