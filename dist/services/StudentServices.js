"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _query = _interopRequireDefault(require("../database/connection/query"));

var _Student = require("../database/queries/Student");

var _random = _interopRequireDefault(require("random"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StudentServices = /*#__PURE__*/function () {
  function StudentServices() {
    _classCallCheck(this, StudentServices);
  }

  _createClass(StudentServices, [{
    key: "registrationNumber",
    value: function registrationNumber(schoolNmae) {
      var regNumber = schoolNmae + '/' + (0, _moment["default"])(new Date()).year() + '/' + _random["default"]["int"](0, 1000);

      return regNumber;
    }
  }, {
    key: "create",
    value: function () {
      var _create2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var student;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _query["default"].query(_Student.create, data);

              case 2:
                student = _context.sent;
                return _context.abrupt("return", {
                  status: 200,
                  message: 'student registered',
                  student: student
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function create(_x) {
        return _create2.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "createLevels",
    value: function () {
      var _createLevels = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        var level;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _query["default"].query(_Student.createStudentLevel, data);

              case 2:
                level = _context2.sent;

                if (level.rowCount) {
                  console.log('level inserted');
                } else console.log('level not inserted');

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createLevels(_x2) {
        return _createLevels.apply(this, arguments);
      }

      return createLevels;
    }()
  }, {
    key: "createClass",
    value: function () {
      var _createClass2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
        var result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _query["default"].query(_Student.createStudentClass, data);

              case 2:
                result = _context3.sent;

                if (result.rowCount) {
                  console.log('class inserted');
                } else console.log('class not inserted');

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function createClass(_x3) {
        return _createClass2.apply(this, arguments);
      }

      return createClass;
    }()
  }, {
    key: "update",
    value: function () {
      var _update2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
        var student;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _query["default"].query(_Student.update, data);

              case 2:
                student = _context4.sent;

                if (!student.rowCount) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return", {
                  status: 200,
                  message: 'student updated',
                  student: student
                });

              case 7:
                return _context4.abrupt("return", {
                  status: 400,
                  message: 'oops! student not updated',
                  student: []
                });

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function update(_x4) {
        return _update2.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "deleteStudent",
    value: function () {
      var _deleteStudent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
        var student;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _query["default"].query(_Student.deleteRecord, data);

              case 2:
                student = _context5.sent;

                if (!student.rowCount) {
                  _context5.next = 7;
                  break;
                }

                return _context5.abrupt("return", {
                  status: 200,
                  message: 'student deleted'
                });

              case 7:
                return _context5.abrupt("return", {
                  status: 400,
                  message: 'student not deleted'
                });

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function deleteStudent(_x5) {
        return _deleteStudent.apply(this, arguments);
      }

      return deleteStudent;
    }() // getting all students in db

  }, {
    key: "getAll",
    value: function () {
      var _getAll2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var students;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _query["default"].query(_Student.getAll);

              case 2:
                students = _context6.sent;

                if (!(students.rows.length != 0)) {
                  _context6.next = 7;
                  break;
                }

                return _context6.abrupt("return", {
                  status: 200,
                  students: students,
                  message: 'data found'
                });

              case 7:
                return _context6.abrupt("return", {
                  status: 400,
                  message: 'no data to display',
                  students: []
                });

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getAll() {
        return _getAll2.apply(this, arguments);
      }

      return getAll;
    }() // getting all students by level

  }, {
    key: "getAllByLevel",
    value: function () {
      var _getAllByLevel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(data) {
        var students;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _query["default"].query(_Student.getByLevel, data);

              case 2:
                students = _context7.sent;

                if (!(students.rows.length != 0)) {
                  _context7.next = 7;
                  break;
                }

                return _context7.abrupt("return", {
                  status: 200,
                  students: students,
                  message: 'data found'
                });

              case 7:
                return _context7.abrupt("return", {
                  status: 400,
                  message: 'no data to display',
                  students: []
                });

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function getAllByLevel(_x6) {
        return _getAllByLevel.apply(this, arguments);
      }

      return getAllByLevel;
    }() // get all student in a class

  }, {
    key: "getAllByClass",
    value: function () {
      var _getAllByClass2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(data) {
        var students;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _query["default"].query(_Student.getAllByClass, data);

              case 2:
                students = _context8.sent;

                if (!(students.rows.length != 0)) {
                  _context8.next = 7;
                  break;
                }

                return _context8.abrupt("return", {
                  status: 200,
                  students: students,
                  message: 'data found'
                });

              case 7:
                return _context8.abrupt("return", {
                  status: 400,
                  message: 'no data to display',
                  students: []
                });

              case 8:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function getAllByClass(_x7) {
        return _getAllByClass2.apply(this, arguments);
      }

      return getAllByClass;
    }() //get one student

  }, {
    key: "getOne",
    value: function () {
      var _getOne2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(data) {
        var student;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _query["default"].query(_Student.getOne, data);

              case 2:
                student = _context9.sent;

                if (!student.rowCount) {
                  _context9.next = 7;
                  break;
                }

                return _context9.abrupt("return", {
                  status: 200,
                  students: student,
                  message: 'data found'
                });

              case 7:
                return _context9.abrupt("return", {
                  status: 400,
                  message: 'no data to display',
                  students: []
                });

              case 8:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function getOne(_x8) {
        return _getOne2.apply(this, arguments);
      }

      return getOne;
    }()
  }]);

  return StudentServices;
}();

var _default = new StudentServices();

exports["default"] = _default;