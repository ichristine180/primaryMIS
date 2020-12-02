"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _query = _interopRequireDefault(require("../database/connection/query"));

var _Student = require("../database/queries/Student");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Student = /*#__PURE__*/function () {
  function Student() {
    _classCallCheck(this, Student);
  }

  _createClass(Student, [{
    key: "checkStudent",
    value: function () {
      var _checkStudent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var student;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _query["default"].query(_Student.checkStudentExist, [req.body.studentnames, req.body.parentsphonenumber]);

              case 2:
                student = _context.sent;

                //res.send(student);
                if (!student.rowCount) {
                  next();
                } else {
                  res.status(400).send({
                    status: 400,
                    message: "student exist in our database!"
                  });
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function checkStudent(_x, _x2, _x3) {
        return _checkStudent.apply(this, arguments);
      }

      return checkStudent;
    }()
  }, {
    key: "checkExist",
    value: function () {
      var _checkExist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
        var student;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _query["default"].query(_Student.checkExistOnUpdate, [req.body.studentnames, req.body.parentsphonenumber, req.params.id]);

              case 2:
                student = _context2.sent;

                if (!student.rowCount) {
                  next();
                } else {
                  res.status(400).send({
                    status: 400,
                    message: "student names exist in our database!"
                  });
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function checkExist(_x4, _x5, _x6) {
        return _checkExist.apply(this, arguments);
      }

      return checkExist;
    }()
  }]);

  return Student;
}();

var _default = new Student();

exports["default"] = _default;