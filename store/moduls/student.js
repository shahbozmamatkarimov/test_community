import { defineStore } from "pinia";
import axios from "axios";
import { io } from "socket.io-client";
import { useNotification } from "@/composables/notification";
import { useGroupStore, useSocketStore, useLoadingStore } from "@/store";

export const useStudentStore = defineStore("student", () => {
  const { showError, showSuccess } = useNotification();
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const token = localStorage.getItem("token");
  const useSocket = useSocketStore();
  const useGroup = useGroupStore();

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
    groupInfo: "",
    isChangeGroup: false,
  });

  const create = reactive({
    username: "",
    password: "",
    group_id: "",
    start_date: "",
    student_id: "",
  });

  // getAll
  const getAllData = (isSearching) => {
    if (store.isListener || isSearching === "searching") {
      isLoading.addLoading("getAllData/students");
    }
    store.isListener = false;
    if (isLoading.store.isSearching) {
      isLoading.store.isSearching = false;
      isLoading.store.pagination.students = 1;
    }
    if (!isLoading.search.searchType.students) {
      isLoading.search.searchType.students = "username";
    }
    socket.emit("getAll/students", {
      page: isLoading.store.pagination.students,
      data: {
        search: isLoading.search.search.students,
        searchType: isLoading.search.searchType.students
      },
    });
  };

  // create
  const createData = () => {
    store.isListener = true;
    isLoading.addLoading("modal");
    socket.emit("create/students", create);
  };

  // get by id
  const getDataById = (id, isGet) => {
    store.isListener = true;
    isLoading.addLoading("modal");
    store.id = id;
    store.isTodayDate = false;
    store.isChangePassword = false;
    store.isChangeGroup = true;
    isLoading.modal.create = true;
    isLoading.modal.edit = true;
    if (isGet == "getGroup") {
      useSocket.getAllData("searchByName");
    }
    socket.emit("getById/students", id);
  };

  // update
  const updateData = () => {
    create.start_date = new Date(create.start_date);
    store.isListener = true;
    isLoading.addLoading("modal");
    socket.emit("update/students", {
      id: store.id,
      student: create,
    });
  };

  // delete
  const deleteData = () => {
    store.isListener = true;
    isLoading.addLoading("modal");
    socket.emit("delete/students", store.id);
  };

  // socket listener
  socket.on("listener/students", (res) => {
    getAllData();
  });

  // getAll listener
  socket.on("students", (res) => {
    isLoading.removeLoading("getAllData/students");
    console.log(res);
    if (res.status === 404) return showError(res.error);
    isLoading.store.pageData.students = res.data?.pagination;
    isLoading.store.allData.students = res.data?.records;
  });

  // created listener
  socket.on("created/students", (res) => {
    console.log(res);
    isLoading.removeLoading("modal");
    if (res.status === 400) {
      if (res.error === "student_id") {
        return showError("Bunday student id mavjud!");
      } else if (res.error === "username") {
        return showError("Bunday o'quvchi mavjud!");
      } else {
        return showError("Iltimos, ma'lumotlarni to'g'ri kiriting!");
      }
    }
    isLoading.modal.create = false;
  });

  // get by id listener
  socket.on("getById/students", (res) => {
    isLoading.removeLoading("modal");
    console.log(res);
    if (res.status === 404) return showError(res.data.error);
    create.username = res.data.username;
    // create.group_id = res.data.group_id;
    create.start_date = res.data.start_date;
    create.student_id = res.data.student_id;
    store.groupInfo = res.data.group;
  });

  // upated listener
  socket.on("updated/students", (res) => {
    isLoading.removeLoading("modal");
    if (res.status === 400) {
      if (res.error === "student_id") {
        return showError("Bunday student id mavjud!");
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
