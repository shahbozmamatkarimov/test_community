<template>
  <main class="-mb-5">
    <div class="flex gap-5">
      <section
        :class="isLoading.store.isOpenSidebar ? 'hideSidebar' : ''"
        class="groupList min-w-[400px] pt-7 bg-gray-800 rounded-lg"
      >
        <div>
          <div class="flex justify-between px-4">
            <h1
              class="text-2xl z-20 sticky -top-5 py-4 -mt-7 leading-7 font-medium"
            >
              Guruhlar
            </h1>
            <input
              @input="(e) => inputSelectGroup(e)"
              class="-mt-3 px-3 h-7"
              type="search"
              placeholder="Qidirish..."
            />
          </div>
          <div
            v-if="isLoading.isLoadingType('getAllData/groups')"
            class="animate-pulse h-[calc(100vh_-_170px)] overflow-y-auto"
          >
            <p
              v-for="i in 10"
              class="h-14 border-b border-gray-800 bg-gray-900 rounded-xl"
            ></p>
          </div>
          <div
            v-else-if="!isLoading.store.allData?.groups?.length"
            class="flex items-center justify-center h-[calc(100vh_-_183px)]"
          >
            <Nodata @click="$router.push('/groups')">Guruh</Nodata>
          </div>
          <div
            v-else
            class="h-[calc(100vh_-_212px)] max-h-fit overflow-hidden overflow-y-auto"
          >
            <div
              @click="() => getGroupTests(i.id)"
              v-for="(i, index) in isLoading.store.allData?.groups"
              :key="i"
              :class="
                isLoading.search.search.tests == i.id
                  ? 'bg-gray-900 hover:bg-gray-900'
                  : ''
              "
              class="hover:bg-[#027DFC1A] cursor-pointer p-5 rounded-xl"
            >
              <div class="flex justify-between">
                <div class="flex w-[100%] leading-4">
                  <img
                    v-if="checkDate(i.tests[0]?.createdAt)"
                    class="mr-1 inline"
                    src="@/assets/svg/check.svg"
                    alt=""
                  />
                  <p
                    v-else
                    class="min-h-[16px] min-w-[16px] max-h-[16px] max-w-[16px] border leading-4 inline-block -mb-1 mr-1 border-[#027DFC] rounded-full"
                  ></p>
                  <p
                    class="text-[#027DFC] font-medium leading-4 text-sm w-full whitespace-nowrap truncate"
                  >
                    <span class="!text-[#027DFC]">#{{ i.id }}:</span>
                    <span class="pl-1">{{ i.name }}</span>
                  </p>
                  <p class="flex items-start"><i class='bx bx-message-rounded'></i><span class="text-[10px] -mt-0.5">21</span></p>
                </div>
              </div>
              <div
                v-if="i.tests?.length"
                class="flex justify-between items-center text-sm leading-[14px] mt-3"
              >
                <div class="flex gap-[6px]">
                  <p>
                    {{ getData(i.tests[0]?.start_time) }}
                    <i class="bx bx-arrow-back rotate-180"></i>
                    {{ getData(i.tests[0]?.end_time) }}
                  </p>
                </div>
                <div v-for="i in checkStatus(i.tests[0])">
                  <button
                    v-if="i == 'PENDING'"
                    class="bg-[#D6D5DA] rounded-[14px] text-xs !text-[#000] px-5 py-[6px] leading-[14px]"
                  >
                    PENDING
                  </button>
                  <button
                    v-else-if="i == 'IN_PROGRESS'"
                    class="bg-[#F2E1BA] rounded-[14px] text-xs !text-[#EEB627] px-5 py-[6px] leading-[14px]"
                  >
                    IN_PROGRESS
                  </button>
                  <button
                    v-else="i == 'FINISHED'"
                    class="bg-[#C9E7C4] rounded-[14px] text-xs !text-[#63CC49] px-5 py-[6px] leading-[14px]"
                  >
                    FINISHED
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SelectPagination
          v-show="!isLoading.isLoadingType('getAllData/groups')"
          class="my-1"
        />
      </section>

      <section class="w-full">
        <div
          v-if="!isLoading.search.search.tests"
          class="bg-gray-800 flex items-center justify-center rounded-lg h-[calc(100vh_-_108px)]"
        >
        {{ isEmptyTests() }}
          <p class="bg-gray-700 rounded-full px-5">
            Testlarni ko'rish uchun biror guruhni tanlang
          </p>
        </div>
        <div
          v-else
          v-if="!isLoading?.isLoadingType('caseNote')"
          class="bg-gray-800 rounded-lg px-5 space-y-[10px]"
        >
          <div
            class="flex items-end justify-between md:gap-10 gap-5 pb-2 pt-2.5"
          >
            <button
              @click="isLoading.store.isOpenSidebar = false"
              class="flex gap-2 items-center backButton"
            >
              <img
                class="mb-0.5 lg:block hidden"
                src="@/assets/svg/back.svg"
                alt=""
              />
              <i
                class="bx bx-menu-alt-left text-2xl lg:hidden md:ml-0 md:-mr-5 -mr-2"
              ></i>
              <p class="font-medium lg:block hidden">Guruhlar</p>
            </button>
            <h1 class="sm:text-2xl text-lg leading-7 font-medium">Testlar</h1>
            <input
              @input="(e) => inputSelectGroup(e, 'test_search')"
              class="px-3 h-7 w-full"
              type="search"
              placeholder="Qidirish..."
            />
            <button
              @click="
                isLoading.modal.create = true;
                isLoading.modal.edit = false;
              "
              class="bg-[#027DFC] py-1.5 px-5 -mb-1 text-sm whitespace-nowrap rounded-full"
            >
              <i class="bx bx-plus add_test_plus"></i>
              <span class="add_test">Test qo'shish</span>
            </button>
          </div>
          <div
            v-if="isLoading.isLoadingType('getAllData/tests')"
            class="space-y-[10px] animate-pulse h-[calc(100vh_-_167px)] overflow-y-auto"
          >
            <div v-for="i in 3" class="h-[195px] bg-gray-900 rounded-xl"></div>
          </div>
          <div
            v-else-if="!isLoading.store.allData.tests?.length"
            class="flex items-center justify-center h-[calc(100vh_-_168px)]"
          >
            <Nodata>Test</Nodata>
          </div>
          <div
            v-else
            class="h-[calc(100vh_-_222px)] max-h-fit space-y-[10px] overflow-hidden overflow-y-auto"
          >
            <div
              v-for="i in isLoading.store.allData.tests"
              :key="i"
              class="bg-gray-900 rounded-xl p-5"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-[10px]">
                  <div
                    @click="() => getFileInfo(i.id)"
                    class="flex items-center gap-[10px] cursor-pointer hover:scale-105 duration-300"
                  >
                    <img
                      class="min-h-[30px] max-h-[30px] min-w-[30px] max-w-[30px] object-cover rounded-full"
                      src="@/assets/images/excel.png"
                      alt=""
                    />
                    <p class="font-medium hover:underline">{{ i.title }}</p>
                  </div>
                </div>
                <p class="space-x-2">
                  <i
                    @click="() => useTests.getDataById(i.id)"
                    class="bx bx-edit cursor-pointer"
                  ></i>
                  <i
                    @click="
                      () => {
                        isLoading.modal.delete = true;
                        useTests.store.id = i.id;
                      }
                    "
                    class="bx bx-trash cursor-pointer"
                  ></i>
                </p>
              </div>
              <ul class="list-disc ml-7 text-sm leading-[19px]">
                <li v-if="i.description">
                  <pre class="max-w-[80%] pt-2 whitespace-pre-wrap">{{
                    i.description
                  }}</pre>
                </li>
                <li class="-mb-3">
                  Vaqt tugagach qabul qilinmasin
                  <el-switch
                    @click="useTests.updateStatus(i.id, 'is_time', i.is_time)"
                    v-model="i.is_time"
                    class="ml-2"
                    style="
                      --el-switch-on-color: #027dfc;
                      --el-switch-off-color: #027dfc;
                    "
                  />
                </li>
                <li>
                  Menga xabar berilsin
                  <el-switch
                    @click="
                      useTests.updateStatus(i.id, 'is_message', i.is_message)
                    "
                    v-model="i.is_message"
                    class="ml-2"
                    style="
                      --el-switch-on-color: #027dfc;
                      --el-switch-off-color: #027dfc;
                    "
                  />
                </li>
                <li class="flex justify-between items-center pt-5">
                  <p>
                    {{ getData(i.start_time) }}
                    <i class="bx bx-arrow-back rotate-180"></i>
                    {{ getData(i.end_time) }}
                  </p>
                  <div v-for="i in checkStatus(i)">
                    <button
                      v-if="i == 'PENDING'"
                      class="bg-[#D6D5DA] rounded-[14px] text-xs !text-[#000] px-5 py-[6px] leading-[14px]"
                    >
                      PENDING
                    </button>
                    <button
                      v-else-if="i == 'IN_PROGRESS'"
                      class="bg-[#F2E1BA] rounded-[14px] text-xs !text-[#EEB627] px-5 py-[6px] leading-[14px]"
                    >
                      IN_PROGRESS
                    </button>
                    <button
                      v-else="i == 'FINISHED'"
                      class="bg-[#C9E7C4] rounded-[14px] text-xs !text-[#63CC49] px-5 py-[6px] leading-[14px]"
                    >
                      FINISHED
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <Pagination
            v-show="!isLoading.isLoadingType('getAllData/tests')"
            class="h-11 mb-1"
          />
        </div>
      </section>
    </div>

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
          v-else
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
                  v-if="!store.sendAllGroups && !isLoading.modal.edit"
                  v-model="useTests.create.group_id"
                  @input="(e) => inputSelectGroup(e)"
                  multiple
                  filterable
                  :class="store.sendAllGroups ? 'opacity-50' : ''"
                  class="w-full test_select_group"
                  placeholder="Guruhni tanlang"
                >
                  <el-option
                    class="options"
                    v-for="(item, index) in isLoading.store.allData?.groups"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                  <SelectPagination />
                </el-select>
                <div v-else v-if="!isLoading.modal.edit">
                  <input
                    type="text"
                    disabled
                    class="w-full opacity-25 !bg-gray-600"
                  />
                </div>
                <div
                  v-if="!store.sendAllGroups"
                  class="flex flex-wrap justify-start"
                >
                  <div v-for="item in isLoading.store.allData?.groups">
                    <div v-for="(i, index) in useTests.create.group_id">
                      <div
                        v-if="item.id == i"
                        class="flex items-center justify-between border mr-2 rounded-full py-0.5 px-2"
                      >
                        <p>
                          {{ item.name }}
                        </p>
                        <img
                          @click="useTests.create.group_id?.splice(index, 1)"
                          class="cursor-pointer -mr-1 ml-1 hover:bg-[#027ffc3a] rounded-full p-1"
                          src="@/assets/svg/deleteX.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <el-checkbox
                  v-if="!isLoading.modal.edit"
                  class="-mt-3"
                  @click="handleSendAllGroups"
                  v-model="store.sendAllGroups"
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
                <el-checkbox
                  class="-mt-3"
                  @click="useTests.create.is_message = false"
                  v-model="useTests.create.is_time"
                  ><p class="text-black ml-1 text-[16px]">
                    Vaqt tugagach test qabul qilinmasin
                  </p></el-checkbox
                >
                <el-checkbox
                  class="-mt-6"
                  @click="useTests.create.is_time = false"
                  v-model="useTests.create.is_message"
                  ><p class="text-black ml-1 text-[16px]">
                    Menga xabar berilsin
                  </p></el-checkbox
                >
                <el-input
                  v-model="useTests.create.description"
                  :autosize="{ minRows: 2, maxRows: 4 }"
                  type="textarea"
                  placeholder="Test haqida"
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
          Davom etish
          <Loading />
        </button>
      </form>
    </el-dialog>

    <!---------------- upload excel file ----------------------->
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
          <span>Testlar</span>
        </h1>
        <img
          @click="useTests.store.uploadModal = false"
          class="hover:bg-[#027DFC1A] p-2 rounded-lg cursor-pointer"
          src="@/assets/svg/x.svg"
          alt="x"
        />
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="mt-10">
          <div
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
        </div>
        <div>
          <button
            :type="isLoading.isLoadingType('modal') ? 'button' : 'submit'"
            class="h-[40px] overflow-hidden w-full bg-[#027DFC] mt-8 text-sm leading-4 font-medium text-white rounded-full"
            v-loading="isLoading.isLoadingType('modal')"
          >
            Davom etish
            <Loading />
          </button>
          <button
            type="button"
            @click="
              useTests.store.uploadModal = false;
              isLoading.modal.create = true;
            "
            class="h-[40px] rounded-full mt-4 w-full"
          >
            Orqaga qaytish
          </button>
        </div>
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

    <!---------------- upload file preview ----------------------->
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
            src="@/assets/images/excel.png"
            alt=""
          />
          {{ useTests.create.title }}
        </h1>
        <img
          @click="useTests.store.uploadedFilesModal = false"
          class="hover:bg-[#027DFC1A] p-2 rounded-lg cursor-pointer"
          src="@/assets/svg/x.svg"
          alt="x"
        />
      </div>
      <div
        v-if="isLoading.isLoadingType('getFileInfo')"
        class="h-[81vh] mx-16 -mb-[1vh] overflow-hidden overflow-y-auto space-y-2"
      >
        <div
          v-for="i in 3"
          class="h-[220px] rounded-2xl animate-pulse bg-gray-900 border"
        ></div>
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

      <div
        v-if="!store.getFileInfo"
        class="flex justify-between items-center py-4 px-16"
      >
        <button
          @click="useTests.store.uploadedFilesModal = false"
          class="h-[40px] rounded-full border whitespace-nowrap px-5"
        >
          Bekor qilish
        </button>
        <div class="flex gap-5">
          <button
            @click="removefile"
            :type="isLoading.isLoadingType('modal') ? 'button' : 'submit'"
            class="h-[40px] overflow-hidden px-5 bg-[#027DFC] hover:bg-red-600 text-sm leading-4 font-medium text-white rounded-full"
            v-loading="isLoading.isLoadingType('modal')"
          >
            Faylni o'chirish
            <Loading />
          </button>
          <button
            @click="handleSubmit()"
            :type="isLoading.isLoadingType('modal') ? 'button' : 'submit'"
            class="h-[40px] overflow-hidden px-5 bg-[#027DFC] text-sm leading-4 font-medium text-white rounded-full"
            v-loading="isLoading.isLoadingType('modal')"
          >
            Testni yuklash
            <Loading />
          </button>
        </div>
      </div>
    </el-dialog>
  </main>
