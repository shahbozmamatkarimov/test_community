<template>
  <main class="bg-gray-900 min-h-[100px] py-2">
    <nav
      class="flex justify-between items-center px-10 py-2 bg-gray-800 rounded-lg font-medium relative z-50"
    >
      <div>
        <h1
          v-show="$router.currentRoute.value.fullPath"
          class="leading-[38px] text-[32px] capitalize"
        >
          {{ $router.currentRoute.value?.name }}
        </h1>
      </div>
      <ul class="flex items-center gap-[13px]">
        <li
          @click="store.searchInput = !store.searchInput"
          class="flex justify-center cursor-pointer items-center rounded-full w-12 h-12 bg-[#027DFC1A] hover:bg-[#027ffc3a]"
        >
          <img src="@/assets/navbar/search.svg" alt="" />
        </li>
        <li
          @click="store.notificationModal = true"
          class="flex justify-center cursor-pointer items-center rounded-full w-12 h-12 bg-[#027DFC1A] hover:bg-[#027ffc3a]"
        >
          <img src="@/assets/navbar/bell.svg" alt="" />
        </li>
        <li
          @click="$router.push('/profile')"
          class="flex items-center w-40 space-x-[13px] cursor-pointer"
        >
          <div
            class="bg-gray-200 rounded-full overflow-hidden min-w-[46px] max-w-[46px] min-h-[46px] max-h-[46px]"
          >
            <img
              class="h-full w-full object-cover"
              src="@/assets/navbar/user.svg"
              alt=""
            />
          </div>
          <div class="w-40 leading-[19px] text-md">
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
            @input="isLoading.searchBy"
            v-model="isLoading.search.search"
            class="font-bold rounded-full w-full h-10 pl-4 bg-transparent ring-1 ring-white leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
            type="text"
            placeholder="Search..."
          />
          <el-select
            v-model="isLoading.search.searchType"
            @change="isLoading.searchBy"
            class="m-2 searchBy"
            placeholder="Search by"
            size="large"
          >
            <el-option
              class="options"
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
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
              src="@/assets/example/user.svg"
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
import { useLoadingStore } from "@/store";
import axios from "axios";
import { io } from "socket.io-client";

const isLoading = useLoadingStore();
let socket = null;
const searchBy = () => {
  axios
    .get("http://localhost:4000/groups/group/search", {
      params: search,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  if (!search.searchType) {
    search.searchType = "name";
  }
  socket.emit("searchBy", search);
};

const search = reactive({
  search: "",
  searchType: "",
});

const isMount = ref(false);

const store = reactive({
  logoutModal: false,
  notificationModal: false,
  searchInput: false,
  searchType: "",
});

const options = [
  {
    value: "id",
    label: "id",
  },
  {
    value: "name",
    label: "ismi",
  },
  {
    value: "description",
    label: "tavsifi",
  },
];

onMounted(() => {
  isMount.value = true;
  const token = localStorage.getItem("token");
  console.log(token);
  // socket = io("http://localhost:4000", {
  //   auth: {
  //     token: "Bearer " + token,
  //   },
  // });

  // Listen for the 'groups' event and handle the received data
  // socket.on("search", (data) => {
  //   console.log("Groups:", data);
  // });
});
</script>

<style lang="scss" scoped></style>
