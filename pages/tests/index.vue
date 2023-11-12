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
            <i class="bx bx-plus"></i> Test qo'shish
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
                        MAVZUSI
                      </th>
                      <th
                        scope="col"
                        class="px-4 text-start py-4 tracking-wider"
                      >
                        Testlar soni
                      </th>
                      <th
                        scope="col"
                        class="px-4 text-start py-4 tracking-wider"
                      >
                        Guruhlar
                      </th>
                      <th
                        scope="col"
                        class="px-4 text-start py-4 tracking-wider"
                      >
                        JAVOBLAR
                      </th>
                      <th
                        scope="col"
                        class="px-4 text-start py-4 tracking-wider"
                      >
                        BOSHLANISH VAQTI
                      </th>
                      <th
                        scope="col"
                        class="px-4 text-start py-4 tracking-wider"
                      >
                        TUGASH VAQTI
                      </th>
                      <th
                        scope="col"
                        class="px-4 text-start py-4 tracking-wider"
                      >
                        Vazifalar
                      </th>
                      <th
                        scope="col"
                        class="px-4 text-start py-4 tracking-wider"
                      >
                        Testlar
                      </th>
                      <th scope="col" class="px-4 py-4 min-w-[40px]"></th>
                    </tr>
                  </thead>
                  <tbody
                    v-if="isLoading.isLoadingType('getAllData/tests')"
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
                      v-for="(i, index) in isLoading.store.allData?.tests"
                      :key="i.id"
                      :class="index % 2 == 0 ? 'bg-black' : 'bg-gray-800'"
                      class="bg-opacity-20 hover:bg-[#027DFC1A]"
                    >
                      <td class="px-4 py-4">#{{ i.id }}</td>
                      <td
                        class="px-4 items-center align-start max-w-[160px] whitespace-nowrap"
                      >
                        <p class="font-medium truncate max-w-[160px]">
                          {{ i.title }}
                        </p>
                      </td>
                      <td class="px-4 py-4 whitespace-nowrap">
                        {{ i.test_count }}
                      </td>
                      <td class="px-4 py-4 whitespace-nowrap">
                        {{ i.group_id }}
                      </td>
                      <td class="px-4 py-4 whitespace-nowrap">
                        {{ i.answers }}
                      </td>
                      <td class="px-4 py-4 whitespace-nowrap">
                        {{ getData(i.start_time) }}
                      </td>
                      <td class="px-4 py-4 whitespace-nowrap">
                        {{ getData(i.end_time) }}
                      </td>
                      <td class="px-4 justify-center whitespace-nowrap">
                        <div class="flex pl-4">
                          <div
                            @click="
                              useTests.store.uploadedFiles = i.image;
                              useTests.store.uploadedFilesModal = true;
                              store.excelModal = false;
                            "
                            class="hover:scale-110 duration-500 flex items-center cursor-pointer"
                          >
                            <embed
                              id="embedTag"
                              v-for="i in i.image"
                              class="w-10 h-10 -ml-6 shadow-lg border object-cover cursor-pointer shadow-black rounded-full"
                              :src="baseUrl + '/' + i.file"
                            />
                          </div>
                          <button
                            @click="
                              useTests.store.uploadModal = true;
                              useTests.store.id = i.id;
                              store.excelModal = false;
                            "
                            class="bx bx-plus bg-[#80808073] backdrop-blur-sm text-white text-xl font-bold min-w-[40px] w-10 h-10 -ml-6 shadow-lg shadow-black rounded-full"
                          ></button>
                        </div>
                      </td>
                      <td class="px-4 justify-center whitespace-nowrap">
                        <div class="flex pl-4">
                          <div
                            @click="store.excelInfoModal = true"
                            class="hover:scale-110 duration-500 flex items-center cursor-pointer"
                          >
                            <img
                              v-for="i in i.testfile"
                              class="w-10 h-10 min-w-[40px] -ml-6 shadow-lg border object-cover shadow-black rounded-full"
                              src="@/assets/images/excel.png"
                            />
                          </div>
                          <button
                            @click="
                              useTests.store.uploadModal = true;
                              useTests.store.id = i.id;
                              store.excelModal = true;
                            "
                            class="bx bx-plus bg-[#80808073] backdrop-blur-sm text-white text-xl font-bold min-w-[40px] w-10 h-10 -ml-6 shadow-lg shadow-black rounded-full"
                          ></button>
                        </div>
                      </td>
                      <td
                        class="flex items-center justify-center mx-2 px-4 py-4 space-x-2 whitespace-nowrap"
                      >
                        <button
                          @click="() => useTests.getDataById(i.id)"
                          class="bx bx-pencil bg-gray-700 hover:bg-gray-600 py-2 px-3 rounded-lg"
                        ></button>
                        <button
                          @click="
                            () => {
                              isLoading.modal.delete = true;
                              useTests.store.id = i.id;
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
                    !isLoading.isLoadingType('getAllData/tests') &&
                    !isLoading.store.allData?.tests?.length
                  "
                >
                  <Nodata>Test</Nodata>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Component End  -->
      </div>
    </section>
    <Pagination />

    <!------------------------- create and edit test ------------------------------->
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
          v-if="!store.edit"
          class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
        >
          <i class="bx bxs-group"></i>
          Test qo'shish
        </h1>
        <h1
          v-else="!store.edit"
          class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
        >
          <i class="bx bxs-group"></i>
          Testni tahrirlash
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
                  v-model="useTests.create.title"
                  placeholder="Test nomi"
                  maxlength="50"
                  required
                />
                <input
                  type="number"
                  v-model="useTests.create.test_count"
                  @input="answersCount"
                  class="w-full"
                  placeholder="Test soni"
                  required
                />
                <div class="flex items-center">
                  <input
                    type="number"
                    v-model="useTests.create.min_ball"
                    @input="minBallFunc"
                    class="w-full"
                    placeholder="O'tish bali"
                    max="100"
                    required
                  />
                  <p class="-ml-7">%</p>
                </div>
                <el-select
                  class="w-full"
                  id="selectgroup"
                  @input="(e) => inputSelectGroup(e)"
                  v-model="useTests.create.group_id"
                  filterable
                  placeholder="Guruhni tanlang"
                  required
                >
                  <el-option
                    v-for="(item, index) in isLoading.store.allData?.groups"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                  <SelectPagination />
                </el-select>
                <el-checkbox class="-mt-3" v-model="store.deleteId"
                  ><p class="text-black ml-1 text-[16px]">
                    Barcha guruhlar uchun
                  </p></el-checkbox
                >
                <div class="flex justify-between">
                  <el-date-picker
                    id="startdate"
                    v-model="useTests.create.start_time"
                    type="date"
                    class="max-w-[180px] min-h-[40px] bg-transparent border-0"
                    placeholder="Boshlanish vaqti"
                    format="YYYY/MM/DD"
                    required
                  />
                  <el-date-picker
                    id="startdate"
                    v-model="useTests.create.end_time"
                    type="date"
                    class="max-w-[180px] min-h-[40px] bg-transparent border-0"
                    placeholder="Tugash vaqti"
                    format="YYYY/MM/DD"
                    required
                  />
                </div>
                <el-checkbox class="-mt-3" v-model="useTests.create.is_time"
                  ><p class="text-black ml-1 text-[16px]">
                    Vaqt tugagach test qabul qilinmasin
                  </p></el-checkbox
                >
                <el-checkbox class="-mt-6" v-model="useTests.create.is_message"
                  ><p class="text-black ml-1 text-[16px]">
                    Menga xabar berilsin
                  </p></el-checkbox
                >
                <input
                  type="text"
                  v-model="useTests.create.variants"
                  @input="(e) => answerVariants(e)"
                  class="w-full uppercase"
                  placeholder="Variantlar"
                  required
                />
                <input
                  type="text"
                  v-model="useTests.create.answers"
                  @input="(e) => answersInput(e)"
                  class="w-full uppercase"
                  placeholder="Javoblari"
                  :minlength="+useTests.create.test_count"
                  :maxlength="+useTests.create.test_count"
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
          Testni tahrirlash
          <Loading />
        </button>
        <button
          v-else
          :type="isLoading.isLoadingType('modal') ? 'button' : 'submit'"
          class="h-[40px] overflow-hidden w-full bg-[#027DFC] mt-8 text-sm leading-4 font-medium text-white rounded-full"
          v-loading="isLoading.isLoadingType('modal')"
        >
          Testni qo'shish
          <Loading />
        </button>
      </form>
    </el-dialog>

    <!---------------- delete test ----------------------->
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
          Testni o'chirish
        </h1>
        <img
          @click="isLoading.modal.delete = false"
          class="hover:bg-[#027DFC1A] p-2 rounded-lg cursor-pointer"
          src="@/assets/svg/x.svg"
          alt="x"
        />
      </div>
      <p class="mt-12 text-[16px] leading-[19px]">
        Haqiqatan ham bu testni o'chirib tashlamoqchimisiz?
      </p>
      <div>
        <button
          @click="useTests.deleteData()"
          class="bg-[#027DFC] h-[40px] rounded-full overflow-hidden text-white mt-10 w-full"
          v-loading="isLoading.isLoadingType('modal')"
        >
          Testni o'chirish
        </button>
        <button
          @click="isLoading.modal.delete = false"
          class="h-[40px] rounded-[10px] mt-4 w-full"
        >
          Bekor qilish
        </button>
      </div>
    </el-dialog>

    <!---------------- upload image ----------------------->
    <el-dialog
      v-if="isMount"
      v-model="useTests.store.uploadModal"
      width="500"
      style="border-radius: 16px"
      class="rounded-2xl p-10 min-w-[400px mx-auto"
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
          <span v-if="store.excelModal">Testlar</span>
          <span v-else>Vazifalar</span>
        </h1>
        <img
          @click="useTests.store.uploadModal = false"
          class="hover:bg-[#027DFC1A] p-2 rounded-lg cursor-pointer"
          src="@/assets/svg/x.svg"
          alt="x"
        />
      </div>
      <form @submit.prevent="uploadFile">
        <div class="mt-10">
          <div
            v-if="store.excelModal"
            :class="useTests.store.files?.length == 0 ? '' : 'uploadedExcel'"
          >
            <div class="uploadExcelImage hidden">
              <img class="mx-auto" src="@/assets/images/excel.png" alt="" />
            </div>
            <el-upload
              accept=".xlsx"
              multiple
              drag
              v-model:file-list="useTests.store.files"
            >
              <div
                style="margin: 0; padding: 0"
                for="uploadFile"
                class="flex flex-col cursor-pointer justify-center items-center bg-transparent rounded-lg border-2 border-dashed border-[#999] min-w-full h-[170px]"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.3335 14.6654V11.9987C25.3335 11.2915 25.0525 10.6132 24.5524 10.1131C24.0524 9.61298 23.3741 9.33203 22.6668 9.33203H12.0002C11.2929 9.33203 10.6146 9.61298 10.1145 10.1131C9.61445 10.6132 9.3335 11.2915 9.3335 11.9987V22.6654C9.3335 23.3726 9.61445 24.0509 10.1145 24.551C10.6146 25.0511 11.2929 25.332 12.0002 25.332H14.6668"
                    stroke="#999999"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 4V4.01333M9.33333 4V4.01333M14.6667 4V4.01333M20 4V4.01333M4 9.33333V9.34667M4 14.6667V14.68M4 20V20.0133M17.3333 17.3333L29.3333 21.3333L24 24L21.3333 29.3333L17.3333 17.3333Z"
                    stroke="#999999"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h1 class="text-[#999]">Drag and drop your files</h1>
              </div>
            </el-upload>
          </div>
          <el-upload
            v-else
            drag
            multiple
            v-model:file-list="useTests.store.files"
          >
            <div
              style="margin: 0; padding: 0"
              for="uploadFile"
              class="flex flex-col cursor-pointer justify-center items-center bg-transparent rounded-lg border-2 border-dashed border-[#999] min-w-full h-[170px]"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.3335 14.6654V11.9987C25.3335 11.2915 25.0525 10.6132 24.5524 10.1131C24.0524 9.61298 23.3741 9.33203 22.6668 9.33203H12.0002C11.2929 9.33203 10.6146 9.61298 10.1145 10.1131C9.61445 10.6132 9.3335 11.2915 9.3335 11.9987V22.6654C9.3335 23.3726 9.61445 24.0509 10.1145 24.551C10.6146 25.0511 11.2929 25.332 12.0002 25.332H14.6668"
                  stroke="#999999"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 4V4.01333M9.33333 4V4.01333M14.6667 4V4.01333M20 4V4.01333M4 9.33333V9.34667M4 14.6667V14.68M4 20V20.0133M17.3333 17.3333L29.3333 21.3333L24 24L21.3333 29.3333L17.3333 17.3333Z"
                  stroke="#999999"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1 class="text-[#999]">Drag and drop your files</h1>
            </div>
          </el-upload>
        </div>
        <div>
          <button
            :type="isLoading.isLoadingType('modal') ? 'button' : 'submit'"
            class="h-[40px] overflow-hidden w-full bg-[#027DFC] mt-8 text-sm leading-4 font-medium text-white rounded-full"
            v-loading="isLoading.isLoadingType('modal')"
          >
            Faylni yuklash
            <Loading />
          </button>
          <button
            @click="useTests.store.uploadModal = false"
            class="h-[40px] rounded-full mt-4 w-full"
          >
            Bekor qilish
          </button>
        </div>
      </form>
    </el-dialog>

    <!---------------- upload image ----------------------->
    <el-dialog
      v-if="isMount"
      v-model="useTests.store.uploadedFilesModal"
      width="500"
      style="border-radius: 16px"
      class="rounded-2xl min-w-[100vw] min-h-[100vh] mx-auto"
      align-center
      close-icon="false"
    >
      <div class="flex justify-between items-center py-3 mt-3 px-16 w-full">
        <h1
          class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
        >
          <img
            class="w-6 h-6 !fill-blue-600"
            src="@/assets/svg/delete.svg"
            alt=""
          />
          Testni fayllari
        </h1>
        <img
          @click="useTests.store.uploadedFilesModal = false"
          class="hover:bg-[#027DFC1A] p-2 rounded-lg cursor-pointer"
          src="@/assets/svg/x.svg"
          alt="x"
        />
      </div>
      <div class="flex justify-center" v-if="!store.excelModal">
        <button
          @click="nextFile('back')"
          class="flex hover:bg-[#8080805c] backdrop-blur-2xl min-h-full items-center justify-center w-10"
        >
          <i
            class="bx bx-left-arrow flex items-center justify-center bg-[rgb(40 40 40)] w-10 h-10 rounded-full backdrop-blur-2xl"
          ></i>
        </button>
        <div class="flex border w-[500px] overflow-hidden">
          <div
            id="sliderFiles"
            class="flex items-center relative duration-1000 max-w-[500px] mx-auto"
          >
            <embed
              v-for="i in useTests.store.uploadedFiles"
              class="flex items-center object-contain justify-center duration-1000 min-h-[80vh] min-w-[500px] mx-auto"
              :src="'http://localhost:4000/' + i.file"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              role="document"
              aria-label="Doc document"
              title="Doc document"
            />
          </div>
        </div>
        <button
          @click="nextFile('next')"
          class="flex hover:bg-[#8080805c] backdrop-blur-2xl min-h-full items-center justify-center w-10"
        >
          <i
            class="bx bx-left-arrow rotate-180 flex items-center justify-center bg-[rgb(40 40 40)] w-10 h-10 rounded-full backdrop-blur-2xl"
          ></i>
        </button>
      </div>

      <div
        v-else
        class="h-[81vh] -mb-[1vh] overflow-hidden overflow-y-auto space-y-2"
      >
        <div
          v-for="(i, index) in useTests.store.jsonData"
          class="mx-16 border p-5 rounded-2xl"
        >
          <h1 class="pb-2 text-2xl">{{ index + 1 }}. {{ i.Test }}</h1>
          <el-radio-group
            class="flex flex-col !items-start space-y-1"
            v-model="radio"
          >
            <el-radio :label="3">A. {{ i.A }}</el-radio>
            <el-radio :label="6">B. {{ i.B }}</el-radio>
            <el-radio :label="9">C. {{ i.C }}</el-radio>
            <el-radio :label="9">D. {{ i.D }}</el-radio>
          </el-radio-group>
        </div>
      </div>

      <div class="flex justify-between items-center py-4 px-16">
        <button
          @click="useTests.store.uploadedFilesModal = false"
          class="h-[40px] rounded-full border whitespace-nowrap px-5"
        >
          O'tkazib yuborish
        </button>
        <div class="flex gap-5">
          <button
            :type="isLoading.isLoadingType('modal') ? 'button' : 'submit'"
            class="h-[40px] overflow-hidden px-5 bg-[#027DFC] hover:bg-red-600 text-sm leading-4 font-medium text-white rounded-full"
            v-loading="isLoading.isLoadingType('modal')"
          >
            Faylni o'chirish
            <Loading />
          </button>
          <button
            @click="nextFile('next', 'btn')"
            :type="isLoading.isLoadingType('modal') ? 'button' : 'submit'"
            class="h-[40px] overflow-hidden px-5 bg-[#027DFC] text-sm leading-4 font-medium text-white rounded-full"
            v-loading="isLoading.isLoadingType('modal')"
          >
            Keyingi
            <Loading />
          </button>
        </div>
      </div>
    </el-dialog>

    <!-- excel files -->
    <el-drawer
      v-if="isMount"
      class="rounded-l-[40px] min-w-[500px] pb-[43px] px-[30px]"
      v-model="store.excelInfoModal"
      title="I am the title"
      :with-header="false"
    >
    </el-drawer>
  </main>
</template>

<script setup>
import {
  useLoadingStore,
  useSocketStore,
  useTestStore,
  useGroupStore,
} from "@/store";

const isMount = ref(false);

const runtime = useRuntimeConfig();
const baseUrl = runtime.public.baseURL;
let useSocket;
const isLoading = useLoadingStore();
const useGroup = useGroupStore();
let useTests;
isLoading.store.pageName = "tests";
isLoading.addLoading("getAllData/tests");
isLoading.search.searchType.tests = "id";
isLoading.search.search.tests = "";
isLoading.store.searchOptions = [
  {
    value: "id",
    label: "id",
  },
  {
    value: "title",
    label: "mavzu",
  },
  {
    value: "calendar",
    label: "kalendar",
  },
];

const store = reactive({
  edit: false,
  upload: false,
  previewImage: [],
  excelModal: false,
  excelInfoModal: false,
  sliderStep: 0,
  excelText: "",
  jsonData: [],
});

function nextFile(step, next) {
  const tag = document.getElementById("sliderFiles");
  if (step == "next") {
    if (useTests.store.uploadedFiles?.length - 1 > store.sliderStep) {
      store.sliderStep++;
    } else {
      if (next == "btn") {
        useTests.store.uploadedFilesModal = false;
      }
    }
  } else {
    if (store.sliderStep > 0) {
      store.sliderStep--;
    }
  }
  tag.style.transform = `translateX(-${store.sliderStep * 100}%)`;
}

function getData(date) {
  let data = new Date(date);
  const day = data.getDate() > 9 ? data.getDate() : "0" + data.getDate();
  const month =
    data.getMonth() + 1 > 9 ? data.getMonth() + 1 : "0" + (data.getMonth() + 1);
  const year = String(data.getFullYear());
  return day + "." + month + "." + year;
}

function handleSubmit() {
  if (isLoading.modal.edit) {
    useTests.updateData();
  } else {
    useTests.createData();
  }
}

function answersInput(e) {
  if (e.inputType !== "insertText") return;
  useTests.create.answers = useTests.create.answers.toUpperCase();
  for (let i of useTests.create.variants) {
    if (e.target.value.slice(-1).toLowerCase() === i.toLowerCase()) {
      return;
    }
  }
  useTests.create.answers = useTests.create.answers.slice(0, -1);
}

function answerVariants(e) {
  if (e.inputType !== "insertText") return;
  if (useTests.create.variants.length == 1) return;
  let t = 0;
  for (let i of useTests.create.variants) {
    if (e.target.value.slice(-1).toLowerCase() === i.toLowerCase()) {
      if (t === 1) {
        useTests.create.variants = useTests.create.variants.slice(0, -1);
        return;
      }
      t++;
    }
  }
}

function minBallFunc(e) {
  if (e.target.value < 0) {
    useTests.create.min_ball = 0;
  } else if (e.target.value <= 100) {
    useTests.create.min_ball = e.target.value;
  } else {
    useTests.create.min_ball = 100;
  }
}

function answersCount() {
  if (useTests.create.test_count > 0) {
    useTests.create.answers = useTests.create.answers.slice(
      0,
      useTests.create.test_count
    );
  }
}

function inputSelectGroup(e) {
  console.log(e.target.value);
  isLoading.search.search.groups = e.target.value;
  isLoading.store.isSearching = true;
  useSocket?.getAllData("searching");
}

async function uploadFile() {
  if (store.excelModal) {
    // -------------------------- local excel reader ------------------------
    // store.jsonData = [];
    // const file = useTests.store.files[0].raw;
    // const reader = new FileReader();
    // reader.onload = async (e) => {
    //   const data = e.target.result;
    //   const workbook = XLSX.read(data, { type: "binary" });
    //   const jsonData = XLSX.utils.sheet_to_json(
    //     workbook.Sheets[workbook.SheetNames[0]]
    //   );

    //   console.log(jsonData);
    //   store.jsonData = jsonData;
    //   console.log(workbook);
    // };
    // reader.readAsBinaryString(file);
    useTests.uploadTestFile();
  } else {
    useTests.uploadFile();
  }
}

const deleteGroup = () => {
  useSocket.deleteData(store.deleteId);
};

onMounted(() => {
  useTests = useTestStore();
  useSocket = useSocketStore();
  isMount.value = true;
  isLoading.store.pagination.tests = 1;
  useTests.getAllData();
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
