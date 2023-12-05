<template>
  <main>
    <section
      class="bg-gray-900 student flex items-center justify-center w-full"
    >
      <div
        class="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 sm:p-6 sm:rounded-2xl"
      >
        <!-- Navigation -->
        <div
          class="bg-gray-900 px-2 lg:px-4 py-2 lg:py-10 sm:rounded-2xl flex lg:flex-col justify-between"
        >
          <nav
            class="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2"
          >
            <a
              @click="() => todayMonth('all')"
              :class="
                useStudent?.store?.studentStepFilter == 1
                  ? 'bg-[#027DFC1A]'
                  : ''
              "
              class="text-white/50 p-4 inline-flex justify-center rounded-lg hover:bg-[#027ffc3a] hover:text-white smooth-hover"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                />
              </svg>
            </a>
            <a
              @click="() => todayMonth('not_payed')"
              :class="
                useStudent?.store?.studentStepFilter == 3
                  ? 'bg-[#027DFC1A]'
                  : ''
              "
              class="text-white/50 p-4 inline-flex justify-center rounded-lg hover:bg-[#027ffc3a] hover:text-white smooth-hover"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: red; transform: ; msfilter: "
              >
                <path
                  d="M15.999 8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245.298-5 1.592-5 4.429 0 2.706 2.666 4.113 5 4.43v4.97c-1.448-.251-3-1.024-3-2.4h-2c0 2.589 2.425 4.119 5 4.436V22h2v-2.07c2.245-.298 5-1.593 5-4.43s-2.755-4.131-5-4.429V6.1c1.33.239 3 .941 3 2.4zm-8 0c0-1.459 1.67-2.161 3-2.4v4.799c-1.371-.253-3-1.002-3-2.399zm8 7c0 1.459-1.67 2.161-3 2.4v-4.8c1.33.239 3 .941 3 2.4z"
                ></path>
              </svg>
            </a>
            <a
              @click="() => todayMonth('payed')"
              :class="
                useStudent?.store?.studentStepFilter == 4
                  ? 'bg-[#027DFC1A]'
                  : ''
              "
              class="text-white/50 p-4 inline-flex justify-center rounded-lg hover:bg-[#027ffc3a] hover:text-white smooth-hover"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: green; transform: ; msfilter: "
              >
                <path
                  d="M15.999 8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245.298-5 1.592-5 4.429 0 2.706 2.666 4.113 5 4.43v4.97c-1.448-.251-3-1.024-3-2.4h-2c0 2.589 2.425 4.119 5 4.436V22h2v-2.07c2.245-.298 5-1.593 5-4.43s-2.755-4.131-5-4.429V6.1c1.33.239 3 .941 3 2.4zm-8 0c0-1.459 1.67-2.161 3-2.4v4.799c-1.371-.253-3-1.002-3-2.399zm8 7c0 1.459-1.67 2.161-3 2.4v-4.8c1.33.239 3 .941 3 2.4z"
                ></path>
              </svg>
            </a>
          </nav>
          <div
            class="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2"
          >
            <a
              class="text-white/50 p-4 inline-flex justify-center rounded-lg hover:bg-[#027ffc3a] hover:text-white smooth-hover"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <!-- Content -->
        <div class="flex-1 px-2 sm:px-0 min-h-[calc(100vh_-_305px)]">
          <div
            class="flex optional1 items-end justify-between lg:gap-10 gap-5 pb-2 pt-2.5"
          >
            <el-select
              v-if="isMount"
              class="w-60"
              id="selectgroup"
              @input="(e) => inputSelectGroup(e)"
              v-model="useStudent.store.filterByGroup"
              filterable
              multiple
              placeholder="Guruhni tanlang"
              required
            >
              <el-option
                @click="() => changeGroupIndex(index)"
                class="options"
                v-for="(item, index) in isLoading.store.allData?.groups"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
              <SelectPagination />
            </el-select>
            <button
              @click="
                useStudent.store.addStudentModal = true;
                isLoading.modal.edit = false;
              "
              class="bg-[#027DFC] px-5 sm:h-10 h-7 pt-0.5 text-sm whitespace-nowrap rounded-full"
            >
              <i class="bx bx-plus add_test_plus"></i> <slot></slot>
              <span class="add_test">O'quvchi qo'shish</span>
            </button>
          </div>
          <div class="flex flex-wrap mt-2 gap-2">
            <div
              v-for="(i, index) in useStudent?.store?.filterByGroupIndex"
              class="flex border justify-start py-0.5 px-2 rounded-full"
            >
              <p>
                {{ isLoading.store.allData?.groups[i].name }}
              </p>
              <img
                @click="clearFilteredGroups(index)"
                class="cursor-pointer -mr-1 ml-1 hover:bg-[#027ffc3a] bg-[#027DFC1A] rounded-full p-1"
                src="@/assets/svg/deleteX.svg"
                alt=""
              />
            </div>
          </div>
          <!-- <div class="inline-flex items-center space-x-2">
              <a
                class="bg-gray-900 text-white/50 p-2 rounded-lg hover:text-white smooth-hover"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </a>
              <a
                class="bg-gray-900 text-white/50 p-2 rounded-lg hover:text-white smooth-hover"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </a>
            </div> -->
          <div
            class="students mb-10 sm:mb-0 mt-10 grid gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5"
          >
            <div
              v-if="isLoading.isLoadingType('getAllData/students')"
              v-for="i in 10"
              :key="i"
              class="relative animate-pulse group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-lg hover:bg-[#027ffc3a] hover:smooth-hover"
            >
              <img
                class="w-20 h-20 object-cover object-center rounded-full"
                src="@/assets/images/userplaceholder.png"
                alt="art"
              />
              <h4 class="text-white text-2xl font-bold capitalize text-center">
                loading...
              </h4>
              <p class="text-white/50">0 ball</p>
              <p
                class="absolute top-2 text-white/20 inline-flex items-center text-xs"
              >
                False
                <span
                  class="ml-2 w-2 h-2 block bg-red-500 rounded-full group-hover:animate-pulse"
                ></span>
              </p>
            </div>
            <div
              v-if="isLoading.store.allData?.students?.length"
              v-for="i in isLoading.store.allData?.students"
              :key="i.id"
              class="relative userInfo group bg-gray-900 py-20 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-lg hover:bg-[#027ffc3a] hover:smooth-hover"
            >
              <img
                v-if="i.image"
                class="w-20 h-20 object-cover object-center rounded-full"
                :src="i.image"
                :alt="i.username"
              />
              <img
                v-else
                class="w-20 h-20 object-cover object-center rounded-full"
                src="@/assets/images/userplaceholder.png"
                :alt="i?.username"
              />
              <div class="w-[90%] overflow-hidden">
                <h4
                  class="text-white md:text-[16px] sm:text-sm text-xs line-clamp-2 w-full break-words font-bold capitalize text-center"
                >
                  {{ i?.username }}
                </h4>
              </div>
              <div class="flex items-center gap-4">
                <img class="h-6 w-6" src="@/assets/svg/phone.svg" alt="" />
                <img class="h-6 w-6" src="@/assets/svg/telegram.svg" alt="" />
              </div>
              <p
                class="flex flex-wrap items-center justify-center line-clamp-2 md:text-[16px] sm:text-sm text-xs absolute bottom-5 text-green-500"
              >
                <span class="bg-gray-800 rounded-lg px-2 py-1">{{
                  addMonth(i.start_date)
                }}</span
                ><span
                  class="bg-red-500 ml-2 whitespace-nowrap text-white rounded-lg px-2 py-1"
                  v-if="getDays(i?.start_date)"
                  >{{ getDays(i?.start_date) }} kun</span
                >
              </p>
              <p
                class="absolute top-2 text-white/20 inline-flex items-center text-xs"
              >
                False
                <span
                  class="ml-2 w-2 h-2 block bg-red-500 rounded-full group-hover:animate-pulse"
                ></span>
              </p>
              <el-dropdown
                placement="bottom-end"
                class="!absolute top-2 right-4 dropdown"
              >
                <img
                  class="cursor-pointer -mt-1"
                  src="@/assets/svg/threedot.svg"
                  alt=""
                />
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item
                      @click="() => useStudent.getDataById(i.id, 'getGroup')"
                    >
                      <i class="bx bx-edit"></i>Tahrirlash
                    </el-dropdown-item>
                    <el-dropdown-item
                      @click="
                        () => {
                          isLoading.modal.delete = true;
                          useStudent.store.id = i.id;
                        }
                      "
                    >
                      <i class="bx bx-trash"></i>O'chirish
                    </el-dropdown-item>
                    <el-dropdown-item>
                      <img
                        class="object-contain"
                        src="@/assets/svg/blockuser.svg"
                        alt=""
                      />
                      Bloklash
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
            <div
              v-else-if="!isLoading.isLoadingType('getAllData/students')"
              class="min-w-full col-span-4"
            >
              <Nodata>O'quvchi</Nodata>
            </div>
          </div>
          <div
            class="relative hidden overflow-x-auto shadow-md sm:rounded-lg border-t min-h-[80vh]"
          >
            <div class="flex items-center justify-between pb-4">
              <div>
                <button
                  id="dropdownActionButton"
                  data-dropdown-toggle="dropdownAction"
                  class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-[#027ffc3a] dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button"
                >
                  <span class="sr-only">Action button</span>
                  Action
                  <svg
                    class="w-2.5 h-2.5 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <!-- Dropdown menu -->
                <div
                  id="dropdownAction"
                  class="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownActionButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Reward</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Promote</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >Activate account</a
                      >
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >Delete User</a
                    >
                  </div>
                </div>
              </div>
              <label for="table-search" class="sr-only">Search</label>
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search-users"
                  class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for users"
                />
              </div>
            </div>
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-all-search" class="sr-only"
                        >checkbox</label
                      >
                    </div>
                  </th>
                  <th scope="col" class="px-6 py-3">Name</th>
                  <th scope="col" class="px-6 py-3">Position</th>
                  <th scope="col" class="px-6 py-3">Status</th>
                  <th scope="col" class="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-1" class="sr-only"
                        >checkbox</label
                      >
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <!-- <img
                      class="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Jese image"
                    /> -->
                    <div class="pl-3">
                      <div class="text-base font-semibold">Neil Sims</div>
                      <div class="font-normal text-gray-500">
                        neil.sims@flowbite.com
                      </div>
                    </div>
                  </th>
                  <td class="px-6 py-4">React Developer</td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">
                      <div
                        class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"
                      ></div>
                      Online
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Edit user</a
                    >
                  </td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-search-2"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-2" class="sr-only"
                        >checkbox</label
                      >
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <!-- <img
                      class="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-3.jpg"
                      alt="Jese image"
                    /> -->
                    <div class="pl-3">
                      <div class="text-base font-semibold">Bonnie Green</div>
                      <div class="font-normal text-gray-500">
                        bonnie@flowbite.com
                      </div>
                    </div>
                  </th>
                  <td class="px-6 py-4">Designer</td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">
                      <div
                        class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"
                      ></div>
                      Online
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Edit user</a
                    >
                  </td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-search-2"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-2" class="sr-only"
                        >checkbox</label
                      >
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <!-- <img
                      class="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-2.jpg"
                      alt="Jese image"
                    /> -->
                    <div class="pl-3">
                      <div class="text-base font-semibold">Jese Leos</div>
                      <div class="font-normal text-gray-500">
                        jese@flowbite.com
                      </div>
                    </div>
                  </th>
                  <td class="px-6 py-4">Vue JS Developer</td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">
                      <div
                        class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"
                      ></div>
                      Online
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Edit user</a
                    >
                  </td>
                </tr>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-search-2"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-2" class="sr-only"
                        >checkbox</label
                      >
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <!-- <img
                      class="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-5.jpg"
                      alt="Jese image"
                    /> -->
                    <div class="pl-3">
                      <div class="text-base font-semibold">Thomas Lean</div>
                      <div class="font-normal text-gray-500">
                        thomes@flowbite.com
                      </div>
                    </div>
                  </th>
                  <td class="px-6 py-4">UI/UX Engineer</td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">
                      <div
                        class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"
                      ></div>
                      Online
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Edit user</a
                    >
                  </td>
                </tr>
                <tr
                  class="bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-search-3"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-table-search-3" class="sr-only"
                        >checkbox</label
                      >
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <!-- <img
                      class="w-10 h-10 rounded-full"
                      src="/docs/images/people/profile-picture-4.jpg"
                      alt="Jese image"
                    /> -->
                    <div class="pl-3">
                      <div class="text-base font-semibold">
                        Leslie Livingston
                      </div>
                      <div class="font-normal text-gray-500">
                        leslie@flowbite.com
                      </div>
                    </div>
                  </th>
                  <td class="px-6 py-4">SEO Specialist</td>
                  <td class="px-6 py-4">
                    <div class="flex items-center">
                      <div
                        class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"
                      ></div>
                      Offline
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >Edit user</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <Pagination />

    <!------------------------- create and edit student ------------------------------->
    <el-dialog
      v-if="isMount"
      v-model="isLoading.modal.create"
      style="border-radius: 16px"
      width="500"
      class="rounded-2xl p-10 min-w-[350px] h-[240]"
      align-center
      close-icon="false"
    >
      <div class="flex justify-between items-center w-full">
        <h1
          v-if="!isLoading?.modal.edit"
          class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
        >
          <i class="bx bxs-group"></i>
          O'quvchi qo'shish
        </h1>
        <h1
          v-else
          class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
        >
          <i class="bx bxs-group"></i>
          O'quvchini tahrirlash
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
                  v-model="useStudent.create.username"
                  type="text"
                  class="w-full"
                  placeholder="F.I.O"
                  required
                />
                <div v-if="!isLoading.modal.edit">
                  <input
                    v-model="useStudent.create.password"
                    type="text"
                    class="w-full"
                    placeholder="Parolni kiriting"
                    required
                  />
                </div>
                <div
                  v-else
                  v-if="useStudent.store.isChangePassword"
                  class="flex justify-between items-center gap-2"
                >
                  <input
                    v-model="useStudent.create.password"
                    type="text"
                    class="w-full"
                    placeholder="Parolni kiriting"
                    required
                  />
                  <img
                    v-if="isLoading.modal.edit"
                    @click="useStudent.store.isChangePassword = false"
                    class="hover:bg-[#027DFC1A] p-1 min-w-[20px] max-h-[20px] rounded-full border cursor-pointer"
                    src="@/assets/svg/x.svg"
                    alt="x"
                  />
                </div>
                <div
                  v-if="
                    !useStudent.store.isChangePassword && isLoading.modal.edit
                  "
                  class="flex justify-between items-center px-4 h-10 rounded-full border"
                >
                  <h1>Parolni o'zgartirish</h1>
                  <button
                    @click="useStudent.store.isChangePassword = true"
                    type="button"
                    class="bx bx-edit"
                  ></button>
                </div>
                <div
                  v-if="isLoading.modal.edit && useStudent.store.isChangeGroup"
                  class="flex justify-between items-center px-4 h-10 rounded-full border"
                >
                  <h1>{{ useStudent.store.groupInfo.name }}</h1>
                  <button
                    @click="useStudent.store.isChangeGroup = false"
                    type="button"
                    class="bx bx-edit"
                  ></button>
                </div>
                <div
                  v-if="
                    !useStudent.store.isChangeGroup || !isLoading.modal.edit
                  "
                  class="flex justify-between items-center gap-2"
                >
                  <el-select
                    class="w-full"
                    id="selectgroup"
                    @input="(e) => inputSelectGroup(e)"
                    v-model="useStudent.create.group_id"
                    filterable
                    placeholder="Guruhni tanlang"
                    required
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
                  <img
                    v-if="isLoading.modal.edit"
                    @click="useStudent.store.isChangeGroup = true"
                    class="hover:bg-[#027DFC1A] p-1 min-w-[20px] max-h-[20px] rounded-full border cursor-pointer"
                    src="@/assets/svg/x.svg"
                    alt="x"
                  />
                </div>
                <input
                  v-model="useStudent.create.student_id"
                  type="number"
                  class="w-full max-h-[40px]"
                  placeholder="O'quvchi id sini kiriting"
                  required
                />
                <div v-if="!useStudent.store.isTodayDate" classs="min-w-full">
                  <el-date-picker
                    id="startdate"
                    v-model="useStudent.create.start_date"
                    type="date"
                    class="min-w-full -mb-3 min-h-[40px] bg-transparent border-0"
                    placeholder="Sanani tanlang"
                    format="YYYY/MM/DD"
                    required
                  />
                </div>
                <el-checkbox v-model="useStudent.store.isTodayDate"
                  ><p class="text-black ml-1 text-[16px]">
                    Bugungi sana
                  </p></el-checkbox
                >
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
          O'quvchini tahrirlash
          <Loading />
        </button>
        <button
          v-else
          :type="isLoading.isLoadingType('modal') ? 'button' : 'submit'"
          class="h-[40px] overflow-hidden w-full bg-[#027DFC] mt-8 text-sm leading-4 font-medium text-white rounded-full"
          v-loading="isLoading.isLoadingType('modal')"
        >
          O'quvchini qo'shish
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
          O'quvchini o'chirish
        </h1>
        <img
          @click="isLoading.modal.delete = false"
          class="hover:bg-[#027DFC1A] p-2 rounded-lg cursor-pointer"
          src="@/assets/svg/x.svg"
          alt="x"
        />
      </div>
      <p class="mt-12 text-[16px] leading-[19px]">
        Haqiqatan ham bu o'quvchini o'chirib tashlamoqchimisiz?
      </p>
      <div>
        <button
          @click="useStudent.deleteData()"
          class="bg-[#027DFC] h-[40px] rounded-full overflow-hidden text-white mt-10 w-full"
          v-loading="isLoading.isLoadingType('modal')"
        >
          O'quvchini o'chirish
        </button>
        <button
          @click="isLoading.modal.delete = false"
          class="h-[40px] rounded-[10px] mt-4 w-full"
        >
          Bekor qilish
        </button>
      </div>
    </el-dialog>

    <!---------------- filter group modal ----------------------->
    <el-dialog
      v-if="isMount"
      v-model="useStudent.store.addStudentModal"
      width="500"
      style="border-radius: 16px"
      class="rounded-2xl p-10 mx-auto"
      :class="
        useStudent.store.addStudentStep == 3
          ? 'min-w-[100vw] min-h-[100vh]'
          : 'max-w-fit min-w-[400px]'
      "
      align-center
      close-icon="false"
    >
      <div v-if="useStudent.store.addStudentStep == 1">
        <div class="flex justify-between items-center w-full">
          <h1
            class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
          >
            <img
              class="w-6 h-6 !fill-blue-600"
              src="@/assets/svg/delete.svg"
              alt=""
            />
            Fan
          </h1>
          <img
            @click="useStudent.store.addStudentModal = false"
            class="hover:bg-[#027DFC1A] p-2 rounded-lg cursor-pointer"
            src="@/assets/svg/x.svg"
            alt="x"
          />
        </div>
        <p class="mt-4 mb-2 text-[16px] leading-[19px]">Fanni tanlang</p>
        <el-select
          class="w-full"
          placeholder="Fanni tanlang"
          v-model="useStudent.create.subject_id"
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
      <div v-else-if="useStudent.store.addStudentStep == 2">
        <div class="flex justify-between items-center w-full">
          <h1
            class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
          >
            <img
              class="w-6 h-6 !fill-blue-600"
              src="@/assets/svg/delete.svg"
              alt=""
            />
            Hafta kunlari
          </h1>
          <img
            @click="useStudent.store.addStudentModal = false"
            class="hover:bg-[#027DFC1A] p-2 rounded-lg cursor-pointer"
            src="@/assets/svg/x.svg"
            alt="x"
          />
        </div>
        <p class="mt-4 mb-2 text-[16px] leading-[19px]">
          Hafta kunlarini tanlang
        </p>
        <el-select
          class="w-full"
          placeholder="Hafta kunlarini tanlang"
          v-model="useStudent.store.weeks"
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
          v-if="useStudent.store.weeks?.length"
          class="flex flex-wrap justify-start mt-2"
        >
          <div v-for="(item, index) in useStudent.store.weeks">
            <div
              class="flex items-center justify-between border mr-2 rounded-full py-0.5 my-0.5 px-2"
            >
              <p>
                {{ item }}
              </p>
              <img
                @click="useStudent.store.weeks?.splice(index, 1)"
                class="cursor-pointer -mr-1 ml-1 hover:bg-[#027ffc3a] rounded-full p-1"
                src="@/assets/svg/deleteX.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        v-else-if="useStudent.store.addStudentStep == 3"
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
            Guruhlar
          </h1>
          <img
            @click="useStudent.store.addStudentModal = false"
            class="hover:bg-[#027DFC1A] p-2 rounded-lg cursor-pointer"
            src="@/assets/svg/x.svg"
            alt="x"
          />
        </div>
        <div class="flex justify-between">
          <div>
            <p class="mt-4 text-[16px] leading-[19px]">
              Guruhni tanlang
            </p>
            <div class="flex flex-wrap my-2">
              <div
                class="flex items-center justify-between border mr-2 rounded-full py-0.5 my-0.5 px-2"
              >
                <p>VueJS</p>
                <img
                  class="cursor-pointer -mr-1 ml-1 hover:bg-[#027ffc3a] bg-[#027DFC1A] rounded-full p-1"
                  src="@/assets/svg/deleteX.svg"
                  alt=""
                />
              </div>
              <div
                class="flex items-center justify-between border mr-2 rounded-full py-0.5 my-0.5 px-2"
              >
                <p>Dushanba</p>
                <img
                  class="cursor-pointer -mr-1 ml-1 hover:bg-[#027ffc3a] bg-[#027DFC1A] rounded-full p-1"
                  src="@/assets/svg/deleteX.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <button
            @click="useSocket.store.drawer = true"
            class="flex justify-center items-center mt-4 rounded-[10px] hover:bg-[#027ffc3a] bg-[#027DFC1A] min-w-[40px] h-[40px]"
          >
            <img src="@/assets/svg/filter.svg" alt="" />
          </button>
        </div>
        <div class="rounded-xl overflow-hidden overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-blue-600 text-xs uppercase font-medium">
              <tr>
                <th scope="col" class="px-4 py-4 text-left tracking-wider">
                  №
                </th>
                <th scope="col" class="px-4 py-4 text-left tracking-wider">
                  Nomi
                </th>
                <th scope="col" class="px-4 py-4 text-left tracking-wider">
                  O'qituvchi
                </th>
                <th scope="col" class="px-4 py-4 text-left tracking-wider">
                  Sanasi
                </th>
                <th scope="col" class="px-4 py-4 text-left tracking-wider">
                  Vaqti
                </th>
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
                <td v-for="i in 5" :key="i" class="px-4 h-[62px] py-4"></td>
              </tr>
            </tbody>
            <tbody v-else class="bg-gray-800">
              <tr
                v-for="(i, index) in isLoading.store.allData?.groups"
                :key="i.id"
                :class="index % 2 == 0 ? 'bg-black' : 'bg-gray-800'"
                class="bg-opacity-20 hover:bg-[#027ffc3a]"
              >
                <td class="px-4 py-4 w-5">#{{ i.id }}</td>
                <td
                  class="px-4 items-center align-start w-40 whitespace-nowrap"
                >
                  <p class="font-medium truncate w-40">{{ i.name }}</p>
                </td>
                <td class="px-4 items-center align-start whitespace-nowrap">
                  {{ i.teacher?.username }}
                </td>
                <td class="px-4 items-center align-start whitespace-nowrap">
                  {{ getData(i.startDate) }}
                </td>
                <td class="px-4 items-center align-start whitespace-nowrap">
                  {{ i.startTime }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <SelectPagination class="mt-2" />
      </div>
      <div>
        <button
          @click="addStudentStep()"
          class="bg-[#027DFC] h-[40px] rounded-full overflow-hidden text-white mt-10 w-full"
          v-loading="isLoading.isLoadingType('modal')"
        >
          Davom etish
        </button>
        <button
          class="h-[40px] rounded-full overflow-hidden text-white mt-2 w-full"
          v-loading="isLoading.isLoadingType('modal')"
        >
          O'tkazib yuborish
        </button>
      </div>
    </el-dialog>
  </main>
</template>

<script setup>
import {
  useLoadingStore,
  useStudentStore,
  useSocketStore,
  useSubjectsStore,
  useGroupStore,
} from "@/store";
import { useNotification } from "@/composables/notification";
import { constants } from "../../constants/data";
console.log(constants);

let useStudent = null;
let useSocket = null;
let useSubjects = null;
const useGroup = useGroupStore();
const isLoading = useLoadingStore();
const isMount = ref(false);
isLoading.addLoading("getAllData/students");
isLoading.search.searchType.students = "student_id";
isLoading.search.search.students = "";
const { showError } = useNotification();
const runtimeConfig = useRuntimeConfig();
const baseURL = runtimeConfig.public.baseURL;
isLoading.store.pageName = "students";

isLoading.store.searchOptions = [
  {
    value: "student_id",
    label: "id",
  },
  {
    value: "username",
    label: "username  ",
  },
  {
    value: "calendar",
    label: "kalendar",
  },
];

const handleChange = (value) => {
  createModal.group_id = value;
  getOneGroup(createModal.group_id);
};

const filterOption = (input, option) => {
  return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const handleSubmit = () => {
  if (!useStudent.create.group_id) {
    if (isLoading.modal.edit && !useStudent.store.isChangeGroup) {
      showError("Iltimos, guruhni tanlang!");
      return document.getElementById("selectgroup").focus();
    } else if (isLoading.modal.edit && useStudent.store.isChangeGroup) {
      useStudent.create.group_id = useStudent.store.groupInfo?.id;
    } else if (!isLoading.modal.edit) {
      showError("Iltimos, guruhni tanlang!");
      return document.getElementById("selectgroup").focus();
    }
  } else if (!useStudent.create.start_date && !useStudent.store.isTodayDate) {
    showError("Iltimos, sanani tanlang!");
    return document.getElementById("startdate").focus();
  } else if (useStudent.store.isTodayDate) {
    useStudent.create.start_date = new Date();
  }

  if (!isLoading.modal.edit) {
    console.log("create student");
    useStudent.createData();
  } else {
    useStudent.updateData();
  }
};

function addMonth(startDate) {
  let date = new Date();
  // new Date(startDate)?.getFullYear(),
  // new Date(startDate)?.getMonth() + 1,
  // new Date(startDate)?.getDate()
  console.log(startDate);
  startDate = new Date(startDate);
  date.setFullYear(startDate?.getFullYear());
  date.setMonth(startDate?.getMonth() + 1);
  date.setDate(startDate?.getDate());
  console.log(date);

  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let year = new Date(date)?.getFullYear();
  return `${day}.${month}.${year}`;
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

function addStudentStep() {
  useStudent.store.addStudentStep += 1;
  if (useStudent.store.addStudentStep == 4) {
    useStudent.store.addStudentModal = false;
    isLoading.modal.create = true;
  }
}

function todayMonth(isPayed) {
  useStudent.store.isListener = true;
  if (isPayed == "not_payed") {
    useStudent.filter.type = "lte";
    useStudent.store.studentStepFilter = 3;
  } else {
    useStudent.filter.type = "gte";
    useStudent.store.studentStepFilter = 4;
  }
  const time = new Date();
  time.setMonth(time.getMonth() - 1);
  console.log(time);
  useStudent.filter.value = time;
  if (isPayed == "all") {
    useStudent.filter.type = null;
    useStudent.filter.value = null;
    useStudent.store.studentStepFilter = 1;
  }
  useStudent.getAllData();
}

let test = {
  title: "Test",
  description: "Test description",
  products: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
};

function getData(date) {
  let data = new Date(date);
  const day = data.getDate() > 9 ? data.getDate() : "0" + data.getDate();
  const month =
    data.getMonth() + 1 > 9 ? data.getMonth() + 1 : "0" + (data.getMonth() + 1);
  const year = String(data.getFullYear());
  return day + "." + month + "." + year;
}

function getDays(startDate) {
  let date = startDate;
  let nowDate = new Date().getTime() / 1000;
  date = new Date(date).getTime() / 1000;
  nowDate = nowDate - date;
  if (nowDate > 0) {
    const days = secondsToDhms(nowDate);
    if (days > 0) {
      return days;
    }
    return false;
  }

  function secondsToDhms(seconds) {
    seconds = Number(seconds);
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    const dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    const hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    const mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    const sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    // return dDisplay + hDisplay + mDisplay + sDisplay;
    return dDisplay?.slice(0, dDisplay.length - 7) - 30;
  }
}

function changeGroupIndex(index) {
  const isIndex = useStudent.store.filterByGroupIndex.indexOf(index);
  console.log(isIndex);
  if (isIndex == -1) {
    useStudent.store.filterByGroupIndex.push(index);
    console.log(index);
  } else {
    useStudent.store.filterByGroupIndex.splice(isIndex, 1);
  }
  useStudent.filter.groups = useStudent.store.filterByGroup;
  isLoading.addLoading("getAllData/students");
  useStudent.getAllData();
}

function clearFilteredGroups(index) {
  useStudent?.store?.filterByGroupIndex?.splice(index, 1);
  useStudent?.store?.filterByGroup?.splice(index, 1);
  isLoading.addLoading("getAllData/students");
  useStudent.getAllData();
}

function createStudent() {
  useStudent.store.isTodayDate = false;
  isLoading.modal.create = true;
  isLoading.modal.edit = false;
  useStudent.store.isChangeGroup = false;
}

watch(
  () => isLoading.store.calendarModal,
  () => {
    if (isLoading.store.calendarModal == false) {
      isLoading.search.searchType.students = "student_id";
    }
  }
);

onMounted(() => {
  useStudent = useStudentStore();
  useSocket = useSocketStore();
  useSubjects = useSubjectsStore();
  useStudent.getAllData();
  useSubjects.getAllData();
  useSocket.getAllData();
  isMount.value = true;
});
</script>

<style lang="scss" scoped>
.userInfo:hover {
  .actions {
    display: block;
  }
}
</style>
