<template>
  <main>
    <section>
      <div class="flex flex-col w-full min-h-screen bg-gray-900 py-10">
        <!-- Component Start -->
        <div
          class="flex justify-between text-lg text-gray-400 px-10 font-medium"
        >
          <h1>Guruhlar</h1>
          <button
            @click="store.modalCreate = true"
            class="bg-blue-600 py-1 px-3 rounded-md"
          >
            <i class="bx bx-plus"></i> Guruh qo'shish
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
                      <th
                        scope="col"
                        class="px-3 py-3 text-left tracking-wider"
                      >
                        №
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3 text-left tracking-wider"
                      >
                        Nomi
                      </th>
                      <th
                        scope="col"
                        class="px-2 text-center py-3 tracking-wider"
                      >
                        Tavfsif
                      </th>
                      <th
                        scope="col"
                        class="px-2 py-3 whitespace-nowrap text-center tracking-wider"
                      >
                        O'quvchilar soni
                      </th>
                      <th
                        scope="col"
                        class="px-2 py-3 text-center tracking-wider"
                      >
                        Javoblari
                      </th>
                      <th
                        scope="col"
                        class="px-2 py-3 whitespace-nowrap text-center tracking-wider"
                      >
                        Boshlanish vaqti
                      </th>
                      <th
                        scope="col"
                        class="px-2 py-3 whitespace-nowrap text-center tracking-wider"
                      >
                        Tugash vaqti
                      </th>
                      <th
                        scope="col"
                        class="px-8 py-3 text-center tracking-wider"
                      >
                        Rasmi
                      </th>
                      <th scope="col" class="px-2 py-3"></th>
                    </tr>
                  </thead>
                  <tbody class="bg-gray-800">
                    <tr
                      v-for="(i, index) in store.allProducts"
                      :key="i.id"
                      :class="i % 2 == 0 ? '' : 'bg-black'"
                      class="bg-opacity-20"
                    >
                      <td class="px-4 py-4">{{ index + 1 }}</td>
                      <td
                        class="px-2 items-center align-start w-40 whitespace-nowrap"
                      >
                        <p class="font-medium truncate w-40">{{ i.title }}</p>
                      </td>
                      <td class="px-2 py-4 whitespace-nowrap text-center">
                        {{ i.test_count }}
                      </td>
                      <td class="px-2 py-4 whitespace-nowrap text-center">
                        {{ i.min_ball }}%
                      </td>
                      <td class="px-2 py- whitespace-nowrap text-center">
                        <button
                          class="bg-gray-700 hover:bg-gray-600 rounded-md"
                        >
                          <a-button @click="()=>success(i.answers)"><i class="bx bx-key text-white rotate-45 text-lg"></i></a-button>
                        </button>
                      </td>
                      <td
                        class="px-2 py-4 text-center whitespace-nowrap space-x-2"
                      >
                        <span>{{ i.start_time?.slice(0, 10) }}</span
                        ><span>{{ i.start_time?.slice(11, 16) }}</span>
                      </td>
                      <td
                        class="px-2 py-4 text-center whitespace-nowrap space-x-2"
                      >
                        <span>{{ i.end_time?.slice(0, 10) }}</span
                        ><span>{{ i.end_time?.slice(11, 16) }}</span>
                      </td>
                      <td
                        class="flex px-2 -mr-6 justify-center py-4 whitespace-nowrap"
                      >
                        <img
                          v-for="i in 3"
                          :key="i"
                          class="w-10 h-10 -ml-6 shadow-lg border shadow-black rounded-full"
                          src="https://as2.ftcdn.net/v2/jpg/00/93/80/65/1000_F_93806511_kXZWAHqsP3efiyPgqzMHOp64OVs5Sic2.jpg"
                          alt="Jese image"
                        />
                        <button
                          class="bx bx-plus bg-[#80808073] backdrop-blur-sm text-white text-xl font-bold w-10 h-10 -ml-6 shadow-lg shadow-black rounded-full"
                        ></button>
                      </td>
                      <td
                        class="px-2 py-4 space-x-2 whitespace-nowrap text-center"
                      >
                        <button
                          class="bx bx-show bg-gray-700 hover:bg-gray-600 py-2 px-3 rounded-md"
                        ></button>
                        <button
                          @click="() => getOneTest(i.id)"
                          class="bx bx-pencil bg-gray-700 hover:bg-gray-600 py-2 px-3 rounded-md"
                        ></button>
                        <button
                          @click="
                            () => {
                              store.modalDelete = true;
                              store.deleteId = i.id;
                            }
                          "
                          class="bx bx-trash bg-gray-700 hover:bg-gray-600 py-2 px-3 rounded-md"
                        ></button>
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

    <!-- Create and edit modal -->
    <section
      v-show="store.modalCreate"
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
            <h3 v-if="!store.edit" class="text-xl font-semibold text-white/50">
              Test qo'shish
            </h3>
            <h3 v-else class="text-xl font-semibold text-white/50">
              Test ma'lumotlarini o'zgartirish
            </h3>
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
                v-model="form.title"
                type="text"
                maxlength="100"
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
                v-model="form.test_count"
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
                type="number"
                id="floating_ball"
                v-model="form.min_ball"
                @input="(e) => minBallFunc(e)"
                class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
              />
              <label
                for="floating_ball"
                class="flex justify-between w-full peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                ><span>O'tish bali({{ form.min_ball }}%)</span
                ><span>Umumiy ball(100%)</span></label
              >
            </div>
            <div id="testtime" class="relative z-0 w-full mb-6 group">
              <label class="scale-75 text-sm">Vaqti</label>
              <a-space
                direction="vertical"
                :size="12"
                class="mt-1"
                v-if="!store.edit"
              >
                <a-range-picker
                  v-if="store.modalCreate"
                  :show-time="{ format: 'HH:mm' }"
                  format="YYYY-MM-DD HH:mm"
                  :placeholder="['Start Time', 'End Time']"
                  @change="onRangeChange"
                  @ok="onRangeOk"
                  required="true"
                />
              </a-space>
              <a-space v-else class="flex mt-1" direction="" :size="12">
                <a-date-picker
                  v-if="store.modalCreate"
                  :placeholder="form.start_time"
                  :show-time="{ format: 'HH:mm' }"
                  format="YYYY-MM-DD HH:mm"
                  @change="onStartChange"
                  required
                />
                <a-date-picker
                  v-if="store.modalCreate"
                  :placeholder="form.end_time"
                  :show-time="{ format: 'HH:mm' }"
                  format="YYYY-MM-DD HH:mm"
                  @change="onEndChange"
                  required
                />
              </a-space>
            </div>
            <div class="flex gap-2">
              <input
                v-model="form.is_time"
                type="checkbox"
                id="today"
                class="block py-2 w-5 h-5 text-sm bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label for="today" class="text-sm cursor-pointer"
                >Vaqt tugagach test qabul qilinmasin</label
              >
            </div>
            <div class="flex gap-2">
              <input
                v-model="form.is_message"
                type="checkbox"
                id="message"
                class="block py-2 w-5 h-5 text-sm bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label for="message" class="text-sm cursor-pointer"
                >Menga xabar berilsin</label
              >
            </div>
            <div>
              <label class="scale-75 text-sm">Variantlar</label>
              <a-input
                class="mt-1"
                v-model:value="form.variants"
                @click="varinatsFunc"
                @input="() => (form.variants = form.variants.toUpperCase())"
                required
              />
            </div>
            <div>
              <label class="scale-75 text-sm">Javoblari</label>
              <a-input
                v-model:value="form.answers"
                class="mt-1"
                show-count
                @input="(e) => answersInput(e)"
                :maxlength="form.test_count"
                required
              />
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
              Bekor qilish
            </button>
            <button
              v-if="!store.edit"
              type="submit"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-1.5 hover:text-gray-900 focus:z-10"
            >
              Yaratish
            </button>
            <button
              v-else
              type="submit"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none rounded-lg border border-gray-200 text-sm font-medium px-5 py-1.5 hover:text-gray-900 focus:z-10"
            >
              O'zgartirish
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
import { useNotification } from "../../composables/notification";

