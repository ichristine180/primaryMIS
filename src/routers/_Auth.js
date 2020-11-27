import AuthController from "../Controllers/Auth";
import Auth from "../middleware/Auth";
import Validator from "../middleware/_validator";
import express from "express";
const router = express.Router();
router.post(
  "/users/create",
  Validator("createUser"),
  Auth.verifyToken,
  Auth.isHeadMaster,
  Auth.emailExist,
  AuthController.createAccount
);
router.post("/login",Validator("login"), AuthController.login);
router.put(
  "/users/update/:userid",
  Validator("createUser"),
  Auth.verifyToken,
  Auth.isHeadMaster,
  Auth.emailExist,
  AuthController.updateuser
);
router.delete(
  "/users/delete/:userid",
  Auth.verifyToken,
  Auth.isHeadMaster,
  AuthController.deleteuser
);
router.put(
  "/users/delete/:userid",
  Auth.verifyToken,
  Auth.isHeadMaster,
  AuthController.hideuser
);
router.get(
  "/users/all",
  Auth.verifyToken,
  Auth.isHeadMaster,
  AuthController.getAll
);
router.get(
  "/users/:userid",
  Auth.verifyToken,
  Auth.isHeadMaster,
  AuthController.getById
);

router.get(
  "/teachers/",
  Auth.verifyToken,
  Auth.isHeadMaster,
  AuthController.getTeachers
);
router.post("/resetpassowrd", Validator("resetPassword"), AuthController.passwordRest);
export default router;
