<template>
  <main class="bg-gray-900 min-h-[100px] py-2">
    <nav
      class="flex justify-between items-center min-h-[64px] lg:px-10 px-5 py-2 bg-gray-800 rounded-lg font-medium relative z-50"
    >
      <div>
        <h1
          v-show="$router.currentRoute.value.fullPath"
          class="leading-[38px] md:text-[32px] sm:text-[24px] text-[20px] capitalize"
        >
          {{ $router.currentRoute.value?.name }}
        </h1>
      </div>
      <ul class="flex items-center gap-[13px]">
        <li
          v-if="$router.currentRoute.value.fullPath !== '/tests'"
          @click="store.searchInput = !store.searchInput"
          class="flex justify-center cursor-pointer items-center rounded-full lg:w-12 lg:h-12 sm:w-10 sm:h-10 w-8 h-8 max-w-fit lg:min-w-[48px] sm:min-w-[40px] min-w-[32px] bg-[#027DFC1A] hover:bg-[#027ffc3a]"
        >
          <img src="@/assets/navbar/search.svg" alt="" />
        </li>
        <li
          @click="store.notificationModal = true"
          class="flex justify-center cursor-pointer items-center rounded-full lg:w-12 lg:h-12 sm:w-10 sm:h-10 w-8 h-8 bg-[#027DFC1A] hover:bg-[#027ffc3a]"
        >
          <img src="@/assets/navbar/bell.svg" alt="" />
        </li>
        <li
          @click="$router.push('/profile')"
          class="flex items-center lg:w-40 md:w-32 space-x-[13px] cursor-pointer"
        >
          <div
            class="bg-gray-200 rounded-full overflow-hidden sm:w-10 sm:h-10 w-8 h-8 sm:min-w-[40px] min-w-[32px] max-w-fit"
          >
            <img
              class="h-full w-full object-cover"
              src="@/assets/nodata/user_placeholder.png"
              alt=""
            />
          </div>
          <div
            class="sm:block hidden lg:w-24 w-16 lg:leading-6 leading-5 lg:text-[16px] text-xs"
          >
            <h1 class="truncate">Jack</h1>
            <p class="truncate">Johnson</p>
          </div>
        </li>
        <li
          @click="store.logoutModal = true"
          class="flex justify-center items-center cursor-pointer rounded-full w-8 h-8 bg-[#027DFC]"
        >
          <img src="@/assets/navbar/exit.svg" alt="img" />
        </li>
      </ul>
    </nav>

    <section
      v-if="$router.currentRoute.value.fullPath !== '/tests'"
      :class="store.searchInput ? 'h-full' : 'h-0'"
      class="overflow-hidden duration-100"
    >
      <div class="py-2 h-full overflow-hidden duration-1000">
        <div
          class="bg-gray-800 items-center justify-between w-full h-16 flex rounded-full shadow-lg px-2 sticky"
        >
          <div>
            <div
              class="p-2 mx-2 rounded-full bg-[#027DFC1A] hover:bg-[#027ffc3a] h-10 w-10 cursor-pointer"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <input
            @input="searchBy"
            v-model="isLoading.search.search[isLoading.store.pageName]"
            id="searchType"
            class="font-bold rounded-full w-full h-10 pl-4 bg-transparent ring-1 ring-white leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
            :type="
              isLoading.search.searchType[isLoading.store.pageName] == 'id' ||
              isLoading.search.searchType[isLoading.store.pageName] ==
                'student_id'
                ? 'number'
                : 'text'
            "
            placeholder="Search..."
          />
          <el-select
            v-model="isLoading.search.searchType[isLoading.store.pageName]"
            @change="() => searchBy('changeSearchType')"
            class="m-2 searchBy"
            placeholder="Search by"
            size="large"
          >
            <label for="searchType">
              <el-option
                class="options"
                v-for="item in isLoading.store.searchOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </label>
          </el-select>
          <div class="cursor-pointer mx-2 rounded-full">
            <li
              @click="store.searchInput = false"
              class="flex justify-center cursor-pointer items-center rounded-full w-10 h-10 bg-[#027DFC1A] hover:bg-[#027ffc3a]"
            >
              <img src="@/assets/navbar/x.svg" alt="" />
            </li>
          </div>
        </div>
      </div>
    </section>

    <!---------------- Log out Modal ----------------------->
    <el-dialog
      v-if="isMount"
      width="500"
      v-model="store.logoutModal"
      style="border-radius: 16px"
      class="max-w-fit rounded-2xl p-10 min-w-[420px] mx-auto h-[240]"
      align-center
      close-icon="false"
    >
      <div class="flex justify-between items-center w-full">
        <h1 class="font-medium text-2xl leading-[29px]">Log out</h1>
        <img
          @click="store.logoutModal = false"
          class="h-6 w-6 rounded-lg cursor-pointer"
          src="../assets/svg/x.svg"
          alt="x"
        />
      </div>
      <p class="mt-12 leading-[19px]">Are you sure you want to log out?</p>
      <button
        @click="logOut"
        class="bg-[#027DFC] rounded-[10px] text-white mt-[41px] mb-2 w-full"
      >
        Confirm
      </button>
      <button @click="store.logoutModal = false" class="w-full text-[#027DFC]">
        Discard
      </button>
    </el-dialog>

    <!------------------------- search by date modal ------------------------------->
    <el-dialog
      v-if="isMount"
      v-model="isLoading.store.calendarModal"
      style="border-radius: 16px"
      width="500"
      class="rounded-2xl p-10 min-w-[350px] h-[240]"
      align-center
      close-icon="false"
    >
      <div class="flex justify-between items-center w-full">
        <h1
          class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
        >
          <i class="bx bxs-group"></i>
          Kalendar bo'yicha qidirish
        </h1>
        <img
          @click="isLoading.store.calendarModal = false"
          class="hover:bg-[#027DFC1A] p-2 rounded-lg cursor-pointer"
          src="@/assets/svg/x.svg"
          alt="x"
        />
      </div>
      <form
        :class="
          isLoading.isLoadingType('modal')
            ? 'pointer-events-none animate-pulse'
            : ''
        "
        @submit.prevent="handleSearchSubmit"
      >
        <div class="mt-8">
          <div>
            <div class="space-y-3">
              <div class="grid gap-3">
                <h1>Boshlanish sanasi</h1>
                <div v-if="!searchDate.start_date" classs="min-w-full">
                  <el-date-picker
                    id="start-date"
                    v-model="isLoading.searchDate.start_date"
                    type="date"
                    class="min-w-full -mb-3 min-h-[40px] bg-transparent border-0"
                    placeholder="Sanani tanlang"
                    format="YYYY/MM/DD"
                    required
                  />
                </div>
                <el-checkbox
                  v-if="!searchDate.end_date"
                  v-model="searchDate.start_date"
                  ><p class="text-black ml-1 text-[16px]">
                    Bugungi sana
                  </p></el-checkbox
                >
                <h1 :class="searchDate.end_date ? 'mt-4' : ''">
                  Tugash sanasi
                </h1>
                <div v-if="!searchDate.end_date" classs="min-w-full">
                  <el-date-picker
                    id="start-date"
                    v-model="isLoading.searchDate.end_date"
                    type="date"
                    class="min-w-full -mb-3 min-h-[40px] bg-transparent border-0"
                    placeholder="Sanani tanlang"
                    format="YYYY/MM/DD"
                    required
                  />
                </div>
                <el-checkbox
                  v-if="!searchDate.start_date"
                  v-model="searchDate.end_date"
                  ><p class="text-black ml-1 text-[16px]">
                    Bugungi sana
                  </p></el-checkbox
                >
              </div>
            </div>
          </div>
        </div>
        <button
          :type="isLoading.isLoadingType('modal') ? 'button' : 'submit'"
          class="h-[40px] overflow-hidden w-full bg-[#027DFC] mt-8 text-sm leading-4 font-medium text-white rounded-full"
          v-loading="isLoading.isLoadingType('modal')"
        >
          Kalendar bo'yicha qidirish
          <Loading />
        </button>
        <button
          @click="isLoading.store.calendarModal = false"
          type="button"
          class="h-[40px] overflow-hidden w-full active:bg-[#027DFC] mt-8 text-sm leading-4 font-medium text-white rounded-full"
        >
          Bekor qilish
          <Loading />
        </button>
      </form>
    </el-dialog>

    <!-- notifications -->
    <el-drawer
      v-if="isMount"
      class="rounded-l-[40px] min-w-[500px] pb-[43px] px-[30px]"
      v-model="store.notificationModal"
      title="I am the title"
      :with-header="false"
    >
      <div
        class="flex sticky top-0 h-[95px] items-center justify-between bg-white"
      >
        <h1 class="font-medium text-2xl leading-7">Notifications</h1>
        <img
          @click="store.notificationModal = false"
          class="h-6 w-6 rounded-lg cursor-pointer"
          src="../assets/svg/x.svg"
          alt="x"
        />
      </div>
      <div class="space-y-3">
        <div
          v-for="i in icon"
          :key="i"
          class="bg-[#F4F3F9] px-6 py-4 rounded-lg"
        >
          <div class="flex items-center text-[#999999] text-sm leading-4 gap-3">
            <div
              class="flex items-center justify-center rounded-full bg-[#F3EDE4] h-6 w-6"
            >
              <img class="h-4 w-4" :src="i" alt="" />
            </div>
            <p>08 / 03 / 23</p>
            <p class="ml-2">20:35</p>
          </div>
          <div class="flex items-center pt-2.5">
            <img
              class="w-6 h-6 mr-0.5 object-cover rounded-full"
              src="@/assets/navbar/user.svg"
              alt="Jese image"
            />
            <p class="text-sm leading-4 font-medium ml-2">
              <b>Anita Law</b> requested support on case
              <span class="text-[#027DFC]">#000251</span>
            </p>
          </div>
        </div>
      </div>
    </el-drawer>
  </main>
