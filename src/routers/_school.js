import School from "../Controllers/School";
import Auth from "../middleware/Auth";
import schoolMideware from '../middleware/school';
import Validator from "../middleware/_validator";
import express from "express";
const router = express.Router();

router.post(
  "/create",
  Validator("schoolSchema"),
    schoolMideware[0],
  Auth.verifyToken,
  Auth.isHeadMaster,
  School.registerSchool
);
router.put(
  "/update/:schoolid",
  Validator("schoolSchema"),
  Auth.verifyToken,
  Auth.isHeadMaster,
  School.updateSchool
);
router.get(
  "/:email",
  Auth.verifyToken,
  Auth.isHeadMaster,
  School.getByEmail
);
router.get(
  "/getbyid/:schoolid",
  Auth.verifyToken,
  Auth.isHeadMaster,
  School.getById
);

export default router;
