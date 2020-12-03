"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _Auth = _interopRequireDefault(require("./_Auth"));

var _Students = _interopRequireDefault(require("./_Students"));

var _school = _interopRequireDefault(require("./_school"));

var _Subject = _interopRequireDefault(require("./_Subject"));

var _Points = _interopRequireDefault(require("./_Points"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var api = (0, _express["default"])();
api.use("/api/user", _Auth["default"]);
api.use("/api/student", _Students["default"]);
api.use("/api/school", _school["default"]);
api.use("/api/subjects", _Subject["default"]);
api.use("/api/points", _Points["default"]);
api.use("/", function (req, res) {
  res.status(404).send({
    status: 404,
    message: "Page not found"
  });
});
var _default = api;
exports["default"] = _default;