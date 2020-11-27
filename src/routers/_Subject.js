import express from "express";
import SubjectController from '../Controllers/SubjectController';
import Auth from "../middleware/Auth";
import Subject from '../middleware/Subject';
import Validator from "../middleware/_validator";
const router = express.Router();
router.post(
  "/create",
  Validator("createSubject"),
  Auth.verifyToken,
  Auth.notTeacher,
  Subject.checkSubjects,
  SubjectController.addSubject
);

export default router;