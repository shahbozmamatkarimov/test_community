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
              class="text-white/50 p-4 inline-flex justify-center rounded-lg hover:bg-gray-800 hover:text-white smooth-hover"
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
            <!-- Active: bg-gray-800 text-white, Not active: text-white/50 -->
            <a
              class="bg-gray-800 text-white p-4 inline-flex justify-center rouded-lg"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 sm:h-6 sm:w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                />
              </svg>
            </a>
            <a
              class="text-white/50 p-4 inline-flex justify-center rounded-lg hover:bg-gray-800 hover:text-white smooth-hover"
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
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </nav>
          <div
            class="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2"
          >
            <a
              class="text-white/50 p-4 inline-flex justify-center rounded-lg hover:bg-gray-800 hover:text-white smooth-hover"
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
            <a
              class="text-white/50 p-4 inline-flex justify-center rounded-lg hover:bg-gray-800 hover:text-white smooth-hover"
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
                  d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <!-- Content -->
        <div class="flex-1 px-2 sm:px-0">
          <div class="flex justify-between items-center">
            <h3 class="text-3xl font-extralight text-white/50">Groups</h3>
            <a-select
              class="max-w-fit mt-1"
              id="group"
              loading
              show-search
              placeholder="Guruhni tanlang"
              :options="store.options"
              :filter-option="filterOption"
              @change="handleChange"
              required
            ></a-select>
            <div class="inline-flex items-center space-x-2">
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
            </div>
          </div>
          <div
            class="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            <div
              @click="() => (store.modalCreate = true)"
              class="group bg-gray-900/30 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-lg hover:bg-gray-700 hover:smooth-hover"
            >
              <a
                class="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </a>
              <button
                class="text-white/50 group-hover:text-white group-hover:smooth-hover text-center"
              >
                Create group
              </button>
            </div>
            <div
              v-if="store.is_Loading"
              class="relative animate-pulse group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-lg hover:bg-gray-700 hover:smooth-hover"
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
              v-else
              v-for="i in store.allProducts"
              :key="i.id"
              class="relative userInfo group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-lg hover:bg-gray-700 hover:smooth-hover"
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
              <h4 class="text-white text-2xl font-bold capitalize text-center">
                {{ i?.username }}
              </h4>
              <p class="text-white/50">80 ball</p>
              <p class="absolute bottom-5 text-green-500">
                <span class="bg-gray-800 rounded-lg px-2 py-1">{{
                  addMonth(i.start_date)
                }}</span
                ><span
                  class="bg-red-500 ml-2 text-white rounded-lg px-2 py-1"
                  v-if="getDays(i?.start_date)"
                  >{{ getDays(i?.start_date) }}</span
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

              <p
                class="absolute hidden top-0 actions right-2 text-white bg-gray-800 rounded-lg space-x-2"
              >
                <i
                  @click="
                    () => {
                      store.modalDelete = true;
                      store.deleteId = i.id;
                    }
                  "
                  class="p-2 hover:bg-gray-600 rounded-l-md bx bx-trash"
                ></i
                ><i
                  @click="() => getOneStudent(i.id)"
                  class="p-2 hover:bg-gray-600 rounded-r-md bx bx-pencil"
                ></i>
              </p>
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
                  class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
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

    <!-- Modal -->
    <section
      v-if="store.modalCreate"
      class="flex justify-center bg-[#ffffff23] top-0 left-0 min-w-full items-center absolute z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 min-h-screen"
    >
      <div class="relative w-full max-w-sm max-h-full">
        <form
          @submit.prevent="handleSubmit"
          class="relative bg-gray-900 rounded-lg shadow dark:bg-gray-700"
        >
          <div
            class="flex items-start justify-between py-4 px-6 border-b rounded-t border-gray-600"
          >
            <h3 class="text-xl font-semibold text-white/50">Add a student</h3>
            <button
              @click="closeModal"
              type="button"
              class="text-white/50 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            >
              <i class="bx bx-x text-2xl"></i>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6 text-white/50">
            <div class="relative z-0 w-full mb-6 group">
              <input
                v-model="createModal.username"
                type="text"
                id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Username</label
              >
            </div>
            <div
              @click="() => (createModal.password = '')"
              v-if="store.edit"
              class="flex gap-2"
            >
              <input
                v-model="store.changePassword"
                type="checkbox"
                id="passChange"
                class="block py-2 w-5 h-5 text-sm bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label for="passChange" class="text-sm cursor-pointer"
                >Passwordni o'zgartirish</label
              >
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <label for="group" class="text-sm cursor-pointer"
                >Guruhni tanlang</label
              >
              <a-select
                class="w-full mt-1"
                id="group"
                loading
                show-search
                placeholder="Guruhni tanlang"
                :options="store.options"
                :filter-option="filterOption"
                @change="handleChange"
                required
              ></a-select>
            </div>
            <div v-if="!store.edit" class="relative z-0 w-full mb-6 group">
              <input
                v-model="createModal.password"
                type="password"
                @focus="() => (createModal.password = '')"
                autocomplete="off"
                id="floating_password"
                class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_password"
                class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Password</label
              >
            </div>
            <div
              v-else
              v-show="store.changePassword"
              class="relative z-0 w-full mb-6 group"
            >
              <input
                v-model="createModal.password"
                type="password"
                @focus="() => (createModal.password = '')"
                autocomplete="off"
                id="floating_password"
                class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                for="floating_password"
                class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Password</label
              >
            </div>
            <div class="flex gap-2">
              <input
                v-model="store.current_time"
                type="checkbox"
                id="today"
                class="block py-2 w-5 h-5 text-sm bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label for="today" class="text-sm cursor-pointer"
                >Bugungi sana</label
              >
            </div>
            <div
              v-if="!store.current_time"
              class="relative z-0 w-full mb-6 group"
            >
              <input
                v-model="createModal.start_date"
                type="date"
                id="start_date"
                class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="start_date"
                class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Start date</label
              >
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                v-model="createModal.student_id"
                type="number"
                max="999"
                autocomplete="off"
                id="studentId"
                class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="studentId"
                class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Student ID</label
              >
            </div>
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center justify-end p-6 space-x-2 rounded-b dark:border-gray-600"
          >
            <button
              @click="closeModal"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-1.5 text-center"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-1.5 hover:text-gray-900 focus:z-10"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </section>

    <!-- Delete Modal -->
    <section
      v-show="store.modalDelete"
      class="flex justify-center bg-[#ffffff23] top-0 left-0 min-w-full items-center absolute z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 min-h-screen"
    >
      <div class="relative w-full max-w-sm max-h-full">
        <div class="relative bg-gray-900 rounded-lg shadow dark:bg-gray-700">
          <div
            class="flex items-start justify-between py-4 px-6 border-b rounded-t border-gray-600"
          >
            <h3 class="text-xl font-semibold text-white/50">O'chirish</h3>
            <button
              @click="() => (store.modalDelete = false)"
              type="button"
              class="text-white/50 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            >
              <i class="bx bx-x text-2xl"></i>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6 text-white/50">
            <h1 class="text-2xl text-center">
              Siz ushbu o'quvchini o'chirishni xohlaysizmi?
            </h1>
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center justify-center p-6 space-x-2 rounded-b dark:border-gray-600"
          >
            <button
              @click="() => (store.modalDelete = false)"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-1.5 text-center"
            >
              Yo'q
            </button>
            <button
              @click="() => deleteStudent()"
              class="text-gray-500 bg-white hover:bg-red-500 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-1.5 hover:text-gray-900 focus:z-10"
            >
              Ha
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useNotification } from "@/composables/notification";

