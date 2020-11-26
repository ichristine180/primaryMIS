import School from "../Controllers/School";
import Auth from "../middleware/Auth";
import schoolMideware from '../middleware/school';
import express from "express";
const router = express.Router();

router.post(
  "/create",
    schoolMideware[0],
  Auth.verifyToken,
  Auth.isHeadMaster,
  School.registerSchool
);

export default router;
