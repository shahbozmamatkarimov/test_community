import { defineStore } from "pinia";
import axios from "axios";
import { useLoadingStore, useSocketStore } from "@/store";

export const useGroupStore = defineStore("group", () => {
  const store = reactive({
    id: "",
    teachersList: [],
  });
  const group = reactive({
    name: "",
    description: "",
    weeks: [],
    startTime: "",
    subject_id: "",
    startDate: "",
    teacher_id: "",
  });

  const filter = reactive({
    subject_id: null,
    weeks: null,
    startDate: null,
    startTime: null,
    teacher_id: null,
  });

  const appliedFilter = reactive({});

  return { store, filter, group, appliedFilter };
});