const { showLoading, showSuccess, showWarning, showError, destroy } =
  useNotification();

const runtimeConfig = useRuntimeConfig();
const baseURL = runtimeConfig.public.baseURL;

const store = reactive({
  allProducts: "",
  modalCreate: false,
  modalDelete: false,
  token: "",
  deleteId: "",
  edit: false,
  editId: "",
  test_time: "",
});

const success = (text) => {
  destroy()
  message.success({
    content: () => text,
    class: "custom-class",
    style: {
      marginTop: "40vh",
      height: "100px",
      fontWeight: "bold",
    },
  });
};

const onRangeChange = (value, dateString) => {
  console.log("Formatted Selected Time: ", dateString);
  form.start_time = dateString[0];
  form.end_time = dateString[1];
};

const onStartChange = (value, dateString) => {
  form.start_time = dateString;
};

const onEndChange = (value, dateString) => {
  form.end_time = dateString;
};

const form = reactive({
  title: "",
  test_count: "",
  min_ball: "",
  start_time: "",
  end_time: "",
  is_time: false,
  is_message: false,
  variants: "ABCD",
  answers: "",
});

const answersInput = (e) => {
  if (e.inputType !== "insertText") return;
  form.answers = form.answers.toUpperCase();
  for (let i of form.variants) {
    if (e.target.value.slice(-1).toLowerCase() === i.toLowerCase()) {
      return;
    }
  }

  form.answers = form.answers.slice(0, -1);
};

