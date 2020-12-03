"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _random = _interopRequireDefault(require("random"));

var _SchoolService = _interopRequireDefault(require("../services/SchoolService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var School = /*#__PURE__*/function () {
  function School() {
    _classCallCheck(this, School);
  }

  _createClass(School, [{
    key: "registerSchool",
    value: function () {
      var _registerSchool = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var values;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                values = [_random["default"]["int"](1, 4), req.body.schoolname, req.body.schoolLogo, req.body.schooolemail, req.body.schoolPhone, req.body.schoolWebsite, req.body.province, req.body.district, req.body.sector, (0, _moment["default"])(new Date())];

                _SchoolService["default"].createSchool(values).then(function (school) {
                  res.status(school.status).send({
                    status: school.status,
                    message: school.message,
                    school: school.school.rows[0]
                  });
                })["catch"](function (err) {
                  res.status(400).send({
                    status: 400,
                    error: err.message
                  });
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function registerSchool(_x, _x2) {
        return _registerSchool.apply(this, arguments);
      }

      return registerSchool;
    }()
  }, {
    key: "updateSchool",
    value: function () {
      var _updateSchool = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var values;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                values = [req.body.schoolname, req.body.schooolemail, req.body.schoolPhone, req.body.schoolWebsite, req.body.province, req.body.district, req.body.sector, req.params.schoolid];

                _SchoolService["default"].updateSchool(values).then(function (school) {
                  res.status(school.status).send({
                    status: school.status,
                    message: school.message,
                    school: school.school.rows[0]
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

      function updateSchool(_x3, _x4) {
        return _updateSchool.apply(this, arguments);
      }

      return updateSchool;
    }()
  }, {
    key: "getByEmail",
    value: function () {
      var _getByEmail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        var values;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                values = [req.params.email];

                _SchoolService["default"].getByEmail(values).then(function (school) {
                  res.status(school.status).send({
                    status: school.status,
                    message: school.message,
                    school: school.school.rows[0]
                  });
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

      function getByEmail(_x5, _x6) {
        return _getByEmail.apply(this, arguments);
      }

      return getByEmail;
    }()
  }, {
    key: "getById",
    value: function () {
      var _getById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        var values;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                values = [req.params.schoolid];

                _SchoolService["default"].getById(values).then(function (school) {
                  res.status(school.status).send({
                    status: school.status,
                    message: school.message,
                    school: school.school.rows[0]
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

      function getById(_x7, _x8) {
        return _getById.apply(this, arguments);
      }

      return getById;
    }()
  }]);

  return School;
}();

var _default = new School();

exports["default"] = _default;