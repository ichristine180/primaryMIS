import StudentController from "../Controllers/StudentController";
import express from "express";
import Student from "../middleware/Students";
import Students from "../middleware/Students";
import Auth from "../middleware/Auth";
const router = express.Router();
router.post(
  "/create",
  Auth.verifyToken,
  Auth.notTeacher,
  Student.checkStudent,
  StudentController.regesterStudent
);
router.put(
  "/update/:id",
  Auth.verifyToken,
  Auth.notTeacher,
  Students.checkExist,
  StudentController.updateStudent
);
router.delete(
  "/delete/:userid",
  Auth.verifyToken,
  Auth.notTeacher,
  StudentController.deleteStudent
);
router.get(
  "/students/:levelid",
  Auth.verifyToken,
  StudentController.getAllByLevel
);
router.get(
  "/students/class/:classid",
  Auth.verifyToken,
  StudentController.getAllByClass
);
router.get("/:studentid", Auth.verifyToken, StudentController.findById);
export default router;