const minBallFunc = (e) => {
  if (e.target.value <= 100) {
    form.min_ball = e.target.value;
  } else {
    form.min_ball = 100;
  }
  form.min_ball = Number(form.min_ball);
};

const closeModal = () => {
  form.title = "";
  form.test_count = "";
  form.min_ball = "";
  form.start_time = "";
  form.end_time = "";
  form.is_time = false;
  form.is_message = false;
  form.variants = "ABCD";
  form.answers = "";
  store.edit = false;
  store.modalCreate = false;
};

const handleSubmit = () => {
  if (store.edit === true) {
    editTest();
    return;
  }
  if (!form.start_time || !form.end_time) {
    showWarning("Test vaqtini kiriting!");
    return;
  }

  if (form.answers?.length != form.test_count) {
    showWarning("Test javoblarini to'liq kiriting!");
    return;
  }

  if (store.edit === true) {
    editStudent();
    return;
  }
  fetch(baseURL + "/tests", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + store.token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.message === "Test qo'shildi") {
        closeModal();
        getAllTests();
      } else {
        showError(res.message);
      }
    })
    .catch((err) => {
      console.log(err);
      showError("error");
    });
};

const getAllTests = () => {
  showLoading("Ma'lumotlar yuklanmoqda...");
  fetch(baseURL + "/tests", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + store.token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      destroy();
      store.allProducts = res;
      showSuccess("Ma'lumotlar yuklandi");
    })
    .catch((err) => {
      console.log(err);
      showError("Ma'lumotlar topilmadi");
    });
};

const getOneTest = (id) => {
  fetch(baseURL + `/tests/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + store.token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      form.title = res.title;
      form.test_count = res.test_count;
      form.min_ball = res.min_ball;
      form.start_time = res.start_time;
      form.end_time = res.end_time;
      form.is_time = res.is_time;
      form.is_message = res.is_message;
      form.variants = res.variants;
      form.answers = res.answers;
      store.editId = res.id;
      store.edit = true;
      console.log(res);
      store.modalCreate = true;
    })
    .catch((err) => {
      console.log(err);
      showError("Ma'lumotlar topilmadi");
    });
};

const editTest = () => {
  fetch(baseURL + `/tests/${store.editId}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + store.token,
    },
    body: JSON.stringify(form),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.message == "Test o'zgartirildi") {
        closeModal();
        store.edit = false;
        getAllTests();
        showSuccess("Ma'lumotlar o'zgartirildi");
      }
    })
    .catch((err) => {
      console.log(err);
      showError("Iltimos ma'lumotlarni to'g'ri tartibda kiriting!");
    });
};

const deleteStudent = () => {
  fetch(`http://localhost:3001/api/tests/${store.deleteId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + store.token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      showError("Test o'chirildi");
      console.log(res);
      getAllTests();
      store.modalDelete = false;
    })
    .catch((err) => {
      console.log(err);
      showError("Test topilmadi");
    });
};

onMounted(() => {
  store.token = localStorage.getItem("token");
  getAllTests();
});
</script>

<style lang="scss" scoped>
:where(.css-dev-only-do-not-override-1ugq3w3).ant-picker {
  border: none;
}

.ant-btn{
  background: transparent;
  border: none;
}
</style>
