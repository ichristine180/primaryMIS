"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _PointsController = _interopRequireDefault(require("../Controllers/PointsController"));

var _validator = _interopRequireDefault(require("../middleware/_validator"));

var _Points = _interopRequireDefault(require("../middleware/_Points"));

var _query = _interopRequireDefault(require("../database/connection/query"));

var _Points2 = require("../database/queries/Points");

var _Auth = _interopRequireDefault(require("../middleware/Auth"));

var _App = _interopRequireDefault(require("../App"));

var _regeneratorRuntime = require("regenerator-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use("/create", (0, _validator["default"])("createPoints"));
router.use("/create", _Auth["default"].verifyToken);
router.post("/create", _PointsController["default"].create);
router.put("/update/:levelid/:subjectname/:studentid", _Auth["default"].verifyToken, _Auth["default"].isTeacher, _PointsController["default"].update);
router.get("/all/:levelid/:subjectname", _Auth["default"].verifyToken, _Auth["default"].isTeacher, _PointsController["default"].getBysubjects);
router.get("/AllInterm/:levelid/:subjectname", _Auth["default"].verifyToken, _Auth["default"].isTeacher, _PointsController["default"].getBysubjectsInTerm);
router.get("/studentspoints/:studentid", _Auth["default"].verifyToken, _PointsController["default"].getByStudentInTerm);
router.get("/studentsAll/:studentid", _Auth["default"].verifyToken, _PointsController["default"].getByStudents);
router.get("/classAll/:classid", _Auth["default"].verifyToken, _PointsController["default"].getByClass);
router.get("/classAllInTerm/:classid", _Auth["default"].verifyToken, _PointsController["default"].getByClassInTerm);
var _default = router;
exports["default"] = _default;