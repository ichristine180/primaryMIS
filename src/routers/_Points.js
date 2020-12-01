import express from "express";
import PointsController from "../Controllers/PointsController";
import Validator from "../middleware/_validator";
import pointsMiddleWare from "../middleware/_Points";

import db from "../database/connection/query";
import { avoidDuplicates } from "../database/queries/Points";

import Auth from "../middleware/Auth";
import app from "../App";
import { async } from "regenerator-runtime";
const router = express.Router();

router.use("/create", Validator("createPoints"));
router.use(
  "/create",
  Auth.verifyToken
);

router.post("/create", PointsController.create);

router.put(
  "/update/:levelid/:subjectname/:studentid",
  Auth.verifyToken,
  Auth.isTeacher,
  PointsController.update
);
router.get(
  "/all/:levelid/:subjectname",
  Auth.verifyToken,
  Auth.isTeacher,
  PointsController.getBysubjects
);
router.get(
  "/AllInterm/:levelid/:subjectname",
  Auth.verifyToken,
  Auth.isTeacher,
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
