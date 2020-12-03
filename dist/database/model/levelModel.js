"use strict";

var _query = _interopRequireDefault(require("../connection/query"));

var _Level = require("../queries/Level");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

for (var i = 1; i <= 6; i++) {
  _query["default"].query(_Level.createLevel, [i, "P ".concat(i)]).then(function (response) {
    console.log(response.rows[0]);
  })["catch"](function (err) {
    console.log(err);
  });
}