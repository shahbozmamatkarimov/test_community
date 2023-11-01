<template>
  <main>
    <section>
      <div class="flex flex-col w-full min-h-screen bg-gray-900 py-10">
        <!-- Component Start -->
        <div
          class="flex w-full justify-between text-lg text-gray-400 px-10 font-medium"
        >
          <h1>Javoblar</h1>
          <button
            @click="$router.back()"
            class="flex items-center bg-blue-600 py-1 px-3 rounded-md"
          >
            <i class="bx bx-chevron-left text-xl pr-1 -mb-1"></i>
            Orqaga qaytish
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
                      <th></th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left tracking-wider"
                      >
                        O'quvchilar
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left tracking-wider"
                      >
                        Javoblar
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-gray-800">
                    <tr
                      v-for="(i, index) in store.allProducts"
                      :key="i.id"
                      :class="index % 2 == 0 ? '' : 'bg-black'"
                      class="bg-opacity-20"
                    >
                      <td class="pl-4 pb-2">{{ index + 1 }}</td>
                      <td class="flex px-6 py-4 whitespace-nowrap">
                        <img
                          class="w-5"
                          src="https://ssl.gstatic.com/onebox/media/sports/logos/C3J47ea36cMBc4XPbp9aaA_48x48.png"
                          alt=""
                        />
                        <span class="ml-2 font-medium">{{ i.username }}</span>
                      </td>
                      <td
                        v-if="getIsAnswer(i.answers)"
                        class="px-6 py-4 whitespace-nowrap"
                      >
                        <button
                          @click="() => getOneStudent(i.id, 'plus')"
                          class="bx bx-plus bg-gray-700 hover:bg-gray-600 py-2 px-3 rounded-md"
                        ></button>
                      </td>
                      <td v-else class="px-6 py-4 whitespace-nowrap">
                        <div
                          class="flex items-center px-2 space-x-2 whitespace-nowrap text-center"
                        >
                          <p class="w-16 overflow-hidden truncate">
                            {{ getUserAnswer(i.answers) }}
                          </p>
                          <button
                            @click="() => success(i.answers)"
                            v-if="getAnswerShow(i.answers)"
                            class="bx bx-show bg-gray-700 hover:bg-gray-600 py-2 px-3 rounded-md"
                          ></button>
                          <button
                            @click="() => getOneStudent(i.id)"
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
                        </div>
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

    <!-- Edit modal -->
    <section
      v-show="store.modalEdit"
      class="flex justify-center bg-[#ffffff23] top-0 left-0 min-w-full items-center absolute z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 min-h-screen"
    >
      <div class="relative w-full max-w-sm max-h-full">
        <form
          @submit.prevent="selectedType"
          class="relative bg-gray-900 rounded-lg shadow"
        >
          <div
            class="flex items-start justify-between py-4 px-6 border-b rounded-t border-gray-600"
          >
            <h3 v-if="!store.edit" class="text-xl font-semibold text-white/50">
              Javobni turini tanlang
            </h3>
            <h3 v-else class="text-xl font-semibold text-white/50">
              Javobni o'zgartirish
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
            <a-radio-group
              class="grid grid-cols-2 w-full gap-5"
              v-model:value="store.editAnswerType"
              name="radioGroup"
              required
            >
              <a-radio
                :class="store.editAnswerType == 'ball' ? 'border-blue-500' : ''"
                class="text-white/50 border w-full rounded-md p-2"
                :value="'ball'"
                checked
                >Ball</a-radio
              >
              <a-radio
                @click="form.answer = ''"
                :class="
                  store.editAnswerType == 'variant' ? 'border-blue-500' : ''
                "
                class="text-white/50 border w-full rounded-md p-2"
                :value="'variant'"
                >Variant</a-radio
              >
            </a-radio-group>
            <p v-if="store.editAnswerType != 'ball'">
              {{ store.checkAnswerType }}
            </p>
            <a-input
              v-if="store.editAnswerType == 'ball'"
              type="number"
              class="placeholder-black"
              v-model:value="form.answer"
              placeholder="Javobingizni kiriting..."
              required
            />
            <a-input
              v-else
              type="text"
              class="placeholder-black"
              @input="answersInput"
              v-model:value="form.answer"
              show-count
              :maxlength="store.checkAnswerCount"
              placeholder="Javobingizni kiriting..."
              required
            />
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
              @click="store.modalEdit = false"
            >
              Saqlash
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
              Siz ushbu guruhni o'chirishni xohlaysizmi?
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
              @click="() => deleteProduct()"
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
//   import { useNotification } from "@/composables/notification";

