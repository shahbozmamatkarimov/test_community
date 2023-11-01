import { defineStore } from "pinia";
import axios from "axios";

export const useLoadingStore = defineStore("loading", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;

  const store = reactive({
    loadingTypes: [],
    allData: "",
    pageName: "",
  });

  const search = reactive({
    search: "",
    searchType: "name",
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
    console.log(store.loadingTypes?.includes(type));
    return store.loadingTypes?.includes(type);
  }

  function searchBy() {
    if (!search.searchType) {
      search.searchType = "name";
    }
    axios
      .post(baseUrl + "/api/groups/search", search)
      .then((res) => {
        console.log(res);
        store.allData = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return { store, search, addLoading, removeLoading, isLoadingType, searchBy };
});
