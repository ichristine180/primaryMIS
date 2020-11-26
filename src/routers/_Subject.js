import express from "express";
import SubjectController from '../Controllers/SubjectController';
import Auth from "../middleware/Auth";
import Subject from '../middleware/Subject'
const router = express.Router();
router.post(
  "/create",
  Auth.verifyToken,
  Auth.notTeacher,
  Subject.checkSubjects,
  SubjectController.addSubject
);

export default router;