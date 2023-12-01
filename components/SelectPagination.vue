<template>
  <nav
    v-if="isLoading.store.allData[`${isLoading.pagination.pageName}`]"
    class="flex justify-between items-center py-1 px-5"
  >
    <div>
      <button
        v-show="isLoading.store.pageData[`${isLoading.pagination.pageName}`]?.total_pages > 10"
        @click="() => pageNext('minusTen')"
        :class="
          store.paginationStep !== 0
            ? ''
            : 'pointer-events-none opacity-50 bg-blue-400'
        "
        class="flex items-center justify-center gap-2 active:bg-transparent active:border-white duration-150 border h-7 w-5 border-blue-600 bg-blue-600 rounded-md"
      >
        <img class="rotate-180" src="@/assets/navbar/arrow.svg" alt="" />
      </button>
    </div>
    <ul
      class="flex"
      v-if="isLoading.store.pageData[`${isLoading.pagination.pageName}`]?.total_pages != 0"
    >
      <li
        :class="
          isLoading.store.pagination[`${isLoading.pagination.pageName}`] === 1
            ? 'opacity-50 pointer-events-none'
            : ''
        "
      >
        <button
          @click="() => pageNext('minus')"
          class="mx-1 flex h-7 w-7 items-center justify-center rounded-full border border-blue-gray-100 hover:border-blue-600 active:bg-blue-600 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
          href="#"
          aria-label="Previous"
        >
          <img class="rotate-180" src="@/assets/navbar/arrow.svg" alt="" />
        </button>
      </li>
      <li v-for="i in 5">
        <button
          @click="() => pageNext(i + store.paginationStep, 'next')"
          v-if="
            i + store.paginationStep <=
            isLoading.store?.pageData[`${isLoading.pagination.pageName}`]?.total_pages
          "
          :class="
            i + store.paginationStep ==
            isLoading.store.pagination[`${isLoading.pagination.pageName}`]
              ? 'bg-blue-600 border-blue-600'
              : 'border border-blue-gray-100 bg-transparent'
          "
          class="mx-1 flex h-7 w-7 items-center justify-center hover:bg-blue-500 rounded-full p-0 text-sm text-white shadow-md transition duration-500 ease-in-out"
          href="#"
        >
          {{ i + store.paginationStep }}
        </button>
      </li>
      <li
        :class="
          isLoading.store.pagination[`${isLoading.pagination.pageName}`] ==
            isLoading.store?.pageData[`${isLoading.pagination.pageName}`]?.total_pages ||
          isLoading.store.pageData[`${isLoading.pagination.pageName}`]?.total_count === 0
            ? 'opacity-50 pointer-events-none'
            : ''
        "
      >
        <button
          @click="() => pageNext('plus')"
          class="mx-1 flex h-7 w-7 items-center justify-center rounded-full border border-blue-gray-100 hover:border-blue-600 active:bg-blue-600 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
          href="#"
          aria-label="Next"
        >
          <img src="@/assets/navbar/arrow.svg" alt="" />
        </button>
      </li>
    </ul>
    <div>
      <button
        v-show="isLoading.store.pageData[`${isLoading.pagination.pageName}`]?.total_pages > 5"
        @click="() => pageNext('plusTen')"
        :class="
          store.paginationStep <
          Math.floor(
            isLoading.store.pageData[`${isLoading.pagination.pageName}`]
              ?.total_pages
          ) -
            5
            ? ''
            : 'pointer-events-none opacity-50 bg-blue-400'
        "
        class="flex items-center justify-center gap-2 active:bg-transparent active:border-white duration-150 border h-7 w-5 border-blue-600 bg-blue-600 rounded-md"
      >
        <img src="@/assets/navbar/arrow.svg" alt="" />
      </button>
    </div>
  </nav>
</template>

<script setup>
import { useLoadingStore, useSocketStore, useTeacherStore } from "@/store";

const isLoading = useLoadingStore();
let useTeacher;
let useSocket = null;

const store = reactive({
  paginationStep: 0,
});

function pageNext(page, next) {
  if (
    (page == "minusTen" ||
      (isLoading.store.pagination[`${isLoading.pagination.pageName}`] ==
        store.paginationStep + 1 &&
        page == "minus")) &&
    store.paginationStep !== 0
  ) {
    store.paginationStep -= 5;
    console.log(store.paginationStep);
    isLoading.store.pagination[`${isLoading.pagination.pageName}`] =
      store.paginationStep + 5;
  } else if (
    (page == "plusTen" ||
      (isLoading.store.pagination[`${isLoading.pagination.pageName}`] ==
        store.paginationStep + 5 &&
        page == "plus")) &&
    store.paginationStep <
      Math.floor(
        isLoading.store.pageData[`${isLoading.pagination.pageName}`].total_pages
      ) -
        5
  ) {
    store.paginationStep += 5;
    isLoading.store.pagination[`${isLoading.pagination.pageName}`] =
      store.paginationStep + 1;
  } else if (page == "plus") {
    isLoading.store.pagination[`${isLoading.pagination.pageName}`] += 1;
  } else if (page == "minus") {
    isLoading.store.pagination[`${isLoading.pagination.pageName}`] -= 1;
  } else if (next == "next") {
    isLoading.store.pagination[`${isLoading.pagination.pageName}`] = page;
  }
  isLoading.addLoading("getAllData/" + isLoading.pagination.pageName);
  if (isLoading.pagination.pageName == "teachers") {
    useTeacher.getAllData();
  } else {
    useSocket.getAllData();
  }
}

onMounted(() => {
  isLoading.search.search[`${isLoading.pagination.pageName}`] = "";
  isLoading.search.searchType[`${isLoading.pagination.pageName}`] = "";
  console.log(isLoading.pagination.pageName);
  isLoading.store.isSearching = true;
  if (isLoading.pagination.pageName == "teachers") {
    useTeacher = useTeacherStore();
    useTeacher.getAllData();
    isLoading.store.pagination.teachers = 1;
  } else {
    useSocket = useSocketStore();
    useSocket.getAllData("searchByName");
    isLoading.store.pagination[`${isLoading.pagination.pageName}`] = 1;
  }
});

onUnmounted(() => {
  isLoading.search.search[`${isLoading.pagination.pageName}`] = "";
  isLoading.search.searchType[`${isLoading.pagination.pageName}`] = "";
});
</script>

<style lang="scss" scoped></style>
