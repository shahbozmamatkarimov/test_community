import { defineStore } from "pinia";
import axios from "axios";
import { useLoadingStore, useSocketStore } from "@/store";

export const useGroupStore = defineStore("group", () => {
  const store = reactive({
    id: "",
  });
  const group = reactive({
    name: "",
    description: "",
  });

  return { store, group };
});
