<template>
  <aside
    class="flex items-center h-screen bg-gray-900 py-2 border-r border-gray-600"
  >
    <nav
      class="md:hidden bg-gray-900 border-t p-4 fixed !text-black bottom-0 left-0 w-full z-50"
    >
      <ul class="navigation">
        <li
          v-for="i in header"
          :class="$router.currentRoute.value.fullPath == i.link ? 'active' : ''"
        >
          <router-link :to="i.link">
            <span class="icon">
              <img
                class="z-10 sidebarIcon stroke-current"
                :src="i.icon"
                alt=""
              />
            </span>
            <span class="text">{{ i.title }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { header } from "@/constants/sidebar.js";
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  background: #374151;
}
</style>
