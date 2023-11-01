import { defineStore } from "pinia";
import axios from "axios";
import { useLoadingStore } from "./loading";
import { io } from "socket.io-client";
import { useNotification } from "@/composables/notification";
import { useGroupStore } from "@/store";

export const useSocketStore = defineStore("socket", () => {
  const { showError, showSuccess } = useNotification();
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const token = localStorage.getItem("token");

  // use vue stores
  const useGroup = useGroupStore();
  // end vue stores

  const socket = io(baseUrl, {
    auth: {
      token: "Bearer " + token,
    },
  });

  const store = reactive({
    pagination: 1,
    pageData: "",
  });

  const modal = reactive({
    create: false,
    edit: false,
    delete: false,
  });

  // getAll
  const getAllData = () => {
    isLoading.addLoading("getAllData");
    socket.emit("getAll/" + isLoading.store.pageName, store.pagination);
  };

  
  // create
  const createData = () => {
    // for (let i = 200; i< 400; i++){
    //   socket.emit("create/" + isLoading.store.pageName, {name: i, description: i});
    // }
    isLoading.addLoading("modal");
    socket.emit("create/" + isLoading.store.pageName, useGroup.group);
  };

  // get by id
  const getDataById = (id) => {
    isLoading.addLoading("modal");
    useGroup.store.id = id;
    modal.create = true;
    modal.edit = true;
    console.log(id);
    socket.emit("getById/" + isLoading.store.pageName, id);
  };

  // update
  const updateData = () => {
    isLoading.addLoading("modal");
    socket.emit("update/" + isLoading.store.pageName, {
      id: useGroup.store.id,
      group: useGroup.group,
    });
  };

  // delete
  const deleteData = () => {
    isLoading.addLoading("modal");
    socket.emit("delete/" + isLoading.store.pageName, 262);
  };

  // getAll listener
  socket.on(isLoading.store.pageName, (res) => {
    isLoading.removeLoading("getAllData");
    console.log(res);
    if (res.data.status === 404) return showError(res.data.error);
    store.pageData = res.data.pagination;
    isLoading.store.allData = res.data.records;
  });

  // created listener
  socket.on("created", (res) => {
    isLoading.removeLoading("modal");
    if (res.data.status === 400) return showError(res.data.error);
    modal.create = false;
  });

  // get by id listener
  socket.on("getById", (res) => {
    isLoading.removeLoading("modal");
    if (res.data.status === 404) return showError(res.data.error);
    useGroup.group.name = res.data?.name;
    useGroup.group.description = res.data?.description;
  });

  // upated listener
  socket.on("updated", (res) => {
    isLoading.removeLoading("modal");
    if (res.data.status === 404) return showError(res.data.error);
    modal.create = false;
  });

  // delete listener
  socket.on("deleted", (res) => {
    isLoading.removeLoading("modal");
    if (res.data.status === 404) return showError(res.data.error);
    modal.delete = false;
  });

  return {
    store,
    modal,
    createData,
    getAllData,
    getDataById,
    updateData,
    deleteData,
  };
});
