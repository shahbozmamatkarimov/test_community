import { defineStore } from "pinia";
import axios from "axios";
import { useLoadingStore } from "./loading";
import { io } from "socket.io-client";
import { useNotification } from "@/composables/notification";
import * as XLSX from "xlsx/xlsx.mjs";

export const useTestStore = defineStore("test", () => {
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

  const store = reactive({
    id: "",
    isListener: true,
    files: [],
    uploadModal: false,
    uploadedFilesModal: false,
    uploadedFiles: [],
    jsonData: [],
    answers: {},
    trueAnswerId: false,
    submitAnswerModal: false,
  });

  const create = reactive({
    title: "",
    description: "",
    test_count: "",
    min_ball: "",
    start_time: "",
    end_time: "",
    is_time: false,
    is_message: false,
    variants: "",
    group_id: "",
  });

  // getAll
  const getAllData = (isSearching) => {
    if (!isLoading.search.search.tests) {
      return;
    }
    if (store.isListener || isSearching === "searching") {
      isLoading.addLoading("getAllData/tests");
    }
    store.isListener = false;
    if (isLoading.store.isSearching) {
      isLoading.store.isSearching = false;
      isLoading.store.pagination.tests = 1;
    }
    console.log(isLoading.search.search.tests);
    socket.emit("getAll/tests", {
      page: isLoading.store.pagination.tests,
      data: {
        search: isLoading.search.search.tests,
        searchType: isLoading.search.searchType.tests?.trim(),
      },
    });
  };

  // create
  const createData = () => {
    store.isListener = true;
    isLoading.addLoading("modal");
    socket.emit("create/tests", create);
  };

  // add student answers
  const addStudentAnswers = () => {
    store.isListener = true;
    isLoading.addLoading("modal");
    console.log(store.jsonData);
    console.log(store.answers);
    socket.emit("update/send_answers", {
      id: store.trueAnswerId,
      answers: Object.values(store.answers).join("")
    });
  };

  const readExcelFileFromServer = async (file) => {
    // -------------------------- server excel reader ------------------------
    const response = await fetch(baseUrl + "/" + file);
    const arrayBuffer = await response.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: "array" });
    const jsonData = XLSX.utils.sheet_to_json(
      workbook.Sheets[workbook.SheetNames[0]]
    );
    store.jsonData = jsonData;
    isLoading.removeLoading("getFileInfo");
  };

  function uploadFile() {
    isLoading.addLoading("modal");
    store.isListener = true;
    store.uploadedFiles = [];
    const formData = new FormData();
    formData.append("image", store.files[0].raw);
    formData.append("test_ids", store.id);
    axios
      .post(baseUrl + "/api/image/upload", formData, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        store.uploadedFiles.push(res.data.data);
        store.uploadModal = false;
        store.uploadedFilesModal = false;
        isLoading.removeLoading("modal");
      })
      .catch((err) => {
        console.log(err);
        showError("Fayl yuklashda xatolik!");
        isLoading.removeLoading("modal");
        store.uploadModal = false;
        store.uploadedFilesModal = false;
      });
  }

  // get by id
  const getDataById = (id) => {
    store.isListener = true;
    isLoading.addLoading("modal");
    store.id = id;
    isLoading.modal.create = true;
    isLoading.modal.edit = true;
    socket.emit("getById/tests", id);
  };

  // update
  const updateData = () => {
    store.isListener = true;
    isLoading.addLoading("modal");
    socket.emit("update/tests", {
      id: store.id,
      test: create,
    });
  };

  // update
  const updateStatus = (id, type, status) => {
    socket.emit("updateStatus/tests", {
      id,
      type,
      status,
    });
  };

  // delete
  const deleteData = () => {
    store.isListener = true;
    isLoading.addLoading("modal");
    socket.emit("delete/tests", store.id);
  };

  // socket listener
  socket.on("listener/tests", () => {
    getAllData();
  });

  // added student answers listener
  socket.on("updated/added_answers", (res) => {
    console.log(res);
    isLoading.removeLoading("modal");
    if (res.status === 404) return showError(res.error);
  });


  // getAll listener
  socket.on("tests", (res) => {
    console.log(res);
    isLoading.removeLoading("getAllData/tests");
    if (res.status === 404) return showError(res.error);
    isLoading.store.pageData.tests = res.data?.pagination;
    isLoading.store.allData.tests = res.data?.records;
  });

  // created listener
  socket.on("created/tests", (res) => {
    console.log(res);
    if (res.status === 400) {
      isLoading.removeLoading("modal");
      isLoading.modal.create = true;
      store.uploadModal = false;
      store.uploadedFilesModal = false;
      return showError("Iltimos, ma'lumotlarni to'g'ri kiriting!");
    }
    isLoading.modal.create = false;
    console.log(res.data);
    store.id = res.data;
    uploadFile();
  });

  // get by id listener
  socket.on("getById/tests", (res) => {
    isLoading.removeLoading("modal");
    if (res.status === 404) return showError(res.data.error);
    for (let i of Object.keys(create)) {
      console.log(i);
      create[i] = res.data[i];
    }
    create.group_id = [res.data.id];
  });

  // upated listener
  socket.on("updated/tests", (res) => {
    isLoading.removeLoading("modal");
    if (res.status === 404) return showError("Bunday guruh mavjud!");
    isLoading.modal.create = false;
  });

  // delete listener
  socket.on("deleted/tests", (res) => {
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
    addStudentAnswers,
    getAllData,
    getDataById,
    updateData,
    deleteData,
    uploadFile,
    updateStatus,
    readExcelFileFromServer,
  };
});
