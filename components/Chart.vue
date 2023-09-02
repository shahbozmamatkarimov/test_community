
<template>
  <main class="pt-20">
    <section class="flex gap-10 items-center justify-between">
      <div
        id="main"
        class="rounded-xl overflow-hidden overflow-x-auto w-full h-[25rem] px-5 pb-10 bg-[#FFFFFF]"
      >
        <div class="flex justify-between sticky left-0 items-center gap-2 pt-5">
          <div class="flex gap-2 items-center">
            <!-- <img class="pt-1" src="../assets/svg/money.svg" alt="money" /> -->
            <h1 class="font-medium text-3xl">122 552 250,80 so‘m</h1>
          </div>
          <div class="flex mr-4">
            <select
              class="duration-100 border cursor-pointer border-gray-300 focus:border-gray-300 focus:ring-0 rounded-lg"
            >
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
            <!-- <img
              class="-ml-6 scale-150"
              src="./../assets/svg/strelka.svg"
              alt=""
            /> -->
          </div>
        </div>
        <!-- chart -->
        <div class="mt-4 row">
          <div class="mt-4 col-md-6 mt-md-0">
            <div class="card z-index-2">
              <div class="card-body">
                <div class="chart -ml-4">
                  <GradientLineChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- chart 2 -->
      <div id="main" class="w-[400px] px-10 bg-[#FFFFFF] py-8 rounded-xl">
        <h1 class="text-sm">Tashriflar soni</h1>
        <p class="font-medium text-3xl py-2">1.345.987</p>
        <div class="text-white font-medium py-5">
          <div
            class="bg-[#EF9B00] w-44 h-44 rounded-full flex flex-col space-y-1 items-center justify-center"
          >
            <h1 class="text-sm">Mobil dastur</h1>
            <p class="text-xl">1.148.541</p>
          </div>
          <div
            class="bg-[#4684CE] w-28 h-28 rounded-full ml-32 -mt-16 flex flex-col space-y-1 items-center justify-center"
          >
            <h1>Veb sayt</h1>
            <p>9.999.999</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script setup>
// import GradientLineChart from "./GradientLineChart.vue";
// import BarChart from "./BarChart.vue";
definePageMeta({
  layout: "default",
  middleware: ["auth"],
});

const data = ref([]);

onMounted(() => {
  data.value = {
    May: [
      { order: 100, sum: "34.568.150" },
      { order: 150, sum: "25.508.120" },
      { order: 110, sum: "30.500.100" },
      { order: 50, sum: "5.560.150" },
      { order: 200, sum: "50.500.150" },
      { order: 127, sum: "24.020.150" },
      { order: 20, sum: "4.568.150" },
      { order: 200, sum: "50.500.150" },
      { order: 127, sum: "24.020.150" },
      { order: 20, sum: "4.568.150" },
      { order: 100, sum: "34.568.150" },
      { order: 150, sum: "25.508.120" },
      { order: 110, sum: "30.500.100" },
      { order: 50, sum: "5.560.150" },
      { order: 200, sum: "50.500.150" },
      { order: 127, sum: "24.020.150" },
      { order: 20, sum: "4.568.150" },
      { order: 200, sum: "50.500.150" },
      { order: 127, sum: "24.020.150" },
      { order: 20, sum: "4.568.150" },
      { order: 100, sum: "34.568.150" },
      { order: 150, sum: "25.508.120" },
      { order: 110, sum: "30.500.100" },
      { order: 50, sum: "5.560.150" },
      { order: 200, sum: "50.500.150" },
      { order: 127, sum: "24.020.150" },
      { order: 20, sum: "4.568.150" },
      { order: 200, sum: "50.500.150" },
      { order: 127, sum: "24.020.150" },
      { order: 20, sum: "4.568.150" },
    ],
  };
});
</script>


<style lang="scss" scoped>
.scale-x-125 {
  --tw-scale-x: 1.4;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
</style>
