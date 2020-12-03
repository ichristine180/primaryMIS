"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _SubjectController = _interopRequireDefault(require("../Controllers/SubjectController"));

var _Auth = _interopRequireDefault(require("../middleware/Auth"));

var _Subject = _interopRequireDefault(require("../middleware/Subject"));

var _validator = _interopRequireDefault(require("../middleware/_validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post("/create", (0, _validator["default"])("createSubject"), _Auth["default"].verifyToken, _Auth["default"].notTeacher, _Subject["default"].checkSubjects, _SubjectController["default"].addSubject);
router.get("/all", _Auth["default"].verifyToken, _Auth["default"].notTeacher, _SubjectController["default"].getAll);
router.get("/:teacherid", _Auth["default"].verifyToken, _SubjectController["default"].getAllByTeacher);
router.get("/levels/:levelid", _Auth["default"].verifyToken, _SubjectController["default"].getAllByLevel);
router.put("/update/:subjectname/:levelid", _Auth["default"].verifyToken, _Auth["default"].notTeacher, _SubjectController["default"].update);
router["delete"]("/delete/:subjectname/:levelid", _Auth["default"].verifyToken, _Auth["default"].notTeacher, _SubjectController["default"].deleteSubject);
var _default = router;
exports["default"] = _default;