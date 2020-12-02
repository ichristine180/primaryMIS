"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Auth = _interopRequireDefault(require("../Controllers/Auth"));

var _Auth2 = _interopRequireDefault(require("../middleware/Auth"));

var _validator = _interopRequireDefault(require("../middleware/_validator"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post("/users/create", (0, _validator["default"])("createUser"), _Auth2["default"].verifyToken, _Auth2["default"].isHeadMaster, _Auth2["default"].emailExist, _Auth["default"].createAccount);
router.post("/login", (0, _validator["default"])("login"), _Auth["default"].login);
router.put("/users/update/:userid", (0, _validator["default"])("createUser"), _Auth2["default"].verifyToken, _Auth2["default"].isHeadMaster, _Auth2["default"].emailExist, _Auth["default"].updateuser);
router["delete"]("/users/delete/:userid", _Auth2["default"].verifyToken, _Auth2["default"].isHeadMaster, _Auth["default"].deleteuser);
router.put("/users/delete/:userid", _Auth2["default"].verifyToken, _Auth2["default"].isHeadMaster, _Auth["default"].hideuser);
router.get("/users/all", _Auth2["default"].verifyToken, _Auth2["default"].isHeadMaster, _Auth["default"].getAll);
router.get("/users/:userid", _Auth2["default"].verifyToken, _Auth2["default"].isHeadMaster, _Auth["default"].getById);
router.get("/teachers/", _Auth2["default"].verifyToken, _Auth2["default"].isHeadMaster, _Auth["default"].getTeachers);
router.post("/resetpassowrd", (0, _validator["default"])("resetPassword"), _Auth["default"].passwordRest);
var _default = router;
exports["default"] = _default;