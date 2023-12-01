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
    isListener: true,
    drawer: false,
  });

  // getAll
  const getAllData = (isSearching) => {
    let startTime;
    if (useGroup.appliedFilter.startTime) {
      startTime = isLoading.getTime(useGroup.appliedFilter.startTime);
      console.log(useGroup.appliedFilter.startTime);
    }
    if (isSearching == "searchByName") {
      isLoading.search.searchType.groups = "name";
    }
    if (store.isListener || isSearching === "searching") {
      isLoading.addLoading("getAllData/groups");
    }
    store.isListener = false;
    if (isLoading.store.isSearching) {
      isLoading.store.isSearching = false;
      isLoading.store.pagination.groups = 1;
    }
    if (!isLoading.search.searchType) {
      isLoading.search.searchType.groups = "name";
    }

    console.log(isLoading.search.search.groups);
    console.log(isLoading.search.searchType.groups);
    socket.emit("getAll/groups", {
      page: isLoading.store.pagination.groups,
      data: {
        search: isLoading.search.search.groups,
        searchType: isLoading.search.searchType.groups,
      },
      filter: {...useGroup.appliedFilter, startTime},
    });
  };

  // create
  const createData = () => {
    store.isListener = true;
    isLoading.addLoading("modal");
    const startTime = isLoading.getTime(useGroup.group.startTime);
    const weeks = useGroup.group.weeks.join(", ");
    socket.emit("create/" + isLoading.store.pageName, {
      ...useGroup.group,
      startTime,
      weeks,
    });
  };

  // get by id
  const getDataById = (id) => {
    store.isListener = true;
    isLoading.addLoading("modal");
    useGroup.store.id = id;
    isLoading.modal.create = true;
    isLoading.modal.edit = true;
    socket.emit("getById/" + isLoading.store.pageName, id);
  };

  // update
  const updateData = () => {
    store.isListener = true;
    isLoading.addLoading("modal");
    const weeks = useGroup.group.weeks.join(", ");
    const startTime = isLoading.getTime(useGroup.group.startTime);
    socket.emit("update/" + isLoading.store.pageName, {
      id: useGroup.store.id,
      group: {...useGroup.group, weeks, startTime},
    });
  };

  // delete
  const deleteData = () => {
    store.isListener = true;
    isLoading.addLoading("modal");
    socket.emit("delete/" + isLoading.store.pageName, useGroup.store.id);
  };

  // socket listener
  socket.on("listener", (res) => {
    getAllData();
  });

  // getAll listener
  socket.on("groups", (res) => {
    isLoading.removeLoading("getAllData/groups");
    if (res.status === 404) return showError(res.error);
    isLoading.store.pageData.groups = res.data?.pagination;
    isLoading.store.allData.groups = res.data?.records;
  });

  // created listener
  socket.on("created", (res) => {
    isLoading.removeLoading("modal");
    console.log(res);
    if (res.status === 400) return showError("Bunday guruh mavjud!");
    isLoading.modal.create = false;
  });

  // get by id listener
  socket.on("getById", (res) => {
    isLoading.removeLoading("modal");
    if (res.status === 404) return showError(res.data.error);
    useGroup.group.name = res.data?.name;
    useGroup.group.subject_id = res.data?.subject_id;
    useGroup.group.description = res.data?.description;
    useGroup.group.teacher_id = res.data?.teacher_id;
    useGroup.group.weeks = res.data?.weeks?.split(", ");
    const time = new Date().setHours(
      res.data?.startTime.slice(0, 2),
      res.data?.startTime.slice(3, 5),
      0
    );
    useGroup.group.startTime = time;
    useGroup.group.startDate = res.data?.startDate;
  });

  // upated listener
  socket.on("updated", (res) => {
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
    createData,
    getAllData,
    getDataById,
    updateData,
    deleteData,
  };
});
