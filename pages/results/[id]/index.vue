<template>
    <main>
      <section>
        <div
          class="flex flex-col items-center w-full min-h-screen bg-gray-900 py-10"
        >
          <!-- Component Start -->
          <div class="w-full space-x-5 px-10 mx-auto">
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
            <a-select
              class="max-w-fit mt-1"
              id="group"
              loading
              show-search
              placeholder="Testni tanlang"
              :options="store.testOptions"
              :filter-option="testFilterOption"
              @change="testHandleChange"
              required
            ></a-select>
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
                          Natijasi
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          <img
                            class="w-4"
                            src="@/assets/svg/true.svg"
                            alt=""
                          />
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          <img
                            class="w-4"
                            src="@/assets/svg/false.svg"
                            alt=""
                          />
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-gray-800">
                      <tr
                        class="bg-black bg-opacity-20"
                        v-for="(i, index) in store.groups"
                        :key="index"
                      >
                        <td class="pl-2">
                          <img
                            v-if="index == 0"
                            class="w-6 h-10 object-cover"
                            src="@/assets/images/first.png"
                            alt=""
                          />
                          <img
                            v-else-if="index == 1"
                            class="w-6 h-10 object-cover"
                            src="@/assets/images/second.png"
                            alt=""
                          />
                          <img
                            v-else-if="index == 2"
                            class="w-6 h-10 object-cover"
                            src="@/assets/images/third.png"
                            alt=""
                          />
                          <p v-else>{{ index }}</p>
                        </td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <img
                            class="w-5"
                            src="https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png"
                            alt=""
                          />
                          <span class="ml-2 font-medium">{{ i.username }}</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          {{ i.result }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          {{ i.true_answers }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          {{ i.false_answers }}
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
    </main>
  </template>
  
  <script setup>
  import { useNotification } from "@/composables/notification";
  
  const { showLoading, showSuccess, showWarning, showError, destroy } =
    useNotification();
  
  const filterOption = (input, option) => {
    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };
  
  const getResults = (results, type) => {
    console.log(results);
    for (let i of results) {
      console.log(i.test_id, store.test_id);
      if (i.test_id == store.test_id) {
        if (type == "foiz") {
          return (
            (i.true_answers * 100) / (i.true_answers + i.false_answers) + "%"
          );
        }
        if (type) {
          return i.true_answers;
        }
        return i.false_answers;
      }
    }
  };
  
  const testFilterOption = (input, option) => {
    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };
  
  const handleChange = (value) => {
    store.group_id = value;
    getOneGroup();
  };
  
  const testHandleChange = (value) => {
    store.test_id = value;
    getOneGroup();
  };
  
  const runtimeConfig = useRuntimeConfig();
  const baseURL = runtimeConfig.public.baseURL;
  
  const store = reactive({
    allProducts: [],
    groups: [],
    token: "",
    is_Loading: false,
    options: [],
    testOptions: [],
    group_id: "",
    test_id: "",
  });
  
  const getAllGroups = () => {
    showLoading("Ma'lumotlar yuklanmoqda...");
    store.is_Loading = true;
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
        store.group_id = res[0].id;
        getOneGroup();
        destroy();
        store.allProducts = res;
        showSuccess("Ma'lumotlar yuklandi");
        store.is_Loading = false;
      })
      .catch((err) => {
        console.log(err);
        showError("Ma'lumotlar topilmadi");
      });
  };
  
  const getOneGroup = () => {
    store.groups = [];
    fetch(baseURL + `/groups/${store.group_id}`, {
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
  
        for (let i of res.students) {
          console.log(i);
          for (let res of i.results) {
            console.log(res);
            if (res.test_id == store.test_id) {
              store.groups.push({
                username: i.username,
                result: getResults(i.results, "foiz"),
                true_answers: getResults(i.results, true),
                false_answers: getResults(i.results, false),
              });
            }
          }
        }
        console.log(store.groups);
  
        console.log(store.groups.sort((a, b) => b.true_answers - a.true_answers));
      })
      .catch((err) => {
        console.log(err);
        showError("Ma'lumotlar topilmadi");
      });
  };
  
  const getAllTests = () => {
    store.is_Loading = true;
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
        store.test_id = res[0].id;
        store.testOptions = [];
  
        for (let i = 0; i < res.length; i++) {
          let values = {};
          values.value = res[i].id;
          values.label = res[i].title;
          store.testOptions.push(values);
        }
  
        const arrows = document.querySelectorAll(".ant-select-arrow");
        for (let i of arrows) {
          i.innerHTML = `<span class="ant-select-arrow" unselectable="on" aria-hidden="true" style="user-select: none;"><span role="img" aria-label="down" class="anticon anticon-down ant-select-suffix"><svg focusable="false" class="" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg></span><!----></span>`;
        }
        destroy();
        console.log(res);
        showSuccess("Ma'lumotlar yuklandi");
        store.is_Loading = false;
      })
      .catch((err) => {
        console.log(err);
        showError("Ma'lumotlar topilmadi");
      });
  };
  
  onMounted(() => {
    store.token = localStorage.getItem("token");
    getAllGroups();
    getAllTests();
  });
  </script>
  
  <style lang="scss" scoped></style>
  