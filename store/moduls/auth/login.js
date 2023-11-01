import { defineStore } from "pinia";
import axios from "axios";
import { useLoadingStore } from "@/store";

export const useLoginStore = defineStore("login", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();

  const store = reactive({
    value: "",
    password: "",
  });

  const errors = reactive({
    status: "",
  });

  function login() {
    isLoading.store.isLoading = true;
    console.log(store);
    axios
      .post(baseUrl + "login/email", null, {
        params: store,
        headers: {
          Accept: "*/*",
        },
      })
      .then(function (res) {
        console.log(res);
        localStorage.setItem("token", res.data.data);
        navigateTo("/");
        isLoading.store.isLoading = false;
        errors.status = 200;
      })
      .catch(function (error) {
        isLoading.store.isLoading = false;
        console.log(error);
        if (error.response?.status == 403) {
          errors.status = 403;
        } else if (error.response?.status == 400) {
          errors.status = 400;
        }
      });
  }

  return { store, errors, login };
});
