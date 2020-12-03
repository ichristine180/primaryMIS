"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _AuthServices = _interopRequireDefault(require("../services/AuthServices"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AuthController = /*#__PURE__*/function () {
  function AuthController() {
    _classCallCheck(this, AuthController);
  }

  _createClass(AuthController, [{
    key: "createAccount",
    value: function () {
      var _createAccount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var values;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                values = [req.body.names, req.body.email, req.body.phonenumber, req.body.role, _bcrypt["default"].hashSync(req.body.password, 10), "1", (0, _moment["default"])(new Date())];

                _AuthServices["default"].create(values).then(function (results) {
                  res.status(201).send({
                    token: results.token,
                    status: 201,
                    message: "User created Successfully",
                    user: results.user.rows
                  });
                })["catch"](function (err) {
                  res.status(400).send({
                    status: 400,
                    Error: err.message
                  });
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createAccount(_x, _x2) {
        return _createAccount.apply(this, arguments);
      }

      return createAccount;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = [req.body.email, req.body.password];

                _AuthServices["default"].login(data).then(function (results) {
                  if (results.user != undefined) {
                    res.status(200).send({
                      token: results.token,
                      status: 200,
                      message: results.message,
                      user: results.user.rows
                    });
                  } else {
                    res.status(400).send({
                      status: 400,
                      message: results.message
                    });
                  }
                })["catch"](function (err) {
                  res.status(400).send({
                    status: 400,
                    error: err
                  });
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function login(_x3, _x4) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "updateuser",
    value: function () {
      var _updateuser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var values;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                values = [req.params.userid, req.body.names, req.body.email, req.body.phonenumber, req.body.role];

                _AuthServices["default"].updateUser(values).then(function (results) {
                  if (results.user.rowCount) {
                    res.status(201).send({
                      status: 201,
                      message: results.message,
                      users: results.user.rows
                    });
                  } else {
                    res.status(400).send({
                      status: 400,
                      message: results.message
                    });
                  }
                })["catch"](function (err) {
                  res.status(400).send({
                    status: 400,
                    error: err.message
                  });
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function updateuser(_x5, _x6) {
        return _updateuser.apply(this, arguments);
      }

      return updateuser;
    }() // change password

  }, {
    key: "passwordRest",
    value: function () {
      var _passwordRest = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var values;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                values = [req.body.userid, _bcrypt["default"].hashSync(req.body.password, 10)];

                _AuthServices["default"].updatePassword(values).then(function (user) {
                  res.status(user.status).send({
                    status: user.status,
                    message: user.message
                  });
                })["catch"](function (err) {
                  res.status(400).send({
                    status: 400,
                    error: err.message
                  });
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function passwordRest(_x7, _x8) {
        return _passwordRest.apply(this, arguments);
      }

      return passwordRest;
    }() // deleting user permently from database

  }, {
    key: "deleteuser",
    value: function () {
      var _deleteuser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _AuthServices["default"].deleteuser([req.params.userid]).then(function (user) {
                  res.status(user.status).send({
                    status: user.status,
                    message: user.message
                  });
                })["catch"](function (err) {
                  res.status(400).send({
                    status: 400,
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

      function deleteuser(_x9, _x10) {
        return _deleteuser.apply(this, arguments);
      }

      return deleteuser;
    }() // deliting user by disabling their account

  }, {
    key: "hideuser",
    value: function () {
      var _hideuser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _AuthServices["default"].hideuser([req.params.userid]).then(function (user) {
                  res.status(user.status).send({
                    status: user.status,
                    message: user.message
                  });
                })["catch"](function (err) {
                  res.status(400).send({
                    status: 400,
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

      function hideuser(_x11, _x12) {
        return _hideuser.apply(this, arguments);
      }

      return hideuser;
    }() // getting all data from database

  }, {
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _AuthServices["default"].getAll().then(function (users) {
                  res.status(users.status).send({
                    status: users.status,
                    message: users.message,
                    users: users.users.rows
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

      function getAll(_x13, _x14) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }() // getting one user

  }, {
    key: "getById",
    value: function () {
      var _getById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _AuthServices["default"].findById([req.params.userid]).then(function (user) {
                  res.status(user.status).send({
                    status: user.status,
                    message: user.message,
                    user: user.user.rows
                  });
                })["catch"](function (err) {
                  res.status(400).send({
                    status: 400,
                    message: err.message
                  });
                });

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function getById(_x15, _x16) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }() //getting all teachers( user with teacher role)

  }, {
    key: "getTeachers",
    value: function () {
      var _getTeachers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _AuthServices["default"].findAllTeachers().then(function (users) {
                  res.status(users.status).send({
                    status: users.status,
                    message: users.message,
                    teachers: users.teachers.rows
                  });
                })["catch"](function (err) {
                  res.status(400).send({
                    status: 400,
                    message: err.message
                  });
                });

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function getTeachers(_x17, _x18) {
        return _getTeachers.apply(this, arguments);
      }

      return getTeachers;
    }() // get user by email

  }, {
    key: "findByEmail",
    value: function () {
      var _findByEmail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _AuthServices["default"].findByEmail([req.body.email]).then(function (user) {
                  res.status(user.status).send({
                    status: user.status,
                    message: user.message,
                    user: user.user.rows
                  });
                })["catch"](function (err) {
                  res.status(400).send({
                    status: 400,
                    error: err.message
                  });
                });

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function findByEmail(_x19, _x20) {
        return _findByEmail.apply(this, arguments);
      }

      return findByEmail;
    }()
  }]);

  return AuthController;
}();

var _default = new AuthController();

exports["default"] = _default;