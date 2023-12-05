<template>
  <main>
    <section>
      <div class="flex flex-col w-full bg-gray-900">
        <!-- Component Start -->
        <div class="flex justify-between text-lg font-medium">
          <h1></h1>
          <div class="flex gap-2">
            <button
              @click="useSocket.store.drawer = true"
              class="flex justify-center items-center -mt-2 rounded-[10px] hover:bg-[#027ffc3a] bg-[#027DFC1A] w-[40px] h-[40px]"
            >
              <img src="@/assets/svg/filter.svg" alt="" />
            </button>
            <button
              @click="
                isLoading.modal.create = true;
                isLoading.modal.edit = false;
              "
              class="h-[40px] -mt-2 px-[56px] rounded-lg text-sm leading-4 bg-[#027DFC] text-white"
            >
              <i class="bx bx-plus"></i> Guruh qo'shish
            </button>
          </div>
        </div>

        <!-- filter results -->
        <div class="flex flex-wrap mt-2 justify-start">
          <div
            class="flex flex-wrap items-center"
            v-if="useGroup.appliedFilter.teacher_id?.length"
          >
            <div
              v-for="(i, index) in useGroup.store.teachersList"
              :key="i"
              class="flex items-center justify-between border mr-2 my-0.5 rounded-full py-0.5 px-2"
            >
              <p>
                {{ i }}
              </p>
              <img
                @click="clearFromFilter('teacher_id', index)"
                class="cursor-pointer -mr-1 ml-1 hover:bg-[#027ffc3a] bg-[#027DFC1A] rounded-full p-1"
                src="@/assets/svg/deleteX.svg"
                alt=""
              />
            </div>
          </div>
          <div
            v-if="isLoading.store.allData.subjects?.length != undefined"
            v-for="i in isLoading.store.allData.subjects"
            :key="i.id"
            v-show="useGroup.appliedFilter.subject_id == i.id"
          >
            <div
              class="flex items-center justify-between border mr-2 rounded-full py-0.5 my-0.5 px-2"
            >
              <p>
                {{ i.name }}
              </p>
              <img
                @click="clearFromFilter('subject_id')"
                class="cursor-pointer -mr-1 ml-1 hover:bg-[#027ffc3a] bg-[#027DFC1A] rounded-full p-1"
                src="@/assets/svg/deleteX.svg"
                alt=""
              />
            </div>
          </div>
          <div
            v-if="useGroup.appliedFilter.weeks?.length"
            v-for="(i, index) in useGroup.appliedFilter.weeks"
            class="flex items-center justify-between border mr-2 rounded-full py-0.5 my-0.5 px-2"
          >
            <p>
              {{ i }}
            </p>
            <img
              @click="clearFromFilter('weeks', index)"
              class="cursor-pointer -mr-1 ml-1 hover:bg-[#027ffc3a] bg-[#027DFC1A] rounded-full p-1"
              src="@/assets/svg/deleteX.svg"
              alt=""
            />
          </div>
          <div
            v-if="useGroup.appliedFilter.startDate"
            class="flex items-center justify-between border mr-2 rounded-full py-0.5 my-0.5 px-2"
          >
            <p>
              {{ getData(useGroup.appliedFilter.startDate) }}
            </p>
            <img
              @click="clearFromFilter('startDate')"
              class="cursor-pointer -mr-1 ml-1 hover:bg-[#027ffc3a] bg-[#027DFC1A] rounded-full p-1"
              src="@/assets/svg/deleteX.svg"
              alt=""
            />
          </div>
          <div
            v-if="useGroup.appliedFilter.startTime"
            class="flex items-center justify-between border mr-2 rounded-full py-0.5 my-0.5 px-2"
          >
            <p>
              {{ isLoading.getTime(useGroup.appliedFilter.startTime) }}
            </p>
            <img
              @click="clearFromFilter('startTime')"
              class="cursor-pointer -mr-1 ml-1 hover:bg-[#027ffc3a] bg-[#027DFC1A] rounded-full p-1"
              src="@/assets/svg/deleteX.svg"
              alt=""
            />
          </div>
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
                        class="px-4 py-4 text-left tracking-wider"
                      >
                        O'qituvchi
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-4 text-left tracking-wider"
                      >
                        Fani
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-4 text-left tracking-wider"
                      >
                        Kunlari
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-4 text-left tracking-wider"
                      >
                        Sanasi
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-4 text-left tracking-wider"
                      >
                        Vaqti
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
                    v-if="isLoading.isLoadingType('getAllData/groups')"
                    class="bg-gray-800 pointer-events-none"
                  >
                    <tr
                      v-for="i in 10"
                      :key="i.id"
                      :class="i % 2 == 0 ? 'bg-gray-800' : 'bg-black'"
                      class="bg-opacity-20 animate-pulse"
                    >
                      <td
                        v-for="i in 9"
                        :key="i"
                        class="px-4 h-[62px] py-4"
                      ></td>
                    </tr>
                  </tbody>
                  <tbody v-else class="bg-gray-800">
                    <tr
                      v-for="(i, index) in isLoading.store.allData?.groups"
                      :key="i.id"
                      :class="index % 2 == 0 ? 'bg-black' : 'bg-gray-800'"
                      class="bg-opacity-20 hover:bg-[#027ffc3a]"
                    >
                      <td class="px-4 py-4">#{{ i.id }}</td>
                      <td
                        class="px-4 items-center align-start w-40 whitespace-nowrap"
                      >
                        <p class="font-medium truncate w-40">{{ i.name }}</p>
                      </td>
                      <td
                        class="px-4 items-center align-start w-40 whitespace-nowrap"
                      >
                        {{ i.teacher?.username }}
                      </td>
                      <td
                        class="px-4 items-center align-start w-40 whitespace-nowrap"
                      >
                        {{ i.subjects?.name }}
                      </td>
                      <td
                        class="px-4 items-center align-start w-40 whitespace-nowrap"
                      >
                        {{ i.weeks }}
                      </td>
                      <td
                        class="px-4 items-center align-start w-40 whitespace-nowrap"
                      >
                        {{ getData(i.startDate) }}
                      </td>
                      <td
                        class="px-4 items-center align-start w-40 whitespace-nowrap"
                      >
                        {{ i.startTime }}
                      </td>
                      <td class="px-4 py-4 whitespace-nowrap">
                        {{ i.description }}
                      </td>
                      <td
                        class="flex items-center justify-center mx-2 px-4 py-4 space-x-2 whitespace-nowrap"
                      >
                        <button
                          @click="() => useSocket.getDataById(i.id)"
                          class="bx bx-pencil bg-gray-700 hover:bg-gray-600 py-2 px-3 rounded-lg"
                        ></button>
                        <button
                          @click="
                            () => {
                              isLoading.modal.delete = true;
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
                    !isLoading.isLoadingType('getAllData/groups') &&
                    !isLoading.store.allData?.groups?.length
                  "
                >
                  <Nodata>Guruh</Nodata>
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
            <div class="space-y-1">
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
                <el-select
                  class="w-full"
                  placeholder="Guruh fanini tanlang"
                  v-model="useGroup.group.subject_id"
                  filterable
                  required
                >
                  <el-option
                    class="options"
                    v-for="item in isLoading.store.allData.subjects"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
                <el-select
                  v-if="isMount"
                  class="w-full"
                  @input="(e) => inputSelectTeacher(e)"
                  v-model="useGroup.group.teacher_id"
                  filterable
                  placeholder="O'qituvchini tanlang"
                  required
                >
                  <el-option
                    class="options"
                    v-for="(item, index) in isLoading.store.allData?.teachers"
                    :key="item.id"
                    :label="item.username"
                    :value="item.id"
                  />
                  <SelectPagination />
                </el-select>
                <el-select
                  class="w-full"
                  placeholder="Hafta kunlarini tanlang"
                  v-model="useGroup.group.weeks"
                  @change="handleChange"
                  multiple
                  filterable
                  required
                >
                  <el-option
                    class="options"
                    v-for="item in constants.weeks"
                    :key="item.label"
                    :label="item.label"
                    :value="item.label"
                  />
                </el-select>
                <div
                  v-if="useGroup.group.weeks?.length"
                  class="flex flex-wrap justify-start"
                >
                  <div v-for="(item, index) in useGroup.group.weeks">
                    <div
                      class="flex items-center justify-between border mr-2 rounded-full py-0.5 my-0.5 px-2"
                    >
                      <p>
                        {{ item }}
                      </p>
                      <img
                        @click="useGroup.group.weeks?.splice(index, 1)"
                        class="cursor-pointer -mr-1 ml-1 hover:bg-[#027ffc3a] rounded-full p-1"
                        src="@/assets/svg/deleteX.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <el-date-picker
                  id="startdate"
                  v-model="useGroup.group.startDate"
                  type="date"
                  class="min-w-full min-h-[40px] bg-transparent border-0"
                  placeholder="Boshlanish sanasi"
                  format="YYYY/MM/DD"
                  required
                />

                <div class="relative">
                  <img
                    class="absolute opacity-40 z-10 top-[10px] left-3"
                    src="@/assets/svg/clock.svg"
                    alt=""
                  />
                  <el-time-picker
                    prefix-icon="false"
                    v-model="useGroup.group.startTime"
                    class="max-w-[180px] w-full min-h-[40px]"
                    placeholder="Boshlanish vaqti"
                    format="HH:mm"
                  />
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
          Guruhni tahrirlash
          <Loading />
        </button>
        <button
          v-else
          :type="isLoading.isLoadingType('modal') ? 'button' : 'submit'"
          class="h-[40px] overflow-hidden w-full bg-[#027DFC] mt-8 text-sm leading-4 font-medium text-white rounded-full"
          v-loading="isLoading.isLoadingType('modal')"
        >
          Guruhni qo'shish
          <Loading />
        </button>
      </form>
    </el-dialog>

    <!---------------- delete group ----------------------->
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
          Guruhni o'chirish
        </h1>
        <img
          @click="isLoading.modal.delete = false"
          class="hover:bg-[#027ffc3a] p-2 rounded-lg cursor-pointer"
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
          class="bg-[#027DFC] h-[40px] rounded-full overflow-hidden text-white mt-10 w-full"
          v-loading="isLoading.isLoadingType('modal')"
        >
          Guruhni o'chirish
        </button>
        <button
          @click="isLoading.modal.delete = false"
          class="h-[40px] rounded-[10px] mt-4 w-full"
        >
          Bekor qilish
        </button>
      </div>
    </el-dialog>

    <!----------------------------------------------- filter --------------------------------------------------->
    <el-drawer
      v-if="isMount"
      class="rounded-l-[40px] !bg-gray-800 min-w-[500px] px-5 text-sm"
      v-model="useSocket.store.drawer"
      title="I am the title"
      :with-header="false"
    >
      <form @submit.prevent="applyFilter">
        <div
          class="flex sticky top-0 h-5 items-center pt-7 justify-between bg-gray-800"
        >
          <h1 class="font-medium text-2xl leading-7">Filters</h1>
          <img
            @click="useSocket.store.drawer = false"
            class="h-8 w-8 rounded-full p-2 hover:bg-[#027ffc3a] bg-[#027DFC1A] cursor-pointer"
            src="../../assets/svg/x.svg"
            alt="x"
          />
        </div>
        <div class="h-6 bg-gray-800"></div>
        <div
          class="pt-5 px-[1px] space-y-7 max-h-[calc(100vh_-_240px)] overflow-hidden overflow-y-auto"
        >
          <div class="space-y-1">
            <h1 class="uppercase font-bold text-[11px]">
              O'qituvchi bo'yicha filtrlash
            </h1>
            <el-select
              v-if="isMount"
              class="w-full"
              @input="(e) => inputSelectTeacher(e)"
              v-model="useGroup.filter.teacher_id"
              filterable
              multiple
              placeholder="O'qituvchini tanlang"
              required
            >
              <el-option
                class="options"
                @click="() => changeTeacherIndex(item.username)"
                v-for="(item, index) in isLoading.store.allData?.teachers"
                :key="item.id"
                :label="item.username"
                :value="item.id"
              />
              <SelectPagination />
            </el-select>
            <div
              v-if="useGroup.store.teachersList?.length"
              class="flex flex-wrap pt-1 gap-2"
            >
              <div
                v-for="(i, index) in useGroup.store.teachersList"
                class="flex border justify-start py-0.5 px-2 rounded-full"
              >
                <p>
                  {{ i }}
                </p>
                <img
                  @click="clearFilteredTeacher(index)"
                  class="cursor-pointer -mr-1 ml-1 hover:bg-[#027ffc3a] bg-[#027DFC1A] rounded-full p-1"
                  src="@/assets/svg/deleteX.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="space-y-1">
            <h1 class="uppercase font-bold text-[11px]">
              Fan bo'yicha filtrlash
            </h1>
            <el-select
              class="w-full"
              placeholder="Guruh fanini tanlang"
              v-model="useGroup.filter.subject_id"
              filterable
              required
            >
              <el-option
                class="options"
                v-for="item in isLoading.store.allData.subjects"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </div>
          <div class="space-y-1">
            <h1 class="uppercase font-bold text-[11px]">
              Hafta kunlar bo'yicha filtrlash
            </h1>
            <el-select
              class="w-full"
              placeholder="Hafta kunlarini tanlang"
              v-model="useGroup.filter.weeks"
              @change="handleChange"
              multiple
              filterable
              required
            >
              <el-option
                class="options"
                v-for="item in constants.weeks"
                :key="item.label"
                :label="item.label"
                :value="item.label"
              />
            </el-select>
            <div
              v-if="useGroup.filter.weeks?.length"
              class="flex flex-wrap justify-start"
            >
              <div v-for="(item, index) in useGroup.filter.weeks">
                <div
                  class="flex items-center justify-between border mr-2 rounded-full py-0.5 my-0.5 px-2"
                >
                  <p>
                    {{ item }}
                  </p>
                  <img
                    @click="useGroup.filter.weeks?.splice(index, 1)"
                    class="cursor-pointer -mr-1 ml-1 hover:bg-[#027ffc3a] rounded-full p-1"
                    src="@/assets/svg/deleteX.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-1">
            <h1 class="uppercase font-bold text-[11px]">
              Boshlanish sanasi bo'yicha filtrlash
            </h1>
            <el-date-picker
              id="startdate"
              v-model="useGroup.filter.startDate"
              type="date"
              class="min-w-full min-h-[40px] bg-transparent border-0"
              placeholder="Boshlanish sanasi"
              format="YYYY/MM/DD"
              required
            />
          </div>
          <div class="space-y-1">
            <h1 class="uppercase font-bold text-[11px]">
              Boshlanish vaqti bo'yicha filtrlash
            </h1>
            <div class="relative">
              <img
                class="absolute opacity-40 z-10 top-[10px] left-3"
                src="@/assets/svg/clock.svg"
                alt=""
              />
              <el-time-picker
                prefix-icon="false"
                v-model="useGroup.filter.startTime"
                class="max-w-[180px] w-full min-h-[40px]"
                placeholder="Boshlanish vaqti"
                format="HH:mm"
              />
            </div>
          </div>
        </div>

        <div class="absolute bottom-8 w-full bg-gray-800 pr-10 font-medium">
          <button
            @click="apply"
            class="h-[46px] w-[420px] bg-[#027DFC] rounded-[10px]"
          >
            Apply filters
          </button>
          <button
            @click="applyFilter('clear')"
            type="button"
            class="h-[46px] w-[420px] text-[#027DFC] pt-8"
          >
            Clear all filters
          </button>
        </div>
      </form>
    </el-drawer>
  </main>
</template>

<script setup>
import {
  useLoadingStore,
  useSocketStore,
  useGroupStore,
  useSubjectsStore,
  useTeacherStore,
} from "@/store";
const isMount = ref(false);
import { constants } from "@/constants/data";

let useSocket;
let useSubjects;
let useTeacher;
const isLoading = useLoadingStore();
const useGroup = useGroupStore();
isLoading.store.pageName = "groups";
isLoading.addLoading("getAllData/groups");
isLoading.search.searchType.groups = "id";
isLoading.pagination.pageName = "teachers";
isLoading.search.search.groups = "";
isLoading.store.searchOptions = [
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
  drawer: false,
});

