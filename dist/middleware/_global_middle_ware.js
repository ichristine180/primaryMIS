"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(app) {
  app.use(_bodyParser["default"].json()).use(_bodyParser["default"].urlencoded({
    extended: false
  })).use((0, _cors["default"])()).use((0, _morgan["default"])('dev'));
};

exports["default"] = _default;