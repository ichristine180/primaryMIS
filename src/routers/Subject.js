import express from "express";
import SubjectController from '../Controllers/SubjectController';
import Auth from "../middleware/Auth";
const router = express.Router();
router.post(
  "/subject/create",
  Auth.verifyToken,
  Auth.notTeacher,
  SubjectController.addSubject
);