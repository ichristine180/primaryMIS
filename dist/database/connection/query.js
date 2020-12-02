"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _connection = _interopRequireDefault(require("./connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_dotenv["default"].config();

var pool = _connection["default"].getPoolConnection();

var ExecuteQuery = function ExecuteQuery() {
  _classCallCheck(this, ExecuteQuery);

  this.query = function (text, params) {
    return new Promise(function (resolve, reject) {
      pool.connect();
      pool.query(text, params).then(function (res) {
        resolve(res);
      })["catch"](function (err) {
        reject(err);
        reject(err.detail);
      });
    });
  };
};

var _default = new ExecuteQuery();

exports["default"] = _default;