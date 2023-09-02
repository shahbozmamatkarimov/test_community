<template>
  <apexchart
    type="area"
    :height="height"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script setup>
defineProps({
  height: {
    type: [Number, String],
    default: 300,
  },
  chartOptions: {
    type: Object,
    default: () => ({
      colors: ["#5C0099", "#4BB543"],
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      legend: {
        show: false,
      },
    }),
  },
  series: {
    type: Array,
    default: () => [
      {
        name: ["So'm"],
        data: [
          30000, 9000, 40000, 14000, 29000, 2900, 3400, 23000, 40000, 1200,
          45465, 35465, 4564, 9565, 3568,
        ],
      },
      {
        name: "Buyurmalar",
        data: [
          500, 400, 300, 220, 550, 250, 400, 230, 500, 330, 20, 1, 45, 100, 210,
        ],
      },
    ],
  },
});
onMounted(() => {
  nextTick(() => {
    window.dispatchEvent(new Event("resize"));
  });
});
</script>
