import { useLoadingStore } from "./moduls/loading";
import { useSocketStore } from "./moduls/socket";
import {useGroupStore} from "./moduls/group"
import { useStudentStore } from "./moduls/student";
import { useTestStore } from "./moduls/tests";
import { useResultsStore } from "./moduls/results";
import { useSubjectsStore } from "./moduls/subjects";
import { useTeacherStore } from "./moduls/teachers";

export {
    useLoadingStore,
    useSocketStore,
    useGroupStore,
    useStudentStore,
    useTestStore,
    useResultsStore,
    useSubjectsStore,
    useTeacherStore,
}

// Super admin
// Admin
// Operator
// Admistrator
// Teacher
// Student