const form = reactive({
  name: "",
  description: "",
});

function handleSubmit() {
  if (isLoading.modal.edit) {
    useSocket.updateData();
  } else {
    useSocket.createData();
  }
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

function applyFilter(isClear) {
  if (isClear == "clear") {
    for (let type of Object.keys(useGroup.appliedFilter)) {
      useGroup.appliedFilter[type] = null;
      useGroup.filter[type] = null;
    }
  }
  for (let i of Object.keys(useGroup.filter)) {
    useGroup.appliedFilter[i] = useGroup.filter[i];
  }
  useSocket.store.drawer = false;
  isLoading.store.isSearching = true;
  useSocket.getAllData("searching");
}

function inputSelectTeacher(e) {
  isLoading.store.isSearching = true;
  isLoading.addLoading("getAllData/teachers");
  isLoading.search.search.teachers = e.target.value.trim();
  useTeacher.getAllData("searchByUsername");
}

function clearFromFilter(type, index) {
  if (type == "teacher_id") {
    useGroup.appliedFilter.teacher_id?.splice(index, 1);
    useGroup.filter.teacher_id.splice(index, 1);
    useGroup.store.teachersList.splice(index, 1);
  } else if (type == "weeks") {
    useGroup.appliedFilter[type].splice(index, 1);
    useGroup.filter[type].splice(index, 1);
  } else {
    useGroup.appliedFilter[type] = null;
    useGroup.filter[type] = null;
  }
  isLoading.store.isSearching = true;
  useSocket.getAllData("searching");
}

function changeTeacherIndex(username) {
  const isIndex = useGroup.store.teachersList.indexOf(username);
  if (isIndex == -1) {
    useGroup.store.teachersList.push(username);
  } else {
    useGroup.store.teachersList.splice(isIndex, 1);
  }
}

function clearFilteredTeacher(index) {
  useGroup.store.teachersList?.splice(index, 1);
  useGroup.filter.teacher_id?.splice(index, 1);
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
      (useSocket.store.pagination == store.paginationStep + 1 &&
        page == "minus")) &&
    store.paginationStep !== 0
  ) {
    store.paginationStep -= 5;
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
  useTeacher = useTeacherStore();
  useSubjects = useSubjectsStore();
  useSocket = useSocketStore();
  isMount.value = true;
  isLoading.store.pagination.groups = 1;
  useSocket.getAllData();
  useSubjects.getAllData();
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
