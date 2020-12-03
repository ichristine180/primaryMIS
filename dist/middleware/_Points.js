"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _query = _interopRequireDefault(require("../database/connection/query"));

var _Subjects = require("../database/queries/Subjects");

var _Student = require("../database/queries/Student");

var _Level = require("../database/queries/Level");

var _User = require("../database/queries/User");

var _Points = require("../database/queries/Points");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  avoidDuplicate: function () {
    var _avoidDuplicate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              res.send("Hello");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function avoidDuplicate(_x, _x2, _x3) {
      return _avoidDuplicate.apply(this, arguments);
    }

    return avoidDuplicate;
  }()
};
exports["default"] = _default;