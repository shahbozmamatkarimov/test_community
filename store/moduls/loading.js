import { defineStore } from "pinia";
import axios from "axios";

export const useLoadingStore = defineStore("loading", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;

  const store = reactive({
    searchOptions: [],
    loadingTypes: [],
    allData: {},
    pageName: "",
    isSearching: false,
    pagination: { groups: 1, students: 1, tests: 1 },
    pageData: {},
    calendarModal: false,
    paginationStep: "",
    isOpenSidebar: false,
  });

  const modal = reactive({
    create: false,
    edit: false,
    delete: false,
  });

  const searchDate = reactive({
    start_date: "",
    end_date: "",
  })

  const search = reactive({
    search: {},
    searchType: {},
  });

  function addLoading(type) {
    if (!store.loadingTypes?.includes(type)) {
      store.loadingTypes.push(type);
    }
  }

  function removeLoading(type) {
    if (store.loadingTypes?.includes(type)) {
      store.loadingTypes = store.loadingTypes?.filter(
        (fruit) => fruit !== type
      );
    }
  }

  function isLoadingType(type) {
    return store.loadingTypes?.includes(type);
  }

  return { store, modal, searchDate, search, addLoading, removeLoading, isLoadingType };
});