const { showLoading, showSuccess, showWarning, showError, destroy } =
  useNotification();

const runtimeConfig = useRuntimeConfig();
const baseURL = runtimeConfig.public.baseURL;

const router = useRouter();

const store = reactive({
  typeMain: "ball",
  typeOne: "ball",
  allAnswerType: "ball",
  answerType: "",
  editAnswerType: "ball",
  allProducts: "",
  modalEdit: false,
  modalDelete: false,
  token: "",
  deleteId: "",
  edit: false,
  editId: "",
  is_Loading: false,
  values: {},
  answer_id: "",
  checkAnswerType: "",
  checkAnswerCount: "",
  student_id: "",
});

const form = reactive({
  test_id: "",
  student_id: "",
  answer: "",
  type: "",
});

const closeModal = () => {
  form.name = "";
  form.description = "";
  store.edit = false;
  store.modalEdit = false;
  store.editAnswerType = "ball";
};

const success = (answers) => {
  let text = "";
  for (let i of answers) {
    if (i.test_id == form.test_id) {
      text = i.answer;
      break;
    }
  }
  destroy();
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

const answersInput = (e) => {
  if (e.inputType !== "insertText") return;
  form.answer = form.answer.toUpperCase();
  console.log(store.checkAnswerType);
  for (let i of store.checkAnswerType) {
    if (form.answer.slice(-1).toLowerCase() === i.toLowerCase()) {
      return;
    }
  }

  form.answer = form.answer.slice(0, -1);
};

const selectedType = () => {
  if (store.edit == true) {
    form.type = store.editAnswerType;
    fetch(baseURL + "/answers/" + store.answer_id, {
      method: "PATCH",
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
        fetch(baseURL + `/tests/${res.answer?.test_id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.token,
          },
        })
          .then((res) => res.json())
          .then((test) => {
            console.log(test);

            let ball = 0;

            for (let i = 0; i < test?.answers?.length; i++) {
              if (res.answer?.answer[i] == test?.answers[i]) {
                ball += 1;
              }
            }

            const data = {
              student_id: store.student_id,
              true_answers: ball,
              false_answers: test.test_count - ball,
              test_id: test.id,
            };

            fetch(baseURL + `/results/${store.student_id}`, {
              method: "PATCH",
              body: JSON.stringify(data),
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + store.token,
              },
            })
              .then((res) => res.json())
              .then((res) => {
                console.log(res);
                showSuccess("Natijalar o'zgartirildi");
              })
              .catch((err) => {
                showError("error");
              });
          })
          .catch((err) => {
            console.log(err);
            showError("Ma'lumotlar topilmadi");
          });
        showSuccess("Javob qo'shildi");
        closeModal();
        getOneTest();
      })
      .catch((err) => {
        // console.log(err);
        showError("error");
      });
  } else {
    form.type = store.editAnswerType;
    fetch(baseURL + "/answers", {
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

        fetch(baseURL + `/tests/${res.answer?.test_id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.token,
          },
        })
          .then((res) => res.json())
          .then((test) => {
            console.log(test);

            let ball = 0;

            for (let i = 0; i < test?.answers?.length; i++) {
              if (res.answer?.answer[i] == test?.answers[i]) {
                ball += 1;
              }
            }

            const data = {
              student_id: store.student_id,
              true_answers: ball,
              false_answers: test.test_count - ball,
              test_id: test.id,
            };

            fetch(baseURL + "/results", {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + store.token,
              },
            })
              .then((res) => res.json())
              .then((res) => {
                console.log(res);
                showSuccess("Natijalar qo'shildi");
              })
              .catch((err) => {
                showError("error");
              });
          })
          .catch((err) => {
            console.log(err);
            showError("Ma'lumotlar topilmadi");
          });

        showSuccess("Javob qo'shildi");
        closeModal();
        getOneTest();
      })
      .catch((err) => {
        // console.log(err);
        showError("error");
      });
  }
  store.allAnswerType = store.typeMain;
};

const getIsAnswer = (answers) => {
  for (let i of answers) {
    if (i.test_id == form.test_id) {
      return false;
    }
  }
  return true;
};

