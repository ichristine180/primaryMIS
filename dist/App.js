"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("regenerator-runtime");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _tables = _interopRequireDefault(require("./database/migrations/tables"));

var _global_middle_ware = _interopRequireDefault(require("./middleware/_global_middle_ware"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _routers = _interopRequireDefault(require("./routers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var PORT = process.env.PORT || 7890;
var env = process.env.NODE_ENV;

_tables["default"].createTables["all"]();

(0, _global_middle_ware["default"])(app); //calling all routers

app.use('/', _routers["default"]);
app.listen(PORT, function () {
  console.log("up and running on PORT ".concat(PORT, " in ").concat(env, " environment"));
});
var _default = app;
exports["default"] = _default;