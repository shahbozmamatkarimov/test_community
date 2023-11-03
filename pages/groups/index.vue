<template>
  <main>
    <section>
      <div class="flex flex-col w-full bg-gray-900">
        <!-- Component Start -->
        <div class="flex justify-between text-lg font-medium">
          <h1></h1>
          <button
            @click="
              useSocket.modal.create = true;
              useSocket.modal.edit = false;
            "
            class="h-[46px] -mt-2 px-[56px] rounded-lg text-sm leading-4 bg-[#027DFC] text-white"
          >
            <i class="bx bx-plus"></i> Guruh qo'shish
          </button>
        </div>
        <div class="flex flex-col w-full mt-5">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
            >
              <div class="shadow overflow-hidden rounded-lg">
                <table class="min-w-full text-sm">
                  <thead class="bg-blue-600 text-xs uppercase font-medium">
                    <tr>
                      <th
                        scope="col"
                        class="px-4 py-4 text-left tracking-wider"
                      >
                        №
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-4 text-left tracking-wider"
                      >
                        Nomi
                      </th>
                      <th
                        scope="col"
                        class="px-4 text-start py-4 tracking-wider"
                      >
                        Tavfsif
                      </th>
                      <th scope="col" class="px-4 py-4 min-w-[40px]"></th>
                    </tr>
                  </thead>
                  <tbody
                    v-if="isLoading.isLoadingType('getAllData')"
                    class="bg-gray-800 pointer-events-none"
                  >
                    <tr
                      v-for="i in 10"
                      :key="i.id"
                      :class="i % 2 == 0 ? 'bg-gray-800' : 'bg-black'"
                      class="bg-opacity-20 animate-pulse"
                    >
                      <td
                        v-for="i in 4"
                        :key="i"
                        class="px-4 h-[62px] py-4"
                      ></td>
                    </tr>
                  </tbody>
                  <tbody v-else class="bg-gray-800">
                    <tr
                      v-for="(i, index) in isLoading.store.allData"
                      :key="i.id"
                      :class="index % 2 == 0 ? 'bg-black' : 'bg-gray-800'"
                      class="bg-opacity-20 hover:bg-[#027DFC1A]"
                    >
                      <td class="px-4 py-4">#{{ i.id }}</td>
                      <td
                        class="px-4 items-center align-start w-40 whitespace-nowrap"
                      >
                        <p class="font-medium truncate w-40">{{ i.name }}</p>
                      </td>
                      <td class="px-4 py-4 whitespace-nowrap">
                        {{ i.description }}
                      </td>
                      <td class="flex items-center justify-center mx-2 px-4 py-4 space-x-2 whitespace-nowrap">
                        <button
                          @click="() => useSocket.getDataById(i.id)"
                          class="bx bx-pencil bg-gray-700 hover:bg-gray-600 py-2 px-3 rounded-lg"
                        ></button>
                        <button
                          @click="
                            () => {
                              useSocket.modal.delete = true;
                              useGroup.store.id = i.id;
                            }
                          "
                          class="bx bx-trash bg-gray-700 hover:bg-gray-600 py-2 px-3 rounded-lg"
                        ></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div
                  v-if="
                    !isLoading.isLoadingType('getAllData') &&
                    !isLoading.store.allData?.length
                  "
                  class="flex flex-col space-y-5 items-center justify-center font-medium mt-0.5 h-80 bg-gray-800"
                >
                  <p>Guruh mavjud emas</p>
                  <button
                    @click="useSocket.modal.create = true"
                    class="bg-blue-600 py-1 px-3 rounded-lg"
                  >
                    <i class="bx bx-plus"></i> Guruh qo'shish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Component End  -->
      </div>
    </section>
    <nav
      v-if="isLoading.store.allData?.length"
      class="flex justify-between items-center py-5"
    >
      <div>
        <button
          v-show="useSocket?.store.pageData?.total_pages > 10"
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
            useSocket?.store.pagination === 1
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
        <!-- {{ useSocket?.store.pageData }} -->
        <li v-for="i in 5">
          <button
            @click="() => pageNext(i + store.paginationStep, 'next')"
            v-if="
              i + store.paginationStep <=
              useSocket?.store?.pageData?.total_pages
            "
            :class="
              i + store.paginationStep == useSocket?.store.pagination
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
            useSocket?.store.pagination ==
              useSocket?.store?.pageData?.total_pages ||
            useSocket?.store.pageData?.total_count === 0
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
          v-show="useSocket?.store.pageData?.total_pages > 5"
          @click="() => pageNext('plusTen')"
          :class="
            store.paginationStep <
            Math.floor(useSocket?.store.pageData?.total_pages) - 5
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
    <!------------------------- edit contact ------------------------------->
    <el-dialog
      v-if="isMount"
      v-model="useSocket.modal.create"
      style="border-radius: 16px"
      width="500"
      class="rounded-2xl p-10 min-w-[400px] h-[240]"
      align-center
      close-icon="false"
    >
      <div class="flex justify-between items-center w-full">
        <h1
          v-if="!store.edit"
          class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
        >
          <i class="bx bxs-group"></i>
          Guruh qo'shish
        </h1>
        <h1
          v-else="!store.edit"
          class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
        >
          <i class="bx bxs-group"></i>
          Guruhni tahrirlash
        </h1>
        <img
          @click="useSocket.modal.create = false"
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
        @submit.prevent="handleSubmit"
      >
        <div class="mt-8">
          <div>
            <div class="space-y-3">
              <div class="grid gap-3">
                <input
                  type="text"
                  class="w-full"
                  v-model="useGroup.group.name"
                  placeholder="Guruh nomi"
                  required
                />
                <input
                  type="text"
                  v-model="useGroup.group.description"
                  class="w-full"
                  placeholder="Guruh tavsifi"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          v-if="useSocket.modal.edit"
          :type="isLoading.isLoadingType('modal') ? 'button' : 'submit'"
          class="h-[46px] overflow-hidden w-full bg-[#027DFC] mt-8 text-sm leading-4 font-medium text-white rounded-full"
          v-loading="isLoading.isLoadingType('modal')"
        >
          Guruhni tahrirlash
          <Loading />
        </button>
        <button
          v-else
          :type="isLoading.isLoadingType('modal') ? 'button' : 'submit'"
          class="h-[46px] overflow-hidden w-full bg-[#027DFC] mt-8 text-sm leading-4 font-medium text-white rounded-full"
          v-loading="isLoading.isLoadingType('modal')"
        >
          Guruhni qo'shish
          <Loading />
        </button>
      </form>
    </el-dialog>

    <!---------------- delete category ----------------------->
    <el-dialog
      v-if="isMount"
      v-model="useSocket.modal.delete"
      width="500"
      style="border-radius: 16px"
      class="max-w-fit rounded-2xl p-10 min-w-[400px] mx-auto"
      align-center
      close-icon="false"
    >
      <div class="flex justify-between items-center w-full">
        <h1
          class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
        >
          <img
            class="w-6 h-6 !fill-blue-600"
            src="@/assets/svg/delete.svg"
            alt=""
          />
          Guruhni o'chirish
        </h1>
        <img
          @click="useSocket.modal.delete = false"
          class="hover:bg-[#027DFC1A] p-2 rounded-lg cursor-pointer"
          src="@/assets/svg/x.svg"
          alt="x"
        />
      </div>
      <p class="mt-12 text-[16px] leading-[19px]">
        Haqiqatan ham bu guruhni o'chirib tashlamoqchimisiz?
      </p>
      <div>
        <button
          @click="useSocket.deleteData()"
          class="bg-[#027DFC] h-[46px] rounded-full overflow-hidden text-white mt-10 w-full"
          v-loading="isLoading.isLoadingType('modal')"
        >
          Guruhni o'chirish
        </button>
        <button
          @click="useSocket.modal.delete = false"
          class="h-[46px] rounded-[10px] mt-4 w-full"
        >
          Bekor qilish
        </button>
      </div>
    </el-dialog>
  </main>
