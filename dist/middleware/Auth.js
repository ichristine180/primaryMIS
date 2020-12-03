"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _query = _interopRequireDefault(require("../database/connection/query"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _User = require("../database/queries/User");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Auth = /*#__PURE__*/function () {
  function Auth() {
    _classCallCheck(this, Auth);

    _dotenv["default"].config();
  }

  _createClass(Auth, [{
    key: "verifyToken",
    value: function () {
      var _verifyToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var token, decoded;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                token = req.headers['access-token'];

                if (token) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", res.status(400).send({
                  'status': 400,
                  'error': 'unauthorized user'
                }));

              case 4:
                _context.next = 6;
                return _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);

              case 6:
                decoded = _context.sent;

                _query["default"].query(_User.getByEmail, [decoded.email]).then(function (result) {
                  if (!result.rows[0]) {
                    return res.status(400).send({
                      'status': 400,
                      'error': {
                        'message': 'invalid token'
                      }
                    });
                  } else {
                    req.user = {
                      id: result.rows[0].id
                    };
                    next();
                  }
                });

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(400).send({
                  'status': 400,
                  error: _context.t0.message
                }));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }));

      function verifyToken(_x, _x2, _x3) {
        return _verifyToken.apply(this, arguments);
      }

      return verifyToken;
    }()
  }, {
    key: "generateToken",
    value: function () {
      var _generateToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(email) {
        var token;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                token = _jsonwebtoken["default"].sign({
                  email: email
                }, process.env.JWT_SECRET, {
                  expiresIn: '40d'
                });
                return _context2.abrupt("return", token);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function generateToken(_x4) {
        return _generateToken.apply(this, arguments);
      }

      return generateToken;
    }()
  }, {
    key: "getEmailFromToken",
    value: function () {
      var _getEmailFromToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(token) {
        var email;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET).email;

              case 2:
                email = _context3.sent;
                return _context3.abrupt("return", email);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getEmailFromToken(_x5) {
        return _getEmailFromToken.apply(this, arguments);
      }

      return getEmailFromToken;
    }()
  }, {
    key: "isHeadMaster",
    value: function () {
      var _isHeadMaster = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
        var email;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _jsonwebtoken["default"].verify(req.headers['access-token'], process.env.JWT_SECRET).email;

              case 2:
                email = _context4.sent;

                _query["default"].query(_User.getByEmail, [email]).then(function (_ref) {
                  var rows = _ref.rows;

                  if (rows[0].role === 'HEAD_MASTER') {
                    next();
                  } else {
                    res.status(403).send({
                      status: 403,
                      message: "unauthorized User"
                    });
                  }
                })["catch"](function (err) {
                  res.send({
                    error: err.message
                  });
                });

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function isHeadMaster(_x6, _x7, _x8) {
        return _isHeadMaster.apply(this, arguments);
      }

      return isHeadMaster;
    }()
  }, {
    key: "isTeacher",
    value: function () {
      var _isTeacher = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
        var email;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _jsonwebtoken["default"].verify(req.headers['access-token'], process.env.JWT_SECRET).email;

              case 2:
                email = _context5.sent;

                _query["default"].query(_User.getByEmail, [email]).then(function (_ref2) {
                  var rows = _ref2.rows;

                  if (rows[0].role === 'TEACHER') {
                    next();
                  } else {
                    res.status(403).send({
                      status: 403,
                      message: "unauthorized User"
                    });
                  }
                })["catch"](function (err) {
                  res.send({
                    error: err.message
                  });
                });

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function isTeacher(_x9, _x10, _x11) {
        return _isTeacher.apply(this, arguments);
      }

      return isTeacher;
    }()
  }, {
    key: "isDOS",
    value: function () {
      var _isDOS = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res, next) {
        var email;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _jsonwebtoken["default"].verify(req.headers['access-token'], process.env.JWT_SECRET).email;

              case 2:
                email = _context6.sent;

                _query["default"].query(_User.getByEmail, [email]).then(function (_ref3) {
                  var rows = _ref3.rows;

                  if (rows[0].role === 'DOS') {
                    next();
                  } else {
                    res.status(403).send({
                      status: 403,
                      message: "unauthorized User"
                    });
                  }
                })["catch"](function (err) {
                  res.send({
                    error: err.message
                  });
                });

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function isDOS(_x12, _x13, _x14) {
        return _isDOS.apply(this, arguments);
      }

      return isDOS;
    }() //check if email exist on updating user

  }, {
    key: "emailExist",
    value: function () {
      var _emailExist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res, next) {
        var email;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                email = req.body.email;

                _query["default"].query(_User.checkExist, [req.params.userid, email]).then(function (user) {
                  if (user.rows.length == 0) {
                    next();
                  } else {
                    res.status(400).send({
                      status: 400,
                      error: 'email already exist in our database!'
                    });
                  }
                })["catch"](function (err) {
                  res.send({
                    error: err.message
                  });
                });

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function emailExist(_x15, _x16, _x17) {
        return _emailExist.apply(this, arguments);
      }

      return emailExist;
    }()
  }, {
    key: "notTeacher",
    value: function () {
      var _notTeacher = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res, next) {
        var email;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _jsonwebtoken["default"].verify(req.headers['access-token'], process.env.JWT_SECRET).email;

              case 2:
                email = _context8.sent;

                _query["default"].query(_User.getByEmail, [email]).then(function (_ref4) {
                  var rows = _ref4.rows;

                  if (rows[0].role != 'TEACHER') {
                    next();
                  } else {
                    res.status(403).send({
                      status: 403,
                      message: "unauthorized User"
                    });
                  }
                })["catch"](function (err) {
                  res.send({
                    error: err.message
                  });
                });

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function notTeacher(_x18, _x19, _x20) {
        return _notTeacher.apply(this, arguments);
      }

      return notTeacher;
    }()
  }]);

  return Auth;
}();

var _default = new Auth();

exports["default"] = _default;