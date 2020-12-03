"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _School = _interopRequireDefault(require("../Controllers/School"));

var _Auth = _interopRequireDefault(require("../middleware/Auth"));

var _school = _interopRequireDefault(require("../middleware/school"));

var _validator = _interopRequireDefault(require("../middleware/_validator"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post("/create", (0, _validator["default"])("schoolSchema"), _school["default"][0], _Auth["default"].verifyToken, _Auth["default"].isHeadMaster, _School["default"].registerSchool);
router.put("/update/:schoolid", (0, _validator["default"])("schoolSchema"), _Auth["default"].verifyToken, _Auth["default"].isHeadMaster, _School["default"].updateSchool);
router.get("/:email", _Auth["default"].verifyToken, _Auth["default"].isHeadMaster, _School["default"].getByEmail);
router.get("/getbyid/:schoolid", _Auth["default"].verifyToken, _Auth["default"].isHeadMaster, _School["default"].getById);
var _default = router;
exports["default"] = _default;