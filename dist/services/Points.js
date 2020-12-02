"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _query = _interopRequireDefault(require("../database/connection/query"));

var _Points = require("../database/queries/Points");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Points = /*#__PURE__*/function () {
  function Points() {
    _classCallCheck(this, Points);
  }

  _createClass(Points, [{
    key: "create",
    value: function () {
      var _create2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var pointRes, points;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _query["default"].query(_Points.avoidDuplicates, [data[5]]);

              case 2:
                pointRes = _context.sent;
                console.log(pointRes.rowCount);

                if (!pointRes.rowCount) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", {
                  status: 400,
                  message: "Marks already exist"
                });

              case 8:
                _context.next = 10;
                return _query["default"].query(_Points.create, data);

              case 10:
                points = _context.sent;

                if (!points) {
                  _context.next = 15;
                  break;
                }

                return _context.abrupt("return", {
                  status: 200,
                  message: "Points added",
                  response: points
                });

              case 15:
                return _context.abrupt("return", {
                  status: 400,
                  message: "Error occured",
                  response: []
                });

              case 16:
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
    key: "update",
    value: function () {
      var _update2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        var points;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _query["default"].query(_Points.update, data);

              case 2:
                points = _context2.sent;

                if (!points) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", {
                  status: 200,
                  message: "Points updated",
                  response: points
                });

              case 7:
                return _context2.abrupt("return", {
                  status: 400,
                  message: "Error occured",
                  response: []
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function update(_x2) {
        return _update2.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "addCatTwoPoint",
    value: function () {
      var _addCatTwoPoint2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
        var points;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _query["default"].query(_Points.addCatTwoPoint, data);

              case 2:
                points = _context3.sent;

                if (!points) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", {
                  status: 200,
                  message: "Points added",
                  points: points
                });

              case 7:
                return _context3.abrupt("return", {
                  status: 400,
                  message: "Error occured",
                  points: []
                });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function addCatTwoPoint(_x3) {
        return _addCatTwoPoint2.apply(this, arguments);
      }

      return addCatTwoPoint;
    }()
  }, {
    key: "addExamPoint",
    value: function () {
      var _addExamPoint2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
        var points;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _query["default"].query(_Points.addExamPoint, data);

              case 2:
                points = _context4.sent;

                if (!points) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return", {
                  status: 200,
                  message: "Points added",
                  points: points
                });

              case 7:
                return _context4.abrupt("return", {
                  status: 400,
                  message: "Error occured",
                  points: []
                });

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function addExamPoint(_x4) {
        return _addExamPoint2.apply(this, arguments);
      }

      return addExamPoint;
    }()
  }, {
    key: "getBysubjects",
    value: function () {
      var _getBysubjects2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
        var points;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _query["default"].query(_Points.getBysubjects, data);

              case 2:
                points = _context5.sent;

                if (!points.rowCount) {
                  _context5.next = 7;
                  break;
                }

                return _context5.abrupt("return", {
                  status: 200,
                  message: "data found",
                  response: points
                });

              case 7:
                return _context5.abrupt("return", {
                  status: 400,
                  message: "data not found",
                  response: points
                });

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getBysubjects(_x5) {
        return _getBysubjects2.apply(this, arguments);
      }

      return getBysubjects;
    }()
  }, {
    key: "getByStudent",
    value: function () {
      var _getByStudent2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data) {
        var points;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _query["default"].query(_Points.getByStudent, data);

              case 2:
                points = _context6.sent;

                if (!points.rowCount) {
                  _context6.next = 7;
                  break;
                }

                return _context6.abrupt("return", {
                  status: 200,
                  message: "data found",
                  response: points
                });

              case 7:
                return _context6.abrupt("return", {
                  status: 400,
                  message: "data not found",
                  response: points
                });

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getByStudent(_x6) {
        return _getByStudent2.apply(this, arguments);
      }

      return getByStudent;
    }()
  }, {
    key: "getByClass",
    value: function () {
      var _getByClass2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(data) {
        var points;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _query["default"].query(_Points.getByClass, data);

              case 2:
                points = _context7.sent;

                if (!points.rowCount) {
                  _context7.next = 7;
                  break;
                }

                return _context7.abrupt("return", {
                  status: 200,
                  message: "data found",
                  response: points
                });

              case 7:
                return _context7.abrupt("return", {
                  status: 400,
                  message: "data not found",
                  response: points
                });

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function getByClass(_x7) {
        return _getByClass2.apply(this, arguments);
      }

      return getByClass;
    }()
  }, {
    key: "getBysubjectsInTerm",
    value: function () {
      var _getBysubjectsInTerm2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(data) {
        var points;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _query["default"].query(_Points.getBysubjectsInTerm, data);

              case 2:
                points = _context8.sent;

                if (!points.rowCount) {
                  _context8.next = 7;
                  break;
                }

                return _context8.abrupt("return", {
                  status: 200,
                  message: "data found",
                  response: points
                });

              case 7:
                return _context8.abrupt("return", {
                  status: 400,
                  message: "data not found",
                  response: points
                });

              case 8:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function getBysubjectsInTerm(_x8) {
        return _getBysubjectsInTerm2.apply(this, arguments);
      }

      return getBysubjectsInTerm;
    }()
  }, {
    key: "getByStudentInTerm",
    value: function () {
      var _getByStudentInTerm2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(data) {
        var points;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _query["default"].query(_Points.getByStudentInTerm, data);

              case 2:
                points = _context9.sent;

                if (!points.rowCount) {
                  _context9.next = 7;
                  break;
                }

                return _context9.abrupt("return", {
                  status: 200,
                  message: "data found",
                  response: points
                });

              case 7:
                return _context9.abrupt("return", {
                  status: 400,
                  message: "data not found",
                  response: points
                });

              case 8:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function getByStudentInTerm(_x9) {
        return _getByStudentInTerm2.apply(this, arguments);
      }

      return getByStudentInTerm;
    }()
  }, {
    key: "getByClassInTerm",
    value: function () {
      var _getByClassInTerm2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(data) {
        var points;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _query["default"].query(_Points.getByClassInTerm, data);

              case 2:
                points = _context10.sent;

                if (!points.rowCount) {
                  _context10.next = 7;
                  break;
                }

                return _context10.abrupt("return", {
                  status: 200,
                  message: "data found",
                  response: points
                });

              case 7:
                return _context10.abrupt("return", {
                  status: 400,
                  message: "data not found",
                  response: points
                });

              case 8:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function getByClassInTerm(_x10) {
        return _getByClassInTerm2.apply(this, arguments);
      }

      return getByClassInTerm;
    }()
  }]);

  return Points;
}();

var _default = new Points();

exports["default"] = _default;