<template>
  <aside
    class="flex items-center h-screen bg-gray-900 py-2 border-r border-gray-600"
  >
    <!-- Component Start -->
    <div
      class="md:flex hidden space-x-6 flex-col items-center w-52 p-2 m-2 h-full overflow-hidden text-gray-400 bg-gray-800 rounded"
    >
      <a class="flex items-center w-full px-3 mt-3" href="#">
        <svg
          class="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
          />
        </svg>
        <span class="ml-2 text-sm font-bold">ILMNUR</span>
      </a>
      <div class="w-full px-2">
        <ul
          class="flex flex-col items-center w-full mt-3 border-t border-gray-700"
        >
          <router-link
            v-for="i in header"
            :to="i.link"
            class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
          >
            <img class="w-6 h-6 stroke-current" :src="i.icon" alt="" />
            <p class="ml-2 text-sm font-medium">{{ i.title }}</p>
          </router-link>
        </ul>
        <div
          class="flex flex-col items-center w-full mt-2 border-t border-gray-700"
        >
          <li
            class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
          >
            <svg
              class="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span class="ml-2 text-sm font-medium">Settings</span>
          </li>
          <li
            class="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
          >
            <svg
              class="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span class="ml-2 text-sm font-medium">Messages</span>
            <span
              class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"
            ></span>
          </li>
        </div>
      </div>
      <a
        class="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
        href="#"
      >
        <svg
          class="w-6 h-6 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span class="ml-2 text-sm font-medium">Account</span>
      </a>
    </div>
    <!-- Component End  -->
  </aside>
</template>

<script setup>
import { header } from "@/constants/sidebar.js";

let test = {
  title: "Test",
  description: "Test description",
  products: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
}
test.products = test.products.splice(16)
console.log(test.products);
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  background: #374151;
}
</style>
