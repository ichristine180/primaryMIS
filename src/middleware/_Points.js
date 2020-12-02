import db from "../database/connection/query";
import { getOne } from "../database/queries/Subjects";

import { getStudentById } from "../database/queries/Student";

import { getById } from "../database/queries/Level";

import { getTeacherById } from "../database/queries/User";
import { avoidDuplicates } from "../database/queries/Points";

export default {
  avoidDuplicate: async (req, res, next) => {
    const values= [req.body.studentid,req.body.levelid,req.body.subjectname,req.body.term];
    db.query(avoidDuplicates,values).then((pointRes) => {
      if (pointRes.rowCount) {
        res.status(400).send({
          status: 400,
          message: "Marks already exist!",
        });
      } else {
        next();
      }
    });
  },
  isLevelExists: async (req, res, next) => {
    const values= [req.body.levelid];
    db.query(getById,values).then((result) => {
      if (result.rowCount) {
        next();
      } else {
        res.status(400).send({
          status: 400,
          message: "Level doen't exist!",
        });
     
      }
    });
  },
  isSubjectExist: async (req, res, next) => {
    const values= [req.body.subjectname,req.body.levelid];
    db.query(getOne,values).then((result) => {
      if (result.rowCount) {
        next();
      } else {
        res.status(400).send({
          status: 400,
          message: `Subject doen't exist in this level !`,
        });
     
      }
    });
  },
  isStudentExist: async (req, res, next) => {
    const values= [req.body.studentid];
    db.query(getStudentById,values).then((result) => {
      if (result.rowCount) {
        next();
      } else {
        res.status(400).send({
          status: 400,
          message: "Student doen't exist!",
        });
     
      }
    });
  },
  isTeacherExist: async (req, res, next) => {
    const values= [req.body.teacherid];
    db.query(getTeacherById,values).then((result) => {
      if (result.rowCount) {
        next();
      } else {
        res.status(400).send({
          status: 400,
          message: "Teacher doen't exist!",
        });
     
      }
    });
  },
};
