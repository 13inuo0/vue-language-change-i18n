<template>
  <div
    class="h-screen w-full max-w-[480px] fixed top-0 left-1/2 -translate-x-1/2 overflow-hidden bg-white dark:bg-black"
  >
    <!-- 헤더 -->
    <header
      class="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
    >
      <div class="flex items-center gap-3 justify-between p-4">
        <div
          class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold"
        >
          기
        </div>
        <div>
          <p class="text-sm text-gray-500 dark:text-gray-400">안녕하세요, 기사님</p>
          <h1 class="text-lg font-semibold text-gray-900 dark:text-white">오늘도 안전하고 깔끔하게!</h1>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            {{ todayText }}
          </div>
        </div>
        <Weather />
        <DarkMode/>
      </div>
    </header>
    <!-- 메인 -->
    <main class="bg-gray-100 overflow-y-auto overflow-x-hidden w-full max-h-[calc(100vh-68px)] pt-[145px] dark:bg-gray-800 dark:text-white">
      <router-view></router-view>
    </main>
    <!-- 하단 탭바 -->
    <nav
      class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white/95 dark:bg-gray-900/95 backdrop-blur border-t border-gray-200 dark:border-gray-700 h-[68px] z-10"
    >
      <div class="h-full grid grid-cols-3">
        <router-link class="relative flex flex-col items-center justify-center text-xs" :to="{ name: 'mobileJobs' }"
        :class="$route.name === 'mobileJobs'?'text-blue-600 dark:text-blue-400':'text-gray-500 dark:text-gray-400'"
        >
          <span class="w-7 h-7 rounded-xl bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center shadow-inner"
            >📋</span
          >  작업목록
          <span v-if="$route.name === 'mobileJobs'" class="absolute -top-1 w-12 h-1 rounded-full bg-blue-600/80 dark:bg-blue-400/80">
        
          </span>
          </router-link
        >
        <router-link class="relative flex flex-col items-center justify-center text-xs" :to="{ name: 'mobileCalender' }"
        :class="$route.name === 'mobileCalender'?'text-blue-600 dark:text-blue-400':'text-gray-500 dark:text-gray-400'"  
        ><span class="w-7 h-7 rounded-xl bg-blue-50 dark:bg-blue-900/50 flex items-center justify-center shadow-inner"
            >🗓️</span
          >
           <span v-if="$route.name === 'mobileCalender'" class="absolute -top-1 w-12 h-1 rounded-full bg-blue-600/80 dark:bg-blue-400/80"></span>
          캘린더</router-link
        >
        <router-link class="relative flex flex-col items-center justify-center text-xs" :to="{ name: 'mobilePayment' }"
        :class="$route.name === 'mobilePayment'?'text-blue-600 dark:text-blue-400':'text-gray-500 dark:text-gray-400'"
        >
          <span
            class="w-7 h-7 rounded-xl bg-green-50 dark:bg-green-900/50 flex items-center justify-center shadow-inner"
            >💰</span
          >
           <span v-if="$route.name === 'mobilePayment'" class="absolute -top-1 w-12 h-1 rounded-full bg-blue-600/80 dark:bg-blue-400/80"></span>
          정산내역</router-link
        >
      </div>
    </nav>
  </div>
</template>
<script setup>
import DarkMode from "@/components/DarkMode.vue";
import Weather from "@/components/Weather.vue";

const todayText = new Date().toLocaleDateString("ko-KR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
</script>
