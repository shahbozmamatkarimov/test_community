import { defineStore } from "pinia";
import axios from "axios";
import { io } from "socket.io-client";
import { useNotification } from "@/composables/notification";
import { useSocketStore, useLoadingStore } from "@/store";

export const useTeacherStore = defineStore("teacher", () => {
  const { showError, showSuccess } = useNotification();
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const token = localStorage.getItem("token");
  const useSocket = useSocketStore();

  const socket = io(baseUrl, {
    auth: {
      token: "Bearer " + token,
    },
  });

  const store = reactive({
    id: "",
    isListener: true,
    isTodayDate: false,
    isChangePassword: false,
    teacherInfo: "",
    isChangeTeacher: false,
    teacherStepFilter: 1,
  });

  const create = reactive({
    username: "",
    password: "",
    phone: "",
  });

  // getAll
  const getAllData = (isSearching) => {
    if (store.isListener || isSearching === "searching") {
      isLoading.addLoading("getAllData/teachers");
    }
    if (isSearching == "searchByUsername") {
      isLoading.search.searchType.teachers = "username";
    }
    store.isListener = false;
    if (isLoading.store.isSearching) {
      isLoading.store.isSearching = false;
      isLoading.store.pagination.teachers = 1;
    }
    if (!isLoading.search.searchType.teachers) {
      isLoading.search.searchType.teachers = "username";
    }
    console.log(isLoading.search.search.teachers);
    socket.emit("getAll/teachers", {
      page: isLoading.store.pagination.teachers,
      data: {
        search: isLoading.search.search.teachers,
        searchType: isLoading.search.searchType.teachers,
      },
    });
  };

  // create
  const createData = () => {
    const phone = create.phone.split(" ").join("");
    store.isListener = true;
    isLoading.addLoading("modal");
    socket.emit("create/teachers", {...create, phone});
  };

  // get by id
  const getDataById = (id, isGet) => {
    store.isListener = true;
    isLoading.addLoading("modal");
    store.id = id;
    store.isTodayDate = false;
    store.isChangePassword = false;
    store.isChangeTeacher = true;
    isLoading.modal.create = true;
    isLoading.modal.edit = true;
    if (isGet == "getTeacher") {
      useSocket.getAllData("searchByName");
    }
    socket.emit("getById/teachers", id);
  };

  // update
  const updateData = () => {
    create.start_date = new Date(create.start_date);
    const phone = create.phone.split(" ")?.join("");
    store.isListener = true;
    isLoading.addLoading("modal");
    socket.emit("update/teachers", {
      id: store.id,
      teacher: { ...create, phone},
    });
  };

  // delete
  const deleteData = () => {
    store.isListener = true;
    isLoading.addLoading("modal");
    socket.emit("delete/teachers", store.id);
  };

  // socket listener
  socket.on("listener/teachers", (res) => {
    getAllData();
  });

  // getAll listener
  socket.on("teachers", (res) => {
    isLoading.removeLoading("getAllData/teachers");
    console.log(res);
    if (res.status === 404) return showError(res.error);
    isLoading.store.pageData.teachers = res.data?.pagination;
    isLoading.store.allData.teachers = res.data?.records;
  });

  // created listener
  socket.on("created/teachers", (res) => {
    console.log(res);
    isLoading.removeLoading("modal");
    if (res.status === 400) {
      if (res.error === "teacher_id") {
        return showError("Bunday teacher id mavjud!");
      } else if (res.error === "username") {
        return showError("Bunday o'quvchi mavjud!");
      } else {
        return showError("Iltimos, ma'lumotlarni to'g'ri kiriting!");
      }
    }
    isLoading.modal.create = false;
  });

  // get by id listener
  socket.on("getById/teachers", (res) => {
    isLoading.removeLoading("modal");
    console.log(res);
    if (res.status === 404) return showError(res.data.error);
    create.username = res.data.username;
    create.phone = res.data.phone;
  });

  // upated listener
  socket.on("updated/teachers", (res) => {
    isLoading.removeLoading("modal");
    if (res.status === 400) {
      if (res.error === "teacher_id") {
        return showError("Bunday teacher id mavjud!");
      } else if (res.error === "username") {
        return showError("Bunday username mavjud!");
      } else {
        return showError("Iltimos, ma'lumotlarni to'g'ri kiriting!");
      }
    }
    isLoading.modal.create = false;
    isLoading.modal.edit = false;
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
