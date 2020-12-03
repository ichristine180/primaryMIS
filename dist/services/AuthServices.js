"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _query = _interopRequireDefault(require("../database/connection/query"));

var _Auth = _interopRequireDefault(require("../middleware/Auth"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _User = require("../database/queries/User");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AuthService = /*#__PURE__*/function () {
  function AuthService() {
    _classCallCheck(this, AuthService);
  }

  _createClass(AuthService, [{
    key: "create",
    value: function () {
      var _create2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var token, user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _Auth["default"].generateToken(data[1]);

              case 2:
                token = _context.sent;
                _context.next = 5;
                return _query["default"].query(_User.create, data);

              case 5:
                user = _context.sent;
                return _context.abrupt("return", {
                  user: user,
                  token: token
                });

              case 7:
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
    key: "login",
    value: function () {
      var _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
        var token, user;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _Auth["default"].generateToken(data[0]);

              case 2:
                token = _context2.sent;
                _context2.next = 5;
                return _query["default"].query(_User.getByEmail, [data[0]]);

              case 5:
                user = _context2.sent;

                if (!user.rowCount) {
                  _context2.next = 14;
                  break;
                }

                if (!_bcrypt["default"].compareSync(data[1], user.rows[0].password)) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt("return", {
                  token: token,
                  user: user.rows,
                  message: "sussesfully logged in"
                });

              case 11:
                return _context2.abrupt("return", {
                  message: "password is incorrect"
                });

              case 12:
                _context2.next = 15;
                break;

              case 14:
                return _context2.abrupt("return", {
                  message: "Invalid email"
                });

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function login(_x2) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "updateUser",
    value: function () {
      var _updateUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
        var user;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _query["default"].query(_User.update, data);

              case 2:
                user = _context3.sent;

                if (!user.rowCount) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", {
                  message: "user updated",
                  user: user
                });

              case 7:
                return _context3.abrupt("return", {
                  message: "oops! user not updated"
                });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function updateUser(_x3) {
        return _updateUser.apply(this, arguments);
      }

      return updateUser;
    }()
  }, {
    key: "updatePassword",
    value: function () {
      var _updatePassword2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
        var user;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _query["default"].query(_User.updatePassword, data);

              case 2:
                user = _context4.sent;

                if (!user.rowCount) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return", {
                  message: "password changed",
                  status: 200
                });

              case 7:
                return _context4.abrupt("return", {
                  message: "oops! password not changed",
                  status: 400
                });

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function updatePassword(_x4) {
        return _updatePassword2.apply(this, arguments);
      }

      return updatePassword;
    }() // to delete user permently

  }, {
    key: "deleteuser",
    value: function () {
      var _deleteuser2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
        var user;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _query["default"].query(_User.deleteuser, data);

              case 2:
                user = _context5.sent;

                if (!user.rowCount) {
                  _context5.next = 7;
                  break;
                }

                return _context5.abrupt("return", {
                  status: 200,
                  message: "user deleted"
                });

              case 7:
                return _context5.abrupt("return", {
                  status: 400,
                  message: "user not deleted"
                });

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function deleteuser(_x5) {
        return _deleteuser2.apply(this, arguments);
      }

      return deleteuser;
    }() //to delete user by disabling their account

  }, {
    key: "hideuser",
    value: function () {
      var _hideuser2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data) {
        var user;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _query["default"].query(_User.hideuser, data);

              case 2:
                user = _context6.sent;

                if (!user.rowCount) {
                  _context6.next = 7;
                  break;
                }

                return _context6.abrupt("return", {
                  status: 200,
                  message: "user deleted"
                });

              case 7:
                return _context6.abrupt("return", {
                  status: 400,
                  message: "user not deleted"
                });

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function hideuser(_x6) {
        return _hideuser2.apply(this, arguments);
      }

      return hideuser;
    }() // getting all users in database

  }, {
    key: "getAll",
    value: function () {
      var _getAll2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var users;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _query["default"].query(_User.getAll);

              case 2:
                users = _context7.sent;

                if (!(users.rows.length != 0)) {
                  _context7.next = 7;
                  break;
                }

                return _context7.abrupt("return", {
                  status: 200,
                  users: users,
                  message: "data found"
                });

              case 7:
                return _context7.abrupt("return", {
                  status: 400,
                  message: "no data to display",
                  users: []
                });

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function getAll() {
        return _getAll2.apply(this, arguments);
      }

      return getAll;
    }() // find user by id

  }, {
    key: "findById",
    value: function () {
      var _findById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(data) {
        var user;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _query["default"].query(_User.getById, data);

              case 2:
                user = _context8.sent;

                if (!user.rowCount) {
                  _context8.next = 7;
                  break;
                }

                return _context8.abrupt("return", {
                  status: 200,
                  message: "user found",
                  user: user
                });

              case 7:
                return _context8.abrupt("return", {
                  status: 400,
                  message: "user not found",
                  user: []
                });

              case 8:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function findById(_x7) {
        return _findById.apply(this, arguments);
      }

      return findById;
    }() // find user by teacher role(getting al teachers in database)

  }, {
    key: "findAllTeachers",
    value: function () {
      var _findAllTeachers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        var teachers;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _query["default"].query(_User.getByRole);

              case 2:
                teachers = _context9.sent;

                if (!(teachers.rows.length != 0)) {
                  _context9.next = 7;
                  break;
                }

                return _context9.abrupt("return", {
                  status: 200,
                  message: "found",
                  teachers: teachers
                });

              case 7:
                return _context9.abrupt("return", {
                  status: 400,
                  message: "data not found",
                  teachers: []
                });

              case 8:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function findAllTeachers() {
        return _findAllTeachers.apply(this, arguments);
      }

      return findAllTeachers;
    }() // find user by email

  }, {
    key: "findByEmail",
    value: function () {
      var _findByEmail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(data) {
        var user;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _query["default"].query(_User.getByEmail, data);

              case 2:
                user = _context10.sent;

                if (!user.rowCount) {
                  _context10.next = 7;
                  break;
                }

                return _context10.abrupt("return", {
                  status: 200,
                  message: "user found",
                  user: user
                });

              case 7:
                return _context10.abrupt("return", {
                  status: 400,
                  message: "user not found",
                  user: []
                });

              case 8:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function findByEmail(_x8) {
        return _findByEmail.apply(this, arguments);
      }

      return findByEmail;
    }()
  }]);

  return AuthService;
}();

var _default = new AuthService();

exports["default"] = _default;