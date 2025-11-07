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
        <div class="p-6 space-y-6">
          <div
            v-for="ntification in notificationSettings"
            :key="ntification.key"
            class="flex justify-between items-center"
          >
            <div class="flex-1">
              <h3 class="text-gray-800 font-medium mb-1">{{ ntification.title }}</h3>
              <p class="text-sm text-gray-500">{{ ntification.description }}</p>
            </div>

            <label class="relative inline-flex items-center cursor-pointer ml-4">
              <input type="checkbox" class="sr-only peer" v-model="settings[ntification.key]" />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"
              ></div>
            </label>
          </div>
        </div>
      </div>
      <!-- 시스템 설정 -->
      <div class="bg-white rounded-xl shadow-sm text-gray-700 dark:text-gray-300">
        <div class="bg-green-50 p-6 border-b border-gray-200 flex items-center gap-4">
          <i class="fas fa-cog text-xl text-green-600"></i>
          <h2 class="text-xl font-semibold text-gray-800">시스템 설정</h2>
        </div>
        <div class="p-6 space-y-6">
          <div class="flex justify-between items-center">
            <div class="flex-1">
              <h3 class="text-gray-800 font-medium mb-1">자동 저장</h3>
              <p class="text-sm text-gray-500">변경사항을 자동으로 저장합니다</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer ml-4">
              <input type="checkbox" v-model="settings.autoSave" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"
              ></div>
            </label>
          </div>

          <div class="border-t pt-6">
            <h3 class="text-gray-800 font-medium mb-3">세션 타임아웃</h3>
            <select
              v-model="settings.sessionTimeout"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="15">15분</option>
              <option value="30">30분</option>
              <option value="60">1시간</option>
              <option value="120">2시간</option>
            </select>
            <p class="text-sm text-gray-500 mt-2">일정 시간 동안 활동이 없으면 자동으로 로그아웃됩니다</p>
          </div>
        </div>
      </div>
      <!-- 데이터 관리 -->
      <div class="bg-white rounded-xl shadow-sm text-gray-700 dark:text-gray-300">
        <div class="bg-blue-50 p-6 border-b border-gray-200 flex items-center gap-4">
          <i class="fas fa-database text-xl text-blue-600"></i>
          <h2 class="text-xl font-semibold text-gray-800">데이터 관리</h2>
        </div>
        <div class="p-6 space-y-6">
          <div class="flex justify-between items-center">
            <div class="flex-1">
              <h3 class="text-gray-800 font-medium mb-1">데이터 백업</h3>
              <p class="text-sm text-gray-500">모든 데이터를 안전하게 백업합니다</p>
            </div>
            <button
              @click="backupData"
              class="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <i class="fas fa-download mr-2"></i>
              백업
            </button>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex-1">
              <h3 class="text-gray-800 font-medium mb-1">데이터 복원</h3>
              <p class="text-sm text-gray-500">백업된 데이터로 복원합니다</p>
            </div>
            <button
              @click="restoreData"
              class="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              <i class="fas fa-upload mr-2"></i>
              복원
            </button>
          </div>
        </div>
      </div>
      <!-- 통계 관리 -->
      <div class="bg-white rounded-xl shadow-sm text-gray-700 dark:text-gray-300">
        <div class="bg-purple-50 p-6 border-b border-gray-200 flex items-center gap-4">
          <i class="fas fa-chart-bar text-xl text-purple-600"></i>
          <h2 class="text-xl font-semibold text-gray-800">통계 관리</h2>
        </div>
        <div class="p-6 space-y-6">
          <div class="flex justify-between items-center">
            <div class="flex-1">
              <h3 class="text-gray-800 font-medium mb-1">일일 보고서</h3>
              <p class="text-sm text-gray-500">매일 자동으로 통계 리포트를 생성합니다</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer ml-4">
              <input type="checkbox" v-model="settings.dailyReport" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"
              ></div>
            </label>
          </div>
          <div class="border-t pt-6">
            <h3 class="text-gray-800 font-medium mb-3">보고서 형식</h3>
            <select
              v-model="settings.reportFormat"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="pdf">PDF</option>
              <option value="excel">Excel</option>
              <option value="csv">CSV</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <!-- 버튼 -->
    <div class="flex justify-end gap-3 mt-8">
      <button
        @click="resetSettings"
        class="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
      >
        <i class="fas fa-undo mr-2"></i>
        초기화
      </button>
      <button
        @click="saveSettings"
        class="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
      >
        <i class="fas fa-save mr-2"></i>
        저장
      </button>
    </div>
    <!-- 토스트 메시지 -->
    <div
      v-if="showToast"
      class="fixed bottom-8 right-8 px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg animate-slide-in flex items-center gap-2 z-50"
    >
      <i class="fas fa-check-circle"></i>
      <span>설정이 저장되었습니다.</span>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
const showToast = ref(false);

// 알림 설정 목록
const notificationSettings = [
  {
    key: "emailNotifications",
    title: "이메일 알림",
    description: "예약 및 작업 관련 알림을 이메일로 받습니다",
  },
  {
    key: "pushNotifications",
    title: "푸시 알림",
    description: "중요한 소식을 실시간으로 받습니다",
  },
  {
    key: "cancelNotifications",
    title: "예약 취소 알림",
    description: "예약 취소 시 즉시 알림을 받습니다",
  },
];
//버튼 설정 정보 담고있는 반응형 객체
const settings = reactive({
  emailNotifications: true,
  pushNotifications: true,
  cancelNotifications: false,
  autoSave: true,
  sessionTimeout: "30",
  dailyReport: false,
  reportFormat: "pdf",
});
const backupData = () => {
  alert("데이터 백업이 시작되었습니다.");
};
const restoreData = () => {
  if (confirm("데이터 복원 시 현재 데이터가 덮어씌워집니다. 계속 하시겠습니까?")) {
    alert("데이터 복원이 시작됩니다.");
  }
};

const resetSettings = () => {
  if (confirm("모든 설정을 초기값으로 되돌리시겠습니까?")) {
    Object.assign(settings, {
      emailNotifications: true,
      pushNotifications: true,
      cancelNotifications: false,
      autoSave: true,
      sessionTimeout: "30",
      dailyReport: false,
      reportFormat: "pdf",
    });
    saveSettings();
  }
};
const saveSettings = () => {
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 2000);
};
</script>
<style scoped>
@keyframes slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.animate-slide-in {
  animation: slide-in 0.3s ease-out;
}
</style>
