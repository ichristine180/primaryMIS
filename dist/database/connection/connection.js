"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_dotenv["default"].config();

var Connection = function Connection() {
  _classCallCheck(this, Connection);

  this.getPoolConnection = function () {
    return new _pg.Pool(_config["default"]['development']);
  };
};

var _default = new Connection();

exports["default"] = _default;