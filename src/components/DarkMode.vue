<template>
  <button
    @click="toggleTheme"
    class="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
  >
    <span class="text-xl">{{ isDarkMode ? "🌙" : "☀️" }}</span>
  </button>
</template>
<script setup>
import { onMounted, ref } from "vue";

const isDarkMode = ref(false);
// 다크모드 상태 동기화 함수
const updateDarkModeState = () => {
  isDarkMode.value = document.documentElement.classList.contains("dark");
};
//페이지 로드시 초기 다크모드 설정(동기화)
const enableDarkMode = ()=>{
    updateDarkModeState()
}

// 버튼 클릭시 다크모드 토글기능
const toggleTheme = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }
  updateDarkModeState()
};

// 초기 테마 설정 (localStorage 읽기)
onMounted(() => {
    // 로컬에 저장된 테마를 읽어 초기 적용
  const savedTheme = localStorage.theme;
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else if (savedTheme === "light") {
    document.documentElement.classList.remove("dark");
  }
  updateDarkModeState();
});
</script>