</template>

<script setup>
import { useLoadingStore, useSocketStore, useGroupStore } from "@/store";
const isMount = ref(false);

let useSocket;
const isLoading = useLoadingStore();
const useGroup = useGroupStore();
isLoading.store.pageName = "groups";
isLoading.addLoading("getAllData");

const store = reactive({
  allGroups: "",
  modalCreate: false,
  modalDelete: false,
  token: "",
  deleteId: "",
  edit: false,
  editId: "",
  test_time: "",
  is_Loading: false,

  paginationStep: 0,
  lastPage: "",
});

const form = reactive({
  name: "",
  description: "",
});

function handleSubmit() {
  if (useSocket.modal.edit) {
    useSocket.updateData();
  } else {
    useSocket.createData();
  }
}

function pageNext(page, next) {
  console.log(useSocket.store.pagination);
  console.log(store.paginationStep + 5);
  if (
    (page == "minusTen" ||
      (useSocket.store.pagination == store.paginationStep + 1 &&
        page == "minus")) &&
    store.paginationStep !== 0
  ) {
    store.paginationStep -= 5;
    console.log(store.paginationStep);
    useSocket.store.pagination = store.paginationStep + 5;
  } else if (
    (page == "plusTen" ||
      (useSocket.store.pagination == store.paginationStep + 5 &&
        page == "plus")) &&
    store.paginationStep < Math.floor(useSocket.store.pageData.total_pages) - 5
  ) {
    store.paginationStep += 5;
    useSocket.store.pagination = store.paginationStep + 1;
  } else if (page == "plus") {
    useSocket.store.pagination += 1;
  } else if (page == "minus") {
    useSocket.store.pagination -= 1;
  } else if (next == "next") {
    useSocket.store.pagination = page;
  }
  useSocket.getAllData();
}

const deleteGroup = () => {
  useSocket.deleteData(store.deleteId);
};

onMounted(() => {
  useSocket = useSocketStore();
  isMount.value = true;

  useSocket.getAllData();
});
</script>

<style lang="scss" scoped>
:where(.css-dev-only-do-not-override-1ugq3w3).ant-picker {
  border: none;
}

.ant-btn {
  background: transparent;
  border: none;
}
</style>
