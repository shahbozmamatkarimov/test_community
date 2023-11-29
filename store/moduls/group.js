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
    weeks: [],
    startTime: "",
    subject_id: "",
    startDate: "",
  });

  const filter = reactive({
    subject_id: null,
    weeks: null,
    startDate: null,
    startTime: null,
  });

  const appliedFilter = reactive({});

  return { store, filter, group, appliedFilter };
});