</template>

<script setup>
import {
  useLoadingStore,
  useSocketStore,
  useStudentStore,
  useTestStore,
} from "@/store";
import { useNotification } from "@/composables/notification";
import axios from "axios";
import { io } from "socket.io-client";

const { showError } = useNotification();
let useSocket;
let useStudent;
let useTests;
const isMount = ref(false);
const isLoading = useLoadingStore();

const searchDate = reactive({
  start_date: false,
  end_date: false,
});

const searchBy = (data) => {
  if (isLoading.search.searchType[isLoading.store.pageName] == "calendar") {
    isLoading.store.calendarModal = true;
    return;
  }
  if (
    data == "changeSearchType" &&
    (isLoading.search.searchType[isLoading.store.pageName] == "id" ||
      isLoading.search.searchType[isLoading.store.pageName] == "student_id")
  ) {
    isLoading.search.search[isLoading.store.pageName] = "";
  }
  isLoading.store.isSearching = true;

  if (isLoading.store.pageName == "groups") {
    useSocket?.getAllData("searching");
  } else if (isLoading.store.pageName == "students") {
    useStudent?.getAllData("searching");
  } else if (isLoading.store.pageName == "tests") {
    useTests?.getAllData("searching");
  }
};

function handleSearchSubmit() {
  if (searchDate.start_date) {
    isLoading.searchDate.start_date = new Date();
  }
  if (searchDate.end_date) {
    isLoading.searchDate.end_date = new Date();
  }
  if (!isLoading.searchDate.start_date && !isLoading.searchDate.end_date) {
    return showError(
      "Iltimos, boshlanish yoki tugash sanalaridan birini kiriting!"
    );
  }
  if (isLoading.searchDate.start_date && isLoading.searchDate.end_date) {
    const startDate = new Date(isLoading.searchDate.start_date).getTime();
    const endDate = new Date(isLoading.searchDate.end_date).getTime();
    if (startDate > endDate) {
      return showError(
        "Boshlanish sanasi tugash sanasidan kichik bo'lishi kerak!"
      );
    }
  }

  isLoading.search.search[isLoading.store.pageName] = isLoading.searchDate;
  if (isLoading.store.pageName == "groups") {
    useSocket?.getAllData("searching");
  } else if (isLoading.store.pageName == "students") {
    useStudent?.getAllData("searching");
  } else if (isLoading.store.pageName == "tests") {
    useTests?.getAllData("searching");
  }
}

const store = reactive({
  logoutModal: false,
  notificationModal: false,
  searchInput: false,
  searchType: "",
});

onMounted(() => {
  useSocket = useSocketStore();
  useStudent = useStudentStore();
  useTests = useTestStore();
  isMount.value = true;
});
</script>

<style lang="scss" scoped></style>
