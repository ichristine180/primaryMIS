"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _moment = _interopRequireDefault(require("moment"));

var _query = _interopRequireDefault(require("../connection/query"));

var _User = require("../queries/User");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var user = ["admin", process.env.ADMIN_EMAIL, "0784871958", "HEAD_MASTER", _bcrypt["default"].hashSync(process.env.ADMIN_PASSWORD, 10), '1', (0, _moment["default"])(new Date())];

_query["default"].query(_User.create, user).then(function (userResponse) {})["catch"](function (err) {
  console.log(err);
});