import express from "express";
import PointsController from "../Controllers/PointsController";
import Auth from "../middleware/Auth";
const router = express.Router();
router.post(
  "/create",
  Auth.verifyToken,
  Auth.isTeacher,
  PointsController.create
);
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
  PointsController.getBysubjectsInTerm,
);
router.get(
  "/studentspoints/:studentid",
  Auth.verifyToken,
  PointsController.getByStudentInTerm,
);
router.get(
  "/studentsAll/:studentid",
  Auth.verifyToken,
  PointsController.getByStudents,
);
router.get(
  "/classAll/:classid",
  Auth.verifyToken,
  PointsController.getByClass,
);
router.get(
  "/classAllInTerm/:classid",
  Auth.verifyToken,
  PointsController.getByClassInTerm,
);
export default router;
