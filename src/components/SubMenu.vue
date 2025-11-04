<template>
  <div class="menu-wrap">
    <div class="menu-box">
      <button class="close" @click="emitClose">✖ {{$t("common.close")}}</button>

      <ul>
        <li @click="goPage('/')">🏠 {{$t("nav.home")}}</li>
        <li @click="goPage('/reser')">📅 {{$t("nav.reserve")}}</li>
        <li @click="goPage('/review')">📝 {{$t("nav.review")}}</li>
        <li @click="goPage('/contact')">📞 {{$t("nav.contact")}}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

// 부모에게 이벤트 보낼 준비 (루트에서 선언)
const emit = defineEmits(["close"]);


// 부모에게 닫으라고 신호 보내기
const emitClose = () => {
  emit("close");
};

// 메뉴 항목 클릭 -> 메뉴 닫고 페이지 이동
const goPage = (path) => {
  // 1) 메뉴를 먼저 닫기 (더 빠르게 보임)
  emit("close");

  // 2) 페이지 이동
  router.push(path);
  // 만약 이동이 완료된 후 닫고 싶으면:
  // router.push(path).then(() => emit("close"))
};
</script>

<style scoped lang="scss">
.menu-wrap {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: flex-end;
  z-index: 200;
}

.menu-box {
  width: 250px;
  height: 100%;
  background: white;
  padding: 20px;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  animation: slide 0.3s ease;

  .close {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding: 12px 0;
      font-size: 18px;
      cursor: pointer;
      transition:all 0.3s;

      &:hover {
        color: #007bff;
      }
    }
  }
}

@keyframes slide {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
