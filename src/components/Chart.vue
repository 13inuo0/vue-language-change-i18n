<template>
  <Pie :data="data" />
</template>
<script setup>
import { Pie } from "vue-chartjs";

// 차트 데이터
const data = {
  labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
  datasets:[
    {

    },
  ]
};
</script>
