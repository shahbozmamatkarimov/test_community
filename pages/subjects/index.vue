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
              <i class="bx bx-plus"></i> Fan qo'shish
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
                        <th scope="col" class="px-4 py-4 min-w-[40px]"></th>
                      </tr>
                    </thead>
                    <tbody
                      v-if="isLoading.isLoadingType('getAllData/subjects')"
                      class="bg-gray-800 pointer-events-none"
                    >
                      <tr
                        v-for="i in 10"
                        :key="i.id"
                        :class="i % 2 == 0 ? 'bg-gray-800' : 'bg-black'"
                        class="bg-opacity-20 animate-pulse"
                      >
                        <td
                          v-for="i in 3"
                          :key="i"
                          class="px-4 h-[62px] py-4"
                        ></td>
                      </tr>
                    </tbody>
                    <tbody v-else class="bg-gray-800">
                      <tr
                        v-for="(i, index) in isLoading.store.allData?.subjects"
                        :key="i.id"
                        :class="index % 2 == 0 ? 'bg-black' : 'bg-gray-800'"
                        class="bg-opacity-20 hover:bg-[#027DFC1A]"
                      >
                        <td class="px-4 py-4">#{{ i.id }}</td>
                        <td
                          class="px-4 items-center align-start w-40 whitespace-nowrap"
                        >
                          <p class="font-medium">{{ i.name }}</p>
                        </td>
                        <td
                          class="flex items-center justify-center mx-2 px-4 py-4 space-x-2 whitespace-nowrap"
                        >
                          <button
                            @click="() => useSubjects.getDataById(i.id)"
                            class="bx bx-pencil bg-gray-700 hover:bg-gray-600 py-2 px-3 rounded-lg"
                          ></button>
                          <button
                            @click="
                              () => {
                                isLoading.modal.delete = true;
                                useSubjects.store.id = i.id;
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
                      !isLoading.isLoadingType('getAllData/subjects') &&
                      !isLoading.store.allData?.subjects?.length
                    "
                  >
                    <Nodata>Fan</Nodata>
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
            <i class="bx bxs-subject"></i>
            Fan qo'shish
          </h1>
          <h1
            v-else
            class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
          >
            <i class="bx bxs-subject"></i>
            Fanni tahrirlash
          </h1>
          <img
            @click="isLoading.modal.create = false"
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
                    v-model="useSubjects.create.name"
                    placeholder="Fan nomi"
                    required
                  />
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
            Fanni tahrirlash
            <Loading />
          </button>
          <button
            v-else
            :type="isLoading.isLoadingType('modal') ? 'button' : 'submit'"
            class="h-[40px] overflow-hidden w-full bg-[#027DFC] mt-8 text-sm leading-4 font-medium text-white rounded-full"
            v-loading="isLoading.isLoadingType('modal')"
          >
            Fanni qo'shish
            <Loading />
          </button>
        </form>
      </el-dialog>
  
      <!---------------- delete subject ----------------------->
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
            Fanni o'chirish
          </h1>
          <img
            @click="isLoading.modal.delete = false"
            class="hover:bg-[#027DFC1A] p-2 rounded-lg cursor-pointer"
            src="@/assets/svg/x.svg"
            alt="x"
          />
        </div>
        <p class="mt-12 text-[16px] leading-[19px]">
          Haqiqatan ham bu fanni o'chirib tashlamoqchimisiz?
        </p>
        <div>
          <button
            @click="useSubjects.deleteData()"
            class="bg-[#027DFC] h-[40px] rounded-full overflow-hidden text-white mt-10 w-full"
            v-loading="isLoading.isLoadingType('modal')"
          >
            Fanni o'chirish
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
  import { useLoadingStore, useSubjectsStore } from "@/store";
  const isMount = ref(false);
  
  let useSubjects;
  const isLoading = useLoadingStore();
  isLoading.store.pageName = "subjects";
  isLoading.addLoading("getAllData/subjects");
  isLoading.search.searchType.subjects = "id";
  isLoading.search.search.subjects = "";
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
    allSubjects: "",
    modalCreate: false,
    modalDelete: false,
    token: "",
    deleteId: "",
    edit: false,
    editId: "",
    test_time: "",
    is_Loading: false,
  });
  
  const form = reactive({
    name: "",
    description: "",
  });
  
  const subject = [
    {
      label: "Fizika",
    },
    {
      label: "Kimyo",
    },
    {
      label: "Biologiya",
    },
    {
      label: "Matematika",
    },
    {
      label: "Ingliz tili",
    },
    {
      label: "Rus tili",
    },
  ]
  
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
      useSubjects.updateData();
    } else {
      useSubjects.createData();
    }
  }
  
  const handleChange = (value) => {
    const last = value[value.length - 1];
    const lastValue = value.pop()?.split(",");
    let isLast = false;
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
  
  function pageNext(page, next) {
    console.log(useSubjects.store.pagination);
    console.log(store.paginationStep + 5);
    if (
      (page == "minusTen" ||
        (useSubjects.store.pagination == store.paginationStep + 1 &&
          page == "minus")) &&
      store.paginationStep !== 0
    ) {
      store.paginationStep -= 5;
      console.log(store.paginationStep);
      useSubjects.store.pagination = store.paginationStep + 5;
    } else if (
      (page == "plusTen" ||
        (useSubjects.store.pagination == store.paginationStep + 5 &&
          page == "plus")) &&
      store.paginationStep < Math.floor(useSubjects.store.pageData.total_pages) - 5
    ) {
      store.paginationStep += 5;
      useSubjects.store.pagination = store.paginationStep + 1;
    } else if (page == "plus") {
      useSubjects.store.pagination += 1;
    } else if (page == "minus") {
      useSubjects.store.pagination -= 1;
    } else if (next == "next") {
      useSubjects.store.pagination = page;
    }
    useSubjects.getAllData();
  }
  
  const deleteSubject = () => {
    useSubjects.deleteData(store.deleteId);
  };
  
  onMounted(() => {
    useSubjects = useSubjectsStore();
    isMount.value = true;
    isLoading.store.pagination.subjects = 1;
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
  