const { showLoading, showSuccess, showWarning, showError, destroy } =
  useNotification();

const runtimeConfig = useRuntimeConfig();
const baseURL = runtimeConfig.public.baseURL;

// 2020-03-31 yil, kun , oy
const store = reactive({
  allProducts: "",
  modalCreate: false,
  modalDelete: false,
  token: "",
  deleteId: "",
  edit: false,
  editId: "",
  current_time: false,
  changePassword: false,
  is_Loading: false,
  options: [],
});

const createModal = reactive({
  username: "",
  password: "",
  start_date: "",
  student_id: "",
  group_id: "",
});

const closeModal = () => {
  createModal.username = "";
  createModal.password = "";
  createModal.start_date = "";
  createModal.group_id = "";
  createModal.student_id = false;
  store.modalCreate = false;
  store.current_time = false;
  store.edit = false;
};

const handleChange = (value) => {
  createModal.group_id = value;
  getOneGroup(createModal.group_id);
};

const filterOption = (input, option) => {
  return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

const handleSubmit = () => {
  if (!createModal.group_id) {
    showWarning("Iltimos, guruhni tanlang!");
    return;
  }
  if (store.current_time) {
    createModal.start_date = new Date();
  }
  if (store.edit === true) {
    editStudent();
    return;
  }
  fetch(baseURL + "/student/create", {
    method: "POST",
    body: JSON.stringify(createModal),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + store.token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.message === "O'quvchi ro'yxatga kiritildi") {
        closeModal();
        // getAllStudents();
        getOneGroup(createModal.group_id);
      } else {
        showError(res.message);
      }
    })
    .catch((err) => {
      console.log(err);
      showError("error");
    });
};

