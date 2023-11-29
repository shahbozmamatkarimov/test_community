import { defineStore } from "pinia";
import axios from "axios";
import { useLoadingStore } from "./loading";
import { io } from "socket.io-client";
import { useNotification } from "@/composables/notification";
import { routerKey } from "../../.nuxt/vue-router-stub";

export const useSubjectsStore = defineStore("subjects", () => {
  const { showError } = useNotification();
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const token = localStorage.getItem("token");
  // use vue stores
  // end vue stores
  const socket = io(baseUrl, {
    auth: {
      token: "Bearer " + token,
    },
  });

  const create = {
    name: "",
  };

  const store = reactive({
    isListener: true,
    id: "",
  });

  // getAll
  const getAllData = (isSearching) => {
    if (isSearching == "searchByName") {
      isLoading.search.searchType.subjects = "name";
    }
    if (store.isListener || isSearching === "searching") {
      isLoading.addLoading("getAllData/subjects");
    }
    store.isListener = false;
    if (isLoading.store.isSearching) {
      isLoading.store.isSearching = false;
      isLoading.store.pagination.subjects = 1;
    }
    if (!isLoading.search.searchType) {
      isLoading.search.searchType.subjects = "name";
    }
    socket.emit("getAll/subjects", {
      page: isLoading.store.pagination.subjects || 1,
      data: {
        search: isLoading.search.search.subjects || null,
        searchType: isLoading.search.searchType.subjects || "name",
      },
    });
  };

  // create
  const createData = () => {
    store.isListener = true;
    isLoading.addLoading("modal");
    socket.emit("create/" + isLoading.store.pageName, create);
  };

  // get by id
  const getDataById = (id) => {
    store.isListener = true;
    isLoading.addLoading("modal");
    store.id = id;
    isLoading.modal.create = true;
    isLoading.modal.edit = true;
    socket.emit("getById/" + isLoading.store.pageName, id);
  };

  // update
  const updateData = () => {
    store.isListener = true;
    isLoading.addLoading("modal");
    socket.emit("update/subjects", {
      id: store.id,
      subject: create,
    });
  };

  // delete
  const deleteData = () => {
    store.isListener = true;
    isLoading.addLoading("modal");
    socket.emit("delete/" + isLoading.store.pageName, store.id);
  };

  // socket listener
  socket.on("listener/subjects", (res) => {
    getAllData();
  });

  // getAll listener
  socket.on("subjects", (res) => {
    console.log(res);
    isLoading.removeLoading("getAllData/subjects");
    if (res.status === 404) return showError(res.error);
    isLoading.store.pageData.subjects = res.data?.pagination;
    isLoading.store.allData.subjects = res.data?.records;
  });

  // created listener
  socket.on("created/subjects", (res) => {
    isLoading.removeLoading("modal");
    if (res.status === 400) return showError("Bunday fan mavjud!");
    isLoading.modal.create = false;
  });

  // get by id listener
  socket.on("getById", (res) => {
    isLoading.removeLoading("modal");
    if (res.status === 404) return showError(res.data.error);
    create.name = res.data?.name;
  });

  // upated listener
  socket.on("updated/subjects", (res) => {
    isLoading.removeLoading("modal");
    console.log(res);
    if (res.status === 404) return showError("Bunday guruh mavjud!");
    isLoading.modal.create = false;
  });

  // delete listener
  socket.on("deleted", (res) => {
    isLoading.removeLoading("modal");
    if (res.status === 404) {
      showError("Guruh topilmadi!");
      return;
    }

    isLoading.modal.delete = false;
  });

  socket.on("errorMessage", (res) => {
    navigateTo("/login");
    console.log(res);
  });

  return {
    store,
    create,
    createData,
    getAllData,
    getDataById,
    updateData,
    deleteData,
  };
});
