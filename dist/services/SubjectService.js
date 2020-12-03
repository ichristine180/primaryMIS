"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _query = _interopRequireDefault(require("../database/connection/query"));

var _Subjects = require("../database/queries/Subjects");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SubjectService = /*#__PURE__*/function () {
  function SubjectService() {
    _classCallCheck(this, SubjectService);
  }

  _createClass(SubjectService, [{
    key: "create",
    value: function () {
      var _create2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var subject;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _query["default"].query(_Subjects.create, data);

              case 2:
                subject = _context.sent;
                return _context.abrupt("return", {
                  status: 200,
                  message: "subject Added",
                  response: subject
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
    key: "asignTeacherOnSubject",
    value: function () {
      var _asignTeacherOnSubject2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        var result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _query["default"].query(_Subjects.asignTeacherOnSubject, data);

              case 2:
                result = _context2.sent;

                if (result.rowCount) {
                  console.log("subject inserted");
                } else console.log("subject not inserted");

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function asignTeacherOnSubject(_x2) {
        return _asignTeacherOnSubject2.apply(this, arguments);
      }

      return asignTeacherOnSubject;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var Subjects;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _query["default"].query(_Subjects.getAll);

              case 2:
                Subjects = _context3.sent;

                if (!Subjects.rowCount) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", {
                  status: 200,
                  message: "data found",
                  response: Subjects
                });

              case 7:
                return _context3.abrupt("return", {
                  status: 400,
                  message: "data not found",
                  response: Subjects
                });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getAll() {
        return _getAll2.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "getByTeacher",
    value: function () {
      var _getByTeacher = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
        var Subjects;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _query["default"].query(_Subjects.getSubjectByTeacher, data);

              case 2:
                Subjects = _context4.sent;

                if (!Subjects.rowCount) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return", {
                  status: 200,
                  message: "data found",
                  response: Subjects
                });

              case 7:
                return _context4.abrupt("return", {
                  status: 400,
                  message: "data not found",
                  response: Subjects
                });

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getByTeacher(_x3) {
        return _getByTeacher.apply(this, arguments);
      }

      return getByTeacher;
    }()
  }, {
    key: "getByLevel",
    value: function () {
      var _getByLevel2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
        var Subjects;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _query["default"].query(_Subjects.getByLevel, data);

              case 2:
                Subjects = _context5.sent;

                if (!Subjects.rowCount) {
                  _context5.next = 7;
                  break;
                }

                return _context5.abrupt("return", {
                  status: 200,
                  message: "data found",
                  response: Subjects
                });

              case 7:
                return _context5.abrupt("return", {
                  status: 400,
                  message: "data not found",
                  response: Subjects
                });

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getByLevel(_x4) {
        return _getByLevel2.apply(this, arguments);
      }

      return getByLevel;
    }()
  }, {
    key: "update",
    value: function () {
      var _update2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data) {
        var subject;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _query["default"].query(_Subjects.update, data);

              case 2:
                subject = _context6.sent;

                if (!subject.rowCount) {
                  _context6.next = 7;
                  break;
                }

                return _context6.abrupt("return", {
                  status: 200,
                  message: "subject updated",
                  subject: subject
                });

              case 7:
                return _context6.abrupt("return", {
                  status: 400,
                  message: "oops! subject not updated",
                  subject: []
                });

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function update(_x5) {
        return _update2.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "deleteSubject",
    value: function () {
      var _deleteSubject2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(data) {
        var subject;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _query["default"].query(_Subjects.deleteSubject, data);

              case 2:
                subject = _context7.sent;

                if (!subject.rowCount) {
                  _context7.next = 7;
                  break;
                }

                return _context7.abrupt("return", {
                  status: 200,
                  message: 'subject deleted'
                });

              case 7:
                return _context7.abrupt("return", {
                  status: 400,
                  message: 'subject not deleted'
                });

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function deleteSubject(_x6) {
        return _deleteSubject2.apply(this, arguments);
      }

      return deleteSubject;
    }()
  }]);

  return SubjectService;
}();

var _default = new SubjectService();

exports["default"] = _default;