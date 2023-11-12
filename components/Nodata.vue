<template>
  <div
    class="flex flex-col space-y-5 items-center justify-center font-medium mt-0.5 h-80 bg-gray-800"
  >
    <p><slot></slot> mavjud emas</p>
    <button
      @click="isLoading.modal.create = true"
      class="bg-blue-600 py-1 px-3 rounded-lg"
    >
      <i class="bx bx-plus"></i> <slot></slot> qo'shish
    </button>
  </div>
</template>

<script setup>
import { useLoadingStore } from "@/store";

const isLoading = useLoadingStore();
</script>

<style lang="scss" scoped></style>
