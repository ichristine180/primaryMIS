import AuthController from "../Controllers/Auth";
import Auth from "../middleware/Auth";
import express from "express";
const router = express.Router();
router.post("/users/create", AuthController.createAccount);
router.post("/login", AuthController.login);
router.put(
  "/users/update/:userid",
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
router.post("/user/resetPassowrd/", AuthController.passwordRest);
export default router;
