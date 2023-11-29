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
            :options="options"
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
            :options="testOptions"
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
              <div v-if="false" class="shadow overflow-hidden sm:rounded-lg">
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
                      <th v-for="i in store.allTest" :key="i.id">
                        {{ i.title }}
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left tracking-wider"
                      >
                        <img class="w-4" src="@/assets/svg/true.svg" alt="" />
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left tracking-wider"
                      >
                        <img class="w-4" src="@/assets/svg/false.svg" alt="" />
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
                      <td v-for="group in store.groups">
                        <!-- {{ group }}{{ i.id }} -->
                        <p v-if="group.test_id == store.allTest[index]?.id">
                          {{ group.true_answers }}
                        </p>
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
import { useResultsStore, useLoadingStore } from "@/store";

const { showLoading, showSuccess, showWarning, showError, destroy } =
  useNotification();

  let useResults;
  const isLoading = useLoadingStore();

  onMounted(() => {
    useResults = useResultsStore();
    useResults.getAllData();
  })
</script>

<style lang="scss" scoped></style>