</template>

<script setup>
import axios from "axios";
import { useSocketStore, useTestStore, useLoadingStore } from "@/store";
import * as XLSX from 'xlsx/xlsx.mjs';

const runtime = useRuntimeConfig();
const baseUrl = runtime.public.baseURL;
let useSocket;
let useTests;
const isLoading = useLoadingStore();
const isMount = ref(false);
isLoading.store.pageName = "tests";
isLoading.search.searchType.tests = "";
isLoading.search.search.tests = "";
isLoading.addLoading("getAllData/groups");
isLoading.search.searchType.groups = "name";

const store = reactive({
  edit: false,
  upload: false,
  previewImage: [],
  excelModal: false,
  excelInfoModal: false,
  sliderStep: 0,
  excelText: "",
  jsonData: [],
  isConfirm: false,
  groupTestStep: 1,
  sendAllGroups: false,
  getFileInfo: false,
});

const statusColors = {
  PENDING: ["#D6D5DA", "#000"],
  IN_PROGRESS: ["#F2E1BA", "#EEB627"],
  FINISHED: ["#C9E7C4", "#63CC49"],
};

function getData(date) {
  let data = new Date(date);
  const day = data.getDate() > 9 ? data.getDate() : "0" + data.getDate();
  const month =
    data.getMonth() + 1 > 9 ? data.getMonth() + 1 : "0" + (data.getMonth() + 1);
  const year = String(data.getFullYear());
  return day + "." + month + "." + year;
}

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

