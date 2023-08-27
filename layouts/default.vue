<template>
  <header class="flex w-full">
    <Sidebar />
    <div class="w-full overflow-hidden overflow-y-auto max-h-screen">
      <slot />
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