const getVariants = (variants) => {
  for (let i of variants) {
    if (i.test_id == router.currentRoute.value?.params?.id) {
      return i.test.variants;
    }
  }
};

const getUserAnswer = (answers) => {
  for (let i of answers) {
    if (i.test_id == form.test_id) {
      return i.answer;
    }
  }
  return true;
};

const getAnswerShow = (answers) => {
  for (let i of answers) {
    if (i.test_id == form.test_id) {
      console.log(i);
      if (i.type != "ball") {
        return true;
      }
    }
  }
  return false;
};

const handleInput = (e, id) => {
  const answer = e.target.value?.trim();
  document.getElementById(id + 1)?.focus();
  form.student_id = id;
  form.type = store.allAnswerType;
  form.answer = e.target.value;
  fetch(baseURL + "/answers", {
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
      showSuccess("Javob qo'shildi");
      getOneTest();
    })
    .catch((err) => {
      // console.log(err);
      showError("error");
    });
};

const getOneStudent = (id, add) => {
  if (add != "plus") {
    store.edit = true;
  }
  store.student_id = id;
  store.modalEdit = true;
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
      let isStudent = false;
      if (add == "plus") {
        console.log(res);
        for (let i of [res.group?.tests]) {
          if (router.currentRoute.value.params?.id == form.test_id) {
            for (let test of i) {
              if (test.id == router.currentRoute.value.params.id) {
                console.log(test);
                store.checkAnswerCount = test.test_count;
                store.checkAnswerType = test.variants;
                store.answer_id = i.id;
                form.answer = i.answer;
                isStudent = true;
              }
            }
          }
        }
        if (isStudent) {
          form.student_id = id;
        }
        return;
      }
      for (let i of res.answers) {
        if (i.test_id == form.test_id) {
          store.checkAnswerCount = i.test?.test_count;
          store.checkAnswerType = i.test?.variants;
          store.answer_id = i.id;
          form.answer = i.answer;
          isStudent = true;
        }
      }
      if (isStudent) {
        form.student_id = id;
      }
    })
    .catch((err) => {
      console.log(err);
      showError("Ma'lumotlar topilmadi");
    });
};

const deleteProduct = () => {
  store.modalDelete = true;
  fetch(baseURL + `/student/${store.deleteId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + store.token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      let isStudent = false;
      console.log(res);
      for (let i of res.answers) {
        if (i.test_id == router.currentRoute?.value?.params?.id) {
          fetch(baseURL + `/answers/${i.id}`, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + store.token,
            },
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res);

              fetch(baseURL + `/results/${store.student_id}`, {
              method: "DELETE",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + store.token,
              },
            })
              .then((res) => res.json())
              .then((res) => {
                console.log(res);
                showSuccess("Natijalar o'chirildi");
              })
              .catch((err) => {
                showError("error");
              });

              store.modalDelete = false;
              closeModal();
              getOneTest();
            });
        }
        if (isStudent) {
          form.student_id = id;
        }
      }
    })
    .catch((err) => {
      console.log(err);
      showError("Ma'lumotlar topilmadi");
    });
};

const getOneTest = () => {
  fetch(baseURL + `/groups/${router.currentRoute.value?.params?.group_id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + store.token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      store.allProducts = res?.students;
    })
    .catch((err) => {
      console.log(err);
      showError("Ma'lumotlar topilmadi");
    });
};

// const editTest = () => {
//   fetch(baseURL + `/groups/${store.editId}`, {
//     method: "PATCH",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + store.token,
//     },
//     body: JSON.stringify(form),
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       if (res.message == "Group o'zgartirildi") {
//         closeModal();
//         store.edit = false;
//         getAllGroups();
//         showSuccess("Ma'lumotlar o'zgartirildi");
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       showError("Iltimos ma'lumotlarni to'g'ri tartibda kiriting!");
//     });
// };

// const deleteStudent = () => {
//   fetch(`http://localhost:4000/api/groups/${store.deleteId}`, {
//     method: "DELETE",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + store.token,
//     },
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       showError("Test o'chirildi");
//       getAllGroups();
//       store.modalDelete = false;
//     })
//     .catch((err) => {
//       console.log(err);
//       showError("Test topilmadi");
//     });
// };

onMounted(() => {
  store.token = localStorage.getItem("token");
  form.test_id = +router.currentRoute?.value?.params?.id;
  getOneTest();
});
</script>

<style lang="scss" scoped></style>
