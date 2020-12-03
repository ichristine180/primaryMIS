"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _StudentController = _interopRequireDefault(require("../Controllers/StudentController"));

var _express = _interopRequireDefault(require("express"));

var _Students = _interopRequireDefault(require("../middleware/Students"));

var _Auth = _interopRequireDefault(require("../middleware/Auth"));

var _validator = _interopRequireDefault(require("../middleware/_validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post("/create", (0, _validator["default"])("registerStudent"), _Auth["default"].verifyToken, _Auth["default"].notTeacher, _Students["default"].checkStudent, _StudentController["default"].regesterStudent);
router.put("/update/:id", (0, _validator["default"])("registerStudent"), _Auth["default"].verifyToken, _Auth["default"].notTeacher, _Students["default"].checkExist, _StudentController["default"].updateStudent);
router["delete"]("/delete/:userid", _Auth["default"].verifyToken, _Auth["default"].notTeacher, _StudentController["default"].deleteStudent);
router.get("/students/:levelid", _Auth["default"].verifyToken, _StudentController["default"].getAllByLevel);
router.get("/students/class/:classid", _Auth["default"].verifyToken, _StudentController["default"].getAllByClass);
router.get("/:studentid", _Auth["default"].verifyToken, _StudentController["default"].findById);
var _default = router;
exports["default"] = _default;