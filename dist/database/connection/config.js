"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var config = {};
config.development = {
  host: process.env.SERVER,
  port: process.env.DB_PORT,
  database: process.env.DB,
  user: process.env.USER,
  password: process.env.PASSWORD
};
var _default = config;
exports["default"] = _default;