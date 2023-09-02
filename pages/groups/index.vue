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
                        O'quvchilar
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
                        <p class="font-medium truncate w-40">{{ i.name }}</p>
                      </td>
                      <td class="px-2 py-4 whitespace-nowrap text-center">
                        {{ i.description }}
                      </td>
                      <td class="px-2 py-4 whitespace-nowrap text-center">
                        <button
                          class="bx bx-show bg-gray-700 hover:bg-gray-600 py-2 px-3 rounded-md"
                        ></button>
                      </td>
                      <td
                        class="px-2 py-4 space-x-2 whitespace-nowrap text-center"
                      >
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
                v-model="form.name"
                type="text"
                maxlength="100"
                id="name"
                class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="name"
                class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Guruh nomi <span class="required">*</span></label
              >
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                v-model="form.description"
                type="text"
                maxlength="100"
                id="description"
                class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="description"
                class="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Guruh tavfsifi</label
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

const form = reactive({
  name: "",
  description: "",
});

const closeModal = () => {
  form.name = "";
  form.description = "";
  store.edit = false;
  store.modalCreate = false;
};

const handleSubmit = () => {
  if (store.edit === true) {
    editTest();
    return;
  }

  fetch(baseURL + "/groups", {
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
        getAllGroups();
      } else {
        showError(res.message);
      }
    })
    .catch((err) => {
      console.log(err);
      showError("error");
    });
};

const getAllGroups = () => {
  showLoading("Ma'lumotlar yuklanmoqda...");
  fetch(baseURL + "/groups", {
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
      form.name = res.name;
      form.description = res.description;
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
  fetch(baseURL + `/groups/${store.editId}`, {
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
      if (res.message == "Group o'zgartirildi") {
        closeModal();
        store.edit = false;
        getAllGroups();
        showSuccess("Ma'lumotlar o'zgartirildi");
      }
    })
    .catch((err) => {
      console.log(err);
      showError("Iltimos ma'lumotlarni to'g'ri tartibda kiriting!");
    });
};

const deleteStudent = () => {
  fetch(`http://localhost:3001/api/groups/${store.deleteId}`, {
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
      getAllGroups();
      store.modalDelete = false;
    })
    .catch((err) => {
      console.log(err);
      showError("Test topilmadi");
    });
};

onMounted(() => {
  store.token = localStorage.getItem("token");
  getAllGroups();
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
