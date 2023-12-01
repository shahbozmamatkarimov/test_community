<template>
  <header class="flex w-full">
    <Sidebar />
    <div
      class="w-full px-5 md:pb-5 pb-40 bg-gray-900 overflow-hidden overflow-y-auto max-h-screen"
    >
      <Navbar />
      <slot />
    </div>
    <MobileSidebar />

    <div
      class="select-bg"
      v-if="isLoading.store.isOpen"
      @click="isLoading.store.isOpen = false"
    ></div>
  </header>
</template>

<script setup>
import { useLoadingStore } from "@/store";

const isLoading = useLoadingStore();
</script>

<style lang="scss" scoped></style>
