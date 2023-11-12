<template>
  <nav
    v-if="isLoading.store.allData[isLoading.store.pageName]"
    class="flex justify-between items-center py-5"
  >
    <div>
      <button
        v-show="
          isLoading.store.pageData[isLoading.store.pageName]?.total_pages > 10
        "
        @click="() => pageNext('minusTen')"
        :class="
          store.paginationStep !== 0
            ? ''
            : 'pointer-events-none opacity-50 bg-blue-400'
        "
        class="flex items-center nextMainButton gap-2 active:bg-transparent active:border-white duration-150 border h-8 border-blue-600 bg-blue-600 py-1 px-3 rounded-lg"
      >
        <img class="rotate-180" src="@/assets/navbar/arrow.svg" alt="" />
        <span class="nextButton">Previous</span>
      </button>
    </div>
    <ul class="flex">
      <li
        :class="
          isLoading.store.pagination[isLoading.store.pageName] === 1
            ? 'opacity-50 pointer-events-none'
            : ''
        "
      >
        <button
          @click="() => pageNext('minus')"
          class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 hover:border-blue-600 active:bg-blue-600 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
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
            isLoading.store.pageData[isLoading.store.pageName]?.total_pages
          "
          :class="
            i + store.paginationStep ==
            isLoading.store.pagination[isLoading.store.pageName]
              ? 'bg-blue-600 border-blue-600'
              : 'border border-blue-gray-100 bg-transparent'
          "
          class="mx-1 flex h-9 w-9 items-center justify-center hover:bg-blue-500 rounded-full p-0 text-sm text-white shadow-md transition duration-500 ease-in-out"
          href="#"
        >
          {{ i + store.paginationStep }}
        </button>
      </li>
      <li
        :class="
          isLoading.store.pagination[isLoading.store.pageName] ==
            isLoading.store.pageData[isLoading.store.pageName]?.total_pages ||
          isLoading.store.pageData[isLoading.store.pageName]?.total_count === 0
            ? 'opacity-50 pointer-events-none'
            : ''
        "
      >
        <button
          @click="() => pageNext('plus')"
          class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 hover:border-blue-600 active:bg-blue-600 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
          href="#"
          aria-label="Next"
        >
          <img src="@/assets/navbar/arrow.svg" alt="" />
        </button>
      </li>
    </ul>
    <div>
      <button
        v-show="
          isLoading.store.pageData[isLoading.store.pageName]?.total_pages > 5
        "
        @click="() => pageNext('plusTen')"
        :class="
          store.paginationStep <
          Math.floor(
            isLoading.store.pageData[isLoading.store.pageName]?.total_pages
          ) -
            5
            ? ''
            : 'pointer-events-none opacity-50 bg-blue-400'
        "
        class="flex items-center nextMainButton gap-2 h-8 active:bg-transparent active:border-white duration-150 border border-blue-600 bg-blue-600 py-1 px-3 rounded-lg"
      >
        <span class="nextButton">Next</span>
        <img src="@/assets/navbar/arrow.svg" alt="" />
      </button>
    </div>
  </nav>
</template>

<script setup>
import { useLoadingStore, useSocketStore, useStudentStore, useTestStore } from "@/store";

const isLoading = useLoadingStore();
let useSocket = null;
let useStudent = null;
let useTests = null;

const store = reactive({
  paginationStep: 0,
});

function pageNext(page, next) {
  console.log(isLoading.store.pagination[isLoading.store.pageName]);
  console.log(store.paginationStep + 5);
  if (
    (page == "minusTen" ||
      (isLoading.store.pagination[isLoading.store.pageName] ==
        store.paginationStep + 1 &&
        page == "minus")) &&
    store.paginationStep !== 0
  ) {
    store.paginationStep -= 5;
    console.log(store.paginationStep);
    isLoading.store.pagination[isLoading.store.pageName] =
      store.paginationStep + 5;
  } else if (
    (page == "plusTen" ||
      (isLoading.store.pagination[isLoading.store.pageName] ==
        store.paginationStep + 5 &&
        page == "plus")) &&
    store.paginationStep <
      Math.floor(
        isLoading.store.pageData[isLoading.store.pageName].total_pages
      ) -
        5
  ) {
    store.paginationStep += 5;
    isLoading.store.pagination[isLoading.store.pageName] =
      store.paginationStep + 1;
  } else if (page == "plus") {
    isLoading.store.pagination[isLoading.store.pageName] += 1;
  } else if (page == "minus") {
    isLoading.store.pagination[isLoading.store.pageName] -= 1;
  } else if (next == "next") {
    isLoading.store.pagination[isLoading.store.pageName] = page;
  }

  if (isLoading.store.pageName == "students") {
    useStudent.getAllData();
  } else if (isLoading.store.pageName == "groups") {
    useSocket.getAllData();
  } else if (isLoading.store.pageName == "tests") {
    useTests.getAllData();
  } 
}

onMounted(() => {
  useSocket = useSocketStore();
  useStudent = useStudentStore();
  useTests = useTestStore();
  // if (isLoading.store.pageName == "students") {
  //   useStudent.getAllData();
  // } else if (isLoading.store.pageName == "groups") {
  //   useSocket.getAllData();
  // }
});
</script>

<style lang="scss" scoped></style>
