"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _query = _interopRequireDefault(require("../database/connection/query"));

var _school = require("../database/queries/school");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SchoolService = /*#__PURE__*/function () {
  function SchoolService() {
    _classCallCheck(this, SchoolService);
  }

  _createClass(SchoolService, [{
    key: "createSchool",
    value: function () {
      var _createSchool2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var school;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _query["default"].query(_school.createSchool, data);

              case 2:
                school = _context.sent;

                if (!school) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", {
                  status: 200,
                  message: "School registered",
                  school: school
                });

              case 7:
                return _context.abrupt("return", {
                  status: 400,
                  message: "Error occured"
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createSchool(_x) {
        return _createSchool2.apply(this, arguments);
      }

      return createSchool;
    }()
  }, {
    key: "updateSchool",
    value: function () {
      var _updateSchool = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        var school;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _query["default"].query(_school.updateShool, data);

              case 2:
                school = _context2.sent;

                if (!school) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", {
                  status: 200,
                  message: "School updated",
                  school: school
                });

              case 7:
                return _context2.abrupt("return", {
                  status: 400,
                  message: "Error occured"
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function updateSchool(_x2) {
        return _updateSchool.apply(this, arguments);
      }

      return updateSchool;
    }()
  }, {
    key: "getByEmail",
    value: function () {
      var _getByEmail2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
        var school;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _query["default"].query(_school.getByEmail, data);

              case 2:
                school = _context3.sent;

                if (!school.rows[0]) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", {
                  status: 200,
                  school: school
                });

              case 7:
                return _context3.abrupt("return", {
                  status: 400,
                  message: "Error occured"
                });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getByEmail(_x3) {
        return _getByEmail2.apply(this, arguments);
      }

      return getByEmail;
    }()
  }, {
    key: "getById",
    value: function () {
      var _getById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
        var school;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _query["default"].query(_school.getByEmail, data);

              case 2:
                school = _context4.sent;

                if (!school.rows[0]) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return", {
                  status: 200,
                  school: school
                });

              case 7:
                return _context4.abrupt("return", {
                  status: 400,
                  message: "Error occured"
                });

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getById(_x4) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }()
  }]);

  return SchoolService;
}();

var _default = new SchoolService();

exports["default"] = _default;