function handleSendAllGroups() {
  if (store.sendAllGroups) {
    useTests.creae.group_id = "All";
  } else {
    useTests.creae.group_id = [];
  }
}

function checkStatus(test) {
  console.log(test);
  const nowDate = new Date().getTime();
  const start_time = new Date(test.start_time).getTime();
  const end_time = new Date(test.end_time).getTime();
  console.log(start_time, end_time);

  if (nowDate > end_time) {
    return ["FINISHED"];
  } else if (nowDate > start_time && nowDate < end_time) {
    return ["IN_PROGRESS"];
  } else {
    return ["PENDING"];
  }
}

function isEmptyTests() {
  isLoading.store.isOpenSidebar = false;
}

function getFileInfo(id) {
  console.log(id);
  isLoading.addLoading("getFileInfo");
  axios
    .post(baseUrl + "/api/tests/file/" + id, null, {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res);
      useTests.store.uploadedFilesModal = true;
      store.getFileInfo = true;
      useTests.readExcelFileFromServer(res.data.data);
    })
    .catch((err) => {
      isLoading.removeLoading("getFileInfo");
      console.log(err);
    });
}

let old_id = "";
function getGroupTests(id) {
  if (old_id == id) {
    return;
  }
  isLoading.store.isOpenSidebar = true;
  isLoading.store.pagination.tests = 1;
  isLoading.store.paginationStep = 0;
  isLoading.search.search.tests = +id;
  console.log(isLoading.search.search.tests, isLoading.search.searchType.tests);
  useTests.getAllData("searching");
  useTests.create.group_id = [id];
  old_id = id;
}

