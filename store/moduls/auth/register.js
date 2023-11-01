import { defineStore } from "pinia";
import axios from "axios";
import { useLoadingStore, useProfileStore } from "@/store";

export const useRegisterStore = defineStore("register", () => {
  const runtime = useRuntimeConfig();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();
  const useProfile = useProfileStore();

  const store = reactive({
    email: "",
    key: "",
    status: "",
  });

  function forgot_password(type) {
    isLoading.store.isLoading = true;
    axios
      .post(baseUrl + "request-reg-verification-key", null, {
        params: { loginValue: store.email, loginType: "EMAIL" },
        headers: {
          Accept: "*/*",
        },
      })
      .then(function (res) {
        isLoading.store.isLoading = false;
        console.log(res);
        localStorage.setItem("verify_otp", res.data?.data);
        store.status = 200;
        if (type == "change_email") {
          useProfile.modal.editEmailModal = false;
          useProfile.modal.editEmail2Modal = true;
        }
      })
      .catch(function (error) {
        isLoading.store.isLoading = false;
        console.log(error);
        if (error.response?.status == 400) {
          store.status = 400;
        }
      });
  }

  function verify_otp(type) {
    isLoading.store.isLoading = true;
    axios
      .post(baseUrl + "verify-reg-verification-key", null, {
        params: {
          token: localStorage.getItem("verify_otp"),
          key: store.key,
          loginType: "EMAIL",
        },
        headers: {
          Accept: "*/*",
        },
      })
      .then(function (res) {
        isLoading.store.isLoading = false;
        console.log(res);
        store.status = 200;
        if (res.data.data && type == "change_email") {
          useProfile.modal.editEmail2Modal = false;
        } else {
          store.status = 400;
        }
      })
      .catch(function (error) {
        isLoading.store.isLoading = false;
        console.log(error);
        if (error.response?.status == 400) {
          store.status = 400;
        }
      });
  }

  return { store, forgot_password, verify_otp };
});
