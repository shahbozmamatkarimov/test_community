<template>
  <div
    class="flex flex-col space-y-5 items-center justify-center font-medium mt-0.5 md:text-[16px] text-sm h-80 bg-gray-800"
  >
    <p><slot></slot> mavjud emas</p>
    <button
      @click="isLoading.modal.create = true"
      class="bg-[#027DFC] py-1.5 px-5 -mb-1 whitespace-nowrap rounded-full"
    >
      <i class="bx bx-plus add_test_plus"></i> <slot></slot> qo'shish
    </button>
  </div>
</template>

<script setup>
import { useLoadingStore } from "@/store";

const isLoading = useLoadingStore();
</script>

<style lang="scss" scoped></style>
