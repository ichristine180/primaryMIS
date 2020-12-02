"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _config = _interopRequireDefault(require("../connection/config"));

var _tables = require("../queries/tables");

var _connection = _interopRequireDefault(require("../connection/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pool = _connection["default"].getPoolConnection();

var CREATETABLE = function CREATETABLE() {
  _classCallCheck(this, CREATETABLE);

  this.createTables = {
    all: function () {
      var _all = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pool.connect().then(function () {
                  pool.query(_tables.createUserTable);
                  pool.query(_tables.createlevelTable);
                  pool.query(_tables.createClassTable);
                  pool.query(_tables.CreateStudentTable);
                  pool.query(_tables.createSubjectTable);
                  pool.query(_tables.createTeacherSubjectTable);
                  pool.query(_tables.createPointTable);
                  pool.query(_tables.createStudentLevelTable);
                  pool.query(_tables.createStudentClassTable);
                  pool.query(_tables.createSchoolProfileTable);
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function all() {
        return _all.apply(this, arguments);
      }

      return all;
    }()
  };
  this.dropTables = {
    all: function () {
      var _all2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                pool.connect().then(function () {
                  pool.query(_tables.dropUserTable);
                  pool.query(_tables.dropLevelTable);
                  pool.query(_tables.dropClassTable);
                  pool.query(_tables.dropStudentTable);
                  pool.query(_tables.dropSubjectTbale);
                  pool.query(_tables.dropSubjectTeacherTable);
                  pool.query(_tables.dropPointTable);
                  pool.query(_tables.dropStudentLevelTable);
                  pool.query(_tables.dropStudentClassTable);
                  pool.query(_tables.dropSchoolProfileTable);
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function all() {
        return _all2.apply(this, arguments);
      }

      return all;
    }()
  };
};

var _default = new CREATETABLE();

exports["default"] = _default;