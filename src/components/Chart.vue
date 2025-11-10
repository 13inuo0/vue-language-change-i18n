<template>
  <Bar :data="data" :options="options" />
</template>

<script setup>
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "vue-chartjs";

// Chart.js 요소 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// 차트 데이터
const data = {
  labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100, 200, 150],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
      ],
      hoverOffset: 4,
    },
  ],
};

// 차트 옵션
const options = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>
