<template>
  <main>
    <section>
      <div class="flex flex-col w-full min-h-screen bg-gray-900 py-10">
        <!-- Component Start -->
        <div
          class="flex justify-between text-lg text-gray-400 px-10 font-medium"
        >
          <h1>Testlar</h1>
          <button
            @click="store.createModal = true"
            class="bg-blue-600 py-1 px-3 rounded-md"
          >
            <i class="bx bx-plus"></i> Test qo'shish
          </button>
        </div>
        <div class="flex flex-col w-full px-10 mt-6">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
            >
              <div class="shadow overflow-hidden sm:rounded-lg">
                <table class="min-w-full text-sm text-gray-400">
                  <thead class="bg-gray-800 text-xs uppercase font-medium">
                    <tr>
                      <th>№</th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left tracking-wider"
                      >
                        Mavzusi
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left tracking-wider"
                      >
                        Soni
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 whitespace-nowrap text-left tracking-wider"
                      >
                        O'tish bali
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-center tracking-wider"
                      >
                        Javoblari
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 whitespace-nowrap text-left tracking-wider"
                      >
                        Boshlanish vaqti
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 whitespace-nowrap text-left tracking-wider"
                      >
                        Tugash vaqti
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left tracking-wider"
                      >
                        Last 5
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-gray-800">
                    <tr
                      v-for="i in 10"
                      :key="i"
                      :class="i % 2 == 0 ? '' : 'bg-black'"
                      class="bg-opacity-20"
                    >
                      <td class="pl-4">{{ i }}</td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        <img
                          class="w-5"
                          src="https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png"
                          alt=""
                        />
                        <span class="ml-2 font-medium">Tenglamalar</span>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">30</td>
                      <td class="px-6 py-4 whitespace-nowrap">60%</td>
                      <td class="px-6 py- whitespace-nowrap text-center">
                        <button
                          class="bx bx-show bg-gray-700 hover:bg-gray-600 py-2 px-3 rounded-md"
                        ></button>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        23/03/2023 8:00
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        23/03/2023 12:00
                      </td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        <svg
                          class="w-4 fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <svg
                          class="w-4 fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <svg
                          class="w-4 fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <svg
                          class="w-4 fill-current text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <svg
                          class="w-4 fill-current text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- Component End  -->
      </div>
    </section>

    <!-- Modal -->
    <section
      v-show="store.createModal"
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
                type="text"
                id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Mavzu</label
              >
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="number"
                id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Testlar soni</label
              >
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="text"
                id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >O'tish bali</label
              >
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="date"
                id="start_date"
                class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="start_date"
                class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Boshlanish vaqti</label
              >
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="date"
                id="start_date"
                class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="start_date"
                class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Tugash vaqti</label
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
      v-show="store.deleteModal"
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
const store = reactive({
  createModal: false,
});

const form = reactive({
  title: "",
  count: "",
  min_ball: "",
  answares: "",
  start_time: "",
  end_time: "",
});

const closeModal = () => {
  form.title = "";
  form.count = "";
  form.min_ball = "";
  form.answares = "";
  form.start_time = "";
  form.end_time = "";
  store.createModal = false;
};
</script>

<style lang="scss" scoped></style>