function localExcelPreview() {
  // -------------------------- local excel reader ------------------------
  store.jsonData = [];
  const file = useTests.store.files[0].raw;
  const reader = new FileReader();
  reader.onload = async (e) => {
    const data = e.target.result;
    const workbook = XLSX.read(data, { type: "binary" });
    const jsonData = XLSX.utils.sheet_to_json(
      workbook.Sheets[workbook.SheetNames[0]]
    );
    useTests.store.jsonData = jsonData;
    console.log(jsonData);
    console.log(workbook);
    console.log(file);
    useTests.create.test_count = jsonData?.length;
    useTests.create.title = file.name;
    useTests.create.variants = Object.keys(jsonData[0]).splice(1).join("");
  };
  reader.readAsBinaryString(file);
}

function checkDate(date) {
  const nowDate = new Date().getDate();
  date = new Date(date).getDate();
  console.log(nowDate, date);
  if (nowDate == date) return true;
  return false;
}

function removefile() {
  useTests.store.uploadedFilesModal = false;
  useTests.store.files = [];
  handleSubmit();
}

// api
function handleSubmit() {
  store.getFileInfo = false;
  if (isLoading.modal.edit) {
    useTests.updateData();
  } else if (!useTests.store.files?.length) {
    useTests.store.uploadModal = true;
  } else if (!store.isConfirm) {
    localExcelPreview();
    useTests.store.uploadedFilesModal = true;
    store.isConfirm = true;
  } else {
    useTests.createData();
  }
}

onMounted(() => {
  isLoading.search.search.tests = "";
  useSocket = useSocketStore();
  useTests = useTestStore();
  isMount.value = true;
  useSocket.getAllData("searching");
});
</script>

<style lang="scss" scoped></style>
