"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _StudentServices = _interopRequireDefault(require("../services/StudentServices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Students = /*#__PURE__*/function () {
  function Students() {
    _classCallCheck(this, Students);
  }

  _createClass(Students, [{
    key: "regesterStudent",
    value: function () {
      var _regesterStudent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var regNumber, values, levelsValues, classValues;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                regNumber = _StudentServices["default"].registrationNumber("IPRC");
                values = [req.body.studentnames, req.body.parentsemail, req.body.parentsphonenumber, regNumber, (0, _moment["default"])(new Date()), "1"];
                levelsValues = [req.body.levelid, (0, _moment["default"])(new Date()).year()];
                classValues = [req.body.classid, (0, _moment["default"])(new Date()).year()];

                _StudentServices["default"].create(values).then(function (student) {
                  levelsValues.unshift(student.student.rows[0].studentid);
                  classValues.unshift(student.student.rows[0].studentid); // inserting level of student

                  _StudentServices["default"].createLevels(levelsValues); //inserting class of student


                  _StudentServices["default"].createClass(classValues);

                  res.status(student.status).send({
                    status: student.status,
                    message: student.message,
                    student: student.student.rows
                  });
                })["catch"](function (err) {
                  res.status(400).send({
                    status: 400,
                    error: err.message
                  });
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function regesterStudent(_x, _x2) {
        return _regesterStudent.apply(this, arguments);
      }

      return regesterStudent;
    }()
  }, {
    key: "updateStudent",
    value: function () {
      var _updateStudent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var values;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                values = [req.body.studentnames, req.body.parentsemail, req.body.parentsphonenumber, req.params.id];

                _StudentServices["default"].update(values).then(function (student) {
                  res.status(student.status).send({
                    status: student.status,
                    message: student.message,
                    student: student.student.rows
                  });
                })["catch"](function (err) {
                  res.status(400).send({
                    status: 400,
                    error: err.message
                  });
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function updateStudent(_x3, _x4) {
        return _updateStudent.apply(this, arguments);
      }

      return updateStudent;
    }()
  }, {
    key: "deleteStudent",
    value: function () {
      var _deleteStudent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _StudentServices["default"].deleteStudent([req.params.userid]).then(function (student) {
                  res.status(student.status).send({
                    status: student.status,
                    message: student.message
                  });
                })["catch"](function (err) {
                  res.status(400).send({
                    status: 400,
                    message: err.message
                  });
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function deleteStudent(_x5, _x6) {
        return _deleteStudent.apply(this, arguments);
      }

      return deleteStudent;
    }() // getting all data from database

  }, {
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _StudentServices["default"].getAll().then(function (students) {
                  res.status(students.status).send({
                    status: students.status,
                    message: students.message,
                    students: students.students.rows
                  });
                })["catch"](function (err) {
                  res.status(400).send({
                    message: err.message
                  });
                });

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getAll(_x7, _x8) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }() // getting all data from database by level

  }, {
    key: "getAllByLevel",
    value: function () {
      var _getAllByLevel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _StudentServices["default"].getAllByLevel([req.params.levelid, (0, _moment["default"])(new Date()).year()]).then(function (students) {
                  res.status(students.status).send({
                    status: students.status,
                    message: students.message,
                    students: students.students.rows
                  });
                })["catch"](function (err) {
                  res.status(400).send({
                    message: err.message
                  });
                });

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getAllByLevel(_x9, _x10) {
        return _getAllByLevel.apply(this, arguments);
      }

      return getAllByLevel;
    }() // getting all data from database by class

  }, {
    key: "getAllByClass",
    value: function () {
      var _getAllByClass = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _StudentServices["default"].getAllByClass([req.params.classid, (0, _moment["default"])(new Date()).year()]).then(function (students) {
                  res.status(students.status).send({
                    status: students.status,
                    message: students.message,
                    students: students.students.rows
                  });
                })["catch"](function (err) {
                  res.status(400).send({
                    message: err.message
                  });
                });

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getAllByClass(_x11, _x12) {
        return _getAllByClass.apply(this, arguments);
      }

      return getAllByClass;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _StudentServices["default"].getOne([req.params.studentid, (0, _moment["default"])(new Date()).year()]).then(function (students) {
                  res.status(students.status).send({
                    status: students.status,
                    message: students.message,
                    students: students.students.rows
                  });
                })["catch"](function (err) {
                  res.status(400).send({
                    message: err.message
                  });
                });

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function findById(_x13, _x14) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }()
  }]);

  return Students;
}();

var _default = new Students();

exports["default"] = _default;