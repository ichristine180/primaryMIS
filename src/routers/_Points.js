import express from "express";
import PointsController from "../Controllers/PointsController";
import Validator from "../middleware/_validator";
import pointsMiddleWare from "../middleware/_Points";

import db from "../database/connection/query";
import { avoidDuplicates } from "../database/queries/Points";

import Auth from "../middleware/Auth";
import userMiddleWare from "../middleware/user";
const router = express.Router();

router.post(
  "/create",
  Validator("createPoints"),
  Auth.verifyToken,
  pointsMiddleWare.isTeacherExist,
  pointsMiddleWare.isStudentExist,
  pointsMiddleWare.isLevelExists,
  pointsMiddleWare.isSubjectExist,
  pointsMiddleWare.avoidDuplicate,
  PointsController.create
);

router.put(
  "/update/:levelid/:subjectname/:studentid",
  Auth.verifyToken,
  userMiddleWare[1],
  PointsController.update
);
router.get(
  "/all/:levelid/:subjectname",
  Auth.verifyToken,
  userMiddleWare[1],
  PointsController.getBysubjects
);
router.get(
  "/AllInterm/:levelid/:subjectname",
  Auth.verifyToken,
  userMiddleWare[1],
  PointsController.getBysubjectsInTerm
);
router.get(
  "/studentspoints/:studentid",
  Auth.verifyToken,
  PointsController.getByStudentInTerm
);
router.get(
  "/studentsAll/:studentid",
  Auth.verifyToken,
  PointsController.getByStudents
);
router.get("/classAll/:classid", Auth.verifyToken, PointsController.getByClass);
router.get(
  "/classAllInTerm/:classid",
  Auth.verifyToken,
  PointsController.getByClassInTerm
);

export default router;
