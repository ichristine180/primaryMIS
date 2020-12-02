import db from "../database/connection/query";
import { getOne } from "../database/queries/Subjects";

import { getStudentById } from "../database/queries/Student";

import { getById } from "../database/queries/Level";

import { getTeacherById } from "../database/queries/User";
import { avoidDuplicates } from "../database/queries/Points";

export default {
  avoidDuplicate: async (req, res, next) => {
     res.send("Hello")
  },
};
