<template>
  <main>
    <section>
      <div class="flex flex-col w-full bg-gray-900">
        <!-- Component Start -->
        <div class="flex justify-between text-lg font-medium">
          <h1></h1>
          <button
            @click="
              isLoading.modal.create = true;
              isLoading.modal.edit = false;
            "
            class="h-[40px] -mt-2 px-[56px] rounded-lg text-sm leading-4 bg-[#027DFC] text-white"
          >
            <i class="bx bx-plus"></i> O'qituvchi qo'shish
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
                        F.I.SH
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-4 text-left tracking-wider"
                      >
                        Telefon
                      </th>
                      <th scope="col" class="px-4 py-4 min-w-[40px]"></th>
                    </tr>
                  </thead>
                  <tbody
                    v-if="isLoading.isLoadingType('getAllData/teachers')"
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
                      v-for="(i, index) in isLoading.store.allData?.teachers"
                      :key="i.id"
                      :class="index % 2 == 0 ? 'bg-black' : 'bg-gray-800'"
                      class="bg-opacity-20 hover:bg-[#027ffc3a]"
                    >
                      <td class="px-4 py-4">{{ index + 1 }}</td>
                      <td
                        class="px-4 items-center align-start w-40 whitespace-nowrap"
                      >
                        <p class="font-medium truncate w-40">
                          {{ i.username }}
                        </p>
                      </td>
                      <td
                        class="px-4 items-center align-start w-40 whitespace-nowrap"
                      >
                        +998 {{ i.phone }}
                      </td>
                      <td
                        class="flex items-center justify-center mx-2 px-4 py-4 space-x-2 whitespace-nowrap"
                      >
                        <button
                          @click="() => useTeacher.getDataById(i.id)"
                          class="bx bx-pencil bg-gray-700 hover:bg-gray-600 py-2 px-3 rounded-lg"
                        ></button>
                        <button
                          @click="
                            () => {
                              isLoading.modal.delete = true;
                              useTeacher.store.id = i.id;
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
                    !isLoading.isLoadingType('getAllData/teachers') &&
                    !isLoading.store.allData?.teachers?.length
                  "
                >
                  <Nodata>O'qituvchi</Nodata>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Component End  -->
      </div>
    </section>
    <Pagination />
    <!------------------------- edit contact ------------------------------->
    <el-dialog
      v-if="isMount"
      v-model="isLoading.modal.create"
      style="border-radius: 16px"
      width="500"
      class="rounded-2xl p-10 min-w-[400px] h-[240]"
      align-center
      close-icon="false"
    >
      <div class="flex justify-between items-center w-full">
        <h1
          v-if="!isLoading.modal.edit"
          class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
        >
          <i class="bx bxs-teacher"></i>
          O'qituvchi qo'shish
        </h1>
        <h1
          v-else="!store.edit"
          class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
        >
          <i class="bx bxs-teacher"></i>
          O'qituvchini tahrirlash
        </h1>
        <img
          @click="isLoading.modal.create = false"
          class="hover:bg-[#027ffc3a] p-2 rounded-lg cursor-pointer"
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
                  v-model="useTeacher.create.username"
                  placeholder="F.I.SH"
                  required
                />
                <div class="flex items-center">
                  <p class="-mr-[52px] ml-4 leading-5">+998</p>
                  <input
                    @input="phoneMask"
                    id="phoneNumberInput"
                    type="text"
                    class="w-full pl-14"
                    v-model="useTeacher.create.phone"
                    placeholder="__ ___ __ __"
                    required
                  />
                </div>
                <div v-if="!isLoading.modal.edit">
                  <input
                    type="text"
                    class="w-full"
                    v-model="useTeacher.create.password"
                    placeholder="Parolni kiriting"
                    required
                  />
                </div>
                <div
                  v-else
                  v-if="useTeacher.store.isChangePassword"
                  class="flex justify-between items-center gap-2"
                >
                  <input
                    type="text"
                    class="w-full"
                    v-model="useTeacher.create.password"
                    placeholder="Parolni kiriting"
                    required
                  />
                  <img
                    v-if="isLoading.modal.edit"
                    @click="useTeacher.store.isChangePassword = false"
                    class="hover:bg-[#027DFC1A] p-1 min-w-[20px] max-h-[20px] rounded-full border cursor-pointer"
                    src="@/assets/svg/x.svg"
                    alt="x"
                  />
                </div>
                <div
                  v-if="
                    !useTeacher.store.isChangePassword && isLoading.modal.edit
                  "
                  class="flex justify-between items-center px-4 h-10 rounded-full border"
                >
                  <h1>Parolni o'zgartirish</h1>
                  <button
                    @click="useTeacher.store.isChangePassword = true"
                    type="button"
                    class="bx bx-edit"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          v-if="isLoading.modal.edit"
          :type="isLoading.isLoadingType('modal') ? 'button' : 'submit'"
          class="h-[40px] overflow-hidden w-full bg-[#027DFC] mt-8 text-sm leading-4 font-medium text-white rounded-full"
          v-loading="isLoading.isLoadingType('modal')"
        >
          O'qituvchini tahrirlash
          <Loading />
        </button>
        <button
          v-else
          :type="isLoading.isLoadingType('modal') ? 'button' : 'submit'"
          class="h-[40px] overflow-hidden w-full bg-[#027DFC] mt-8 text-sm leading-4 font-medium text-white rounded-full"
          v-loading="isLoading.isLoadingType('modal')"
        >
          O'qituvchini qo'shish
          <Loading />
        </button>
      </form>
    </el-dialog>

    <!---------------- delete teacher ----------------------->
    <el-dialog
      v-if="isMount"
      v-model="isLoading.modal.delete"
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
          O'qituvchini o'chirish
        </h1>
        <img
          @click="isLoading.modal.delete = false"
          class="hover:bg-[#027ffc3a] p-2 rounded-lg cursor-pointer"
          src="@/assets/svg/x.svg"
          alt="x"
        />
      </div>
      <p class="mt-12 text-[16px] leading-[19px]">
        Haqiqatan ham bu o'qituvchini o'chirib tashlamoqchimisiz?
      </p>
      <div>
        <button
          @click="useTeacher.deleteData()"
          class="bg-[#027DFC] h-[40px] rounded-full overflow-hidden text-white mt-10 w-full"
          v-loading="isLoading.isLoadingType('modal')"
        >
          O'qituvchini o'chirish
        </button>
        <button
          @click="isLoading.modal.delete = false"
          class="h-[40px] rounded-[10px] mt-4 w-full"
        >
          Bekor qilish
        </button>
      </div>
    </el-dialog>
  </main>
</template>

<script setup>
import { useLoadingStore, useTeacherStore } from "@/store";
const isMount = ref(false);

let useTeacher;
const isLoading = useLoadingStore();
isLoading.store.pageName = "teachers";
isLoading.addLoading("getAllData/teachers");
isLoading.search.searchType.teachers = "id";
isLoading.search.search.teachers = "";
isLoading.store.searchOptions = [
  {
    value: "id",
    label: "id",
  },
  {
    value: "username",
    label: "ismi",
  },
  {
    value: "phone",
    label: "Telefon raqami",
  },
];
const store = reactive({
  allTeachers: "",
  modalCreate: false,
  modalDelete: false,
  token: "",
  deleteId: "",
  edit: false,
  editId: "",
  test_time: "",
  is_Loading: false,
  drawer: false,
});

const form = reactive({
  name: "",
  description: "",
});

const weeks = [
  {
    label: "Dushanba, Chorshanba, Juma",
  },
  {
    label: "Seshanba, Payshanba, Shanba",
  },
  {
    label: "Dushanba",
  },
  {
    label: "Seshanba",
  },
  {
    label: "Chorshanba",
  },
  {
    label: "Payshanba",
  },
  {
    label: "Juma",
  },
  {
    label: "Shanba",
  },
  {
    label: "Yakshanba",
  },
];

function handleSubmit() {
  if (isLoading.modal.edit) {
    useTeacher.updateData();
  } else {
    useTeacher.createData();
  }
}
function phoneMask() {
  let phoneNumber = useTeacher.create.phone.replace(/\D/g, "");

  // Define the positions for spaces
  const spacePositions = [2, 6, 9, 12];

  // Insert spaces at specified positions
  for (var i = 0; i < spacePositions.length; i++) {
    if (phoneNumber.length > spacePositions[i]) {
      phoneNumber =
        phoneNumber.slice(0, spacePositions[i]) +
        " " +
        phoneNumber.slice(spacePositions[i]);
    }
  }

  // Update the input value
  useTeacher.create.phone = phoneNumber.slice(0, 12);
}

const handleChange = (value) => {
  const last = value[value.length - 1];
  const lastValue = value?.pop()?.split(",");
  let isLast = false;
  if (!lastValue) return;
  for (let lasts of lastValue) {
    for (let i of value) {
      for (let week of i?.split(",")) {
        if (week.trim() == lasts) {
          isLast = true;
        }
      }
    }
  }

  if (!isLast) {
    value.push(last);
  }
};

function inputSelectGroup(e, isSearch) {
  isLoading.store.isSearching = true;
  console.log(e.target.value, isSearch);
  if (isSearch === "test_search") {
    isLoading.search.searchType.tests = e.target.value;
    useTests.getAllData("searching");
  } else {
    isLoading.addLoading("getAllData/groups");
    isLoading.search.search.groups = e.target.value.trim();
    useSocket?.getAllData("searchByName");
  }
}

function changeGroupIndex(index) {
  const isIndex = useTeacher.store.filterByGroupIndex.indexOf(index);
  console.log(isIndex);
  if (isIndex == -1) {
    useTeacher.store.filterByGroupIndex.push(index);
    console.log(index);
  } else {
    useTeacher.store.filterByGroupIndex.splice(isIndex, 1);
  }
}

function clearFilteredGroups(index) {
  useTeacher?.store?.filterByGroupIndex?.splice(index, 1);
  useTeacher?.store?.groupIds?.splice(index, 1);
}

function getData(date) {
  let data = new Date(date);
  const day = data.getDate() > 9 ? data.getDate() : "0" + data.getDate();
  const month =
    data.getMonth() + 1 > 9 ? data.getMonth() + 1 : "0" + (data.getMonth() + 1);
  const year = String(data.getFullYear());
  return day + "." + month + "." + year;
}

function pageNext(page, next) {
  if (
    (page == "minusTen" ||
      (useTeacher.store.pagination == store.paginationStep + 1 &&
        page == "minus")) &&
    store.paginationStep !== 0
  ) {
    store.paginationStep -= 5;
    useTeacher.store.pagination = store.paginationStep + 5;
  } else if (
    (page == "plusTen" ||
      (useTeacher.store.pagination == store.paginationStep + 5 &&
        page == "plus")) &&
    store.paginationStep < Math.floor(useTeacher.store.pageData.total_pages) - 5
  ) {
    store.paginationStep += 5;
    useTeacher.store.pagination = store.paginationStep + 1;
  } else if (page == "plus") {
    useTeacher.store.pagination += 1;
  } else if (page == "minus") {
    useTeacher.store.pagination -= 1;
  } else if (next == "next") {
    useTeacher.store.pagination = page;
  }
  useTeacher.getAllData();
}

const deleteTeacher = () => {
  useTeacher.deleteData(store.deleteId);
};

onMounted(() => {
  useTeacher = useTeacherStore();
  isMount.value = true;
  isLoading.store.pagination.teachers = 1;
  useTeacher.getAllData();
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