// const getAllStudents = () => {
//   showLoading("Ma'lumotlar yuklanmoqda...");
//   fetch(baseURL + "/student")
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res);
//       if (res.length) {
//         destroy();
//         showSuccess("Ma'lumotlar yuklandi");
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       showError("Ma'lumotlar topilmadi");
//       store.is_Loading = false;
//     });
// };

const getAllGroups = () => {
  showLoading("Guruhlar yuklanmoqda...");
  fetch(baseURL + "/groups", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + store.token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      destroy();
      // store.allProducts = res;
      console.log(res[0]);
      createModal.group_id = res[0].id
      getOneGroup(createModal.group_id)
      store.options = [];

      for (let i = 0; i < res.length; i++) {
        let values = {};
        values.value = res[i].id;
        values.label = res[i].name;
        store.options.push(values);
      }

      document.querySelector(
        ".ant-select-arrow"
      ).innerHTML = `<span class="ant-select-arrow" unselectable="on" aria-hidden="true" style="user-select: none;"><span role="img" aria-label="down" class="anticon anticon-down ant-select-suffix"><svg focusable="false" class="" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span><!----></span>`;
      showSuccess("Guruhlar yuklandi");
    })
    .catch((err) => {
      console.log(err);
      showError("Ma'lumotlar topilmadi");
    });
};

const getOneStudent = (id) => {
  store.is_Loading = true;
  fetch(baseURL + `/student/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + store.token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      createModal.username = res.username;
      createModal.start_date = res.start_date.slice(0, 10);
      createModal.student_id = res.student_id;
      store.editId = res.id;
      store.edit = true;
      store.modalCreate = true;
    })
    .catch((err) => {
      console.log(err);
      showError("Ma'lumotlar topilmadi");
    });
};

const getOneGroup = (id) => {
  store.is_Loading = true;

  fetch(baseURL + `/groups/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + store.token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      store.allProducts = res.students;
      store.is_Loading = false;
    })
    .catch((err) => {
      console.log(err);
      store.is_Loading = false;
      showError("Ma'lumotlar topilmadi");
    });
};

const editStudent = () => {
  fetch(`http://localhost:4000/api/student/update/${store.editId}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + store.token,
    },
    body: JSON.stringify(createModal),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.message == "Ma'lumotlar o'zgartirildi") {
        closeModal();
        store.edit = false;
        // getAllStudents();
        getOneGroup(createModal.group_id);
      }
    })
    .catch((err) => {
      console.log(err);
      showError("Iltimos ma'lumotlarni to'g'ri tartibda kiriting!");
    });
};

const deleteStudent = () => {
  fetch(`http://localhost:4000/api/student/${store.deleteId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + store.token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      showError("O'chirildi");
      getOneGroup(createModal.group_id);
      // getAllStudents();
      store.modalDelete = false;
    })
    .catch((err) => {
      console.log(err);
      showError("O'quvchi topilmadi");
    });
};

function addMonth(startDate) {
  let date = new Date(
    new Date(startDate)?.getFullYear(),
    new Date(startDate)?.getMonth() + 1,
    new Date(startDate)?.getDate()
  );

  let day = String(new Date(date)?.getDate());
  let month = String(+new Date(date)?.getMonth() + 1);
  let year = String(new Date(date)?.getFullYear());
  date =
    (day.length == 2 ? day : "0" + day) +
    "-" +
    (month.length == 2 ? month : "0" + month) +
    "-" +
    year;
  return date;
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

onMounted(() => {
  store.token = localStorage.getItem("token");
  getAllGroups();
  // getAllStudents();
});
</script>

<style lang="scss" scoped>
.userInfo:hover {
  .actions {
    display: block;
  }
}
</style>
