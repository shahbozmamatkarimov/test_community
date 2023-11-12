import { defineStore } from "pinia";
import axios from "axios";
import { useLoadingStore } from "./loading";
import { io } from "socket.io-client";
import { useNotification } from "@/composables/notification";
import * as XLSX from "xlsx";

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
  });

  const create = reactive({
    title: "",
    test_count: "",
    min_ball: "",
    start_time: "",
    end_time: "",
    is_time: false,
    is_message: false,
    variants: "",
    answers: "",
    group_id: "",
  });

  // getAll
  const getAllData = (isSearching) => {
    if (isSearching == "searchByName") {
      isLoading.search.searchType.tests = "name";
    }
    if (store.isListener || isSearching === "searching") {
      isLoading.addLoading("getAllData/tests");
    }
    store.isListener = false;
    if (isLoading.store.isSearching) {
      isLoading.store.isSearching = false;
      isLoading.store.pagination.tests = 1;
    }
    if (!isLoading.search.searchType) {
      isLoading.search.searchType.tests = "name";
    }
    socket.emit("getAll/tests", {
      page: isLoading.store.pagination.tests,
      data: {
        search: isLoading.search.search.tests,
        searchType: isLoading.search.searchType.tests,
      },
    });
  };

  // create
  const createData = () => {
    store.isListener = true;
    isLoading.addLoading("modal");
    socket.emit("create/tests", create);
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
  };

  const uploadTestFile = () => {
    isLoading.addLoading("modal");
    store.isListener = true;
    let formData;
    store.uploadedFiles = [];
    formData = new FormData();
    formData.append("image", store.files[0]?.raw);
    axios
      .post(baseUrl + "/api/testfile/upload/" + store.id, formData, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(async (res) => {
        console.log(res);
        store.uploadedFiles.push(res.data.data);
        store.uploadModal = false;
        store.uploadedFilesModal = true;
        isLoading.removeLoading("modal");
        store.uploadedFilesModal = true;
        readExcelFileFromServer(res.data.data?.file);
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("modal");
        store.uploadModal = false;
      });
  };

  // upload_files
  const uploadFile = () => {
    isLoading.addLoading("modal");
    store.isListener = true;
    let formData;
    store.uploadedFiles = [];
    for (let i of store.files) {
      console.log(i.raw);
      formData = new FormData();
      formData.append("image", i.raw);
      uploadFileToServer(formData);
    }
    store.uploadedFilesModal = true;
  };

  function uploadFileToServer(formData) {
    axios
      .post(baseUrl + "/api/image/upload/" + store.id, formData, {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        store.uploadedFiles.push(res.data.data);
        if (store.uploadedFiles?.length == store.files?.length) {
          store.uploadModal = false;
          store.uploadedFilesModal = true;
          isLoading.removeLoading("modal");
        }
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("modal");
        store.uploadModal = false;
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
    isLoading.removeLoading("modal");
    console.log(res);
    if (res.status === 400) return showError("Bunday test mavjud!");
    isLoading.modal.create = false;
  });

  // get by id listener
  socket.on("getById/tests", (res) => {
    isLoading.removeLoading("modal");
    if (res.status === 404) return showError(res.data.error);
    for (let i of Object.keys(create)) {
      console.log(i);
      create[i] = res.data[i];
    }
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
    uploadFile,
    createData,
    getAllData,
    getDataById,
    updateData,
    deleteData,
    uploadTestFile,
    readExcelFileFromServer,
  };
});
