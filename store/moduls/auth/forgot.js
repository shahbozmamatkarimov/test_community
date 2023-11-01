import { defineStore } from "pinia";
import axios from "axios";
import { useLoadingStore } from "@/store";

export const useEmailStore = defineStore("new_password", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();

  const store = reactive({
    email: "",
    key: "",
    old_password: "",
    new_password: "",
    status: "",
  });

  function forgot_password() {
    isLoading.store.isLoading = true;
    axios
      .post(baseUrl + "password/request/reset-by-email", null, {
        params: { email: store.email },
        headers: {
          Accept: "*/*",
        },
      })
      .then(function (res) {
        isLoading.store.isLoading = false;
        console.log(res);
        navigateTo("/verify_otp");
        store.status = 200;
      })
      .catch(function (error) {
        isLoading.store.isLoading = false;
        console.log(error);
        if (error.response?.status == 400) {
          store.status = 400;
        }
      });
  }

  function verify_otp() {
    isLoading.store.isLoading = true;
    axios
      .post(baseUrl + "password/verify/by-email", null, {
        params: { email: store.email, key: store.key },
        headers: {
          Accept: "*/*",
        },
      })
      .then(function (res) {
        isLoading.store.isLoading = false;
        console.log(res);
        localStorage.setItem("token", res.data.data);
        navigateTo("/new_password");
        store.status = 200;
      })
      .catch(function (error) {
        isLoading.store.isLoading = false;
        console.log(error);
        if (error.response?.status == 400) {
          store.status = 400;
        }
      });
  }

  function new_password() {
    isLoading.store.isLoading = true;
    axios
      .post(baseUrl + "password/reset", null, {
        params: {
          token: localStorage.getItem("token"),
          newPassword: store.new_password,
          loginType: "EMAIL",
        },
        headers: {
          Accept: "*/*",
        },
      })
      .then(function (res) {
        isLoading.store.isLoading = false;
        console.log(res);
        navigateTo("/login");
        store.status = 200;
      })
      .catch(function (error) {
        isLoading.store.isLoading = false;
        console.log(error);
        navigateTo("/forgot_password");
      });
  }

  return { store, forgot_password, verify_otp, new_password };
});
