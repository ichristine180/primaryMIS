"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Points = _interopRequireDefault(require("../services/Points"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PointsController = /*#__PURE__*/function () {
  function PointsController() {
    _classCallCheck(this, PointsController);
  }

  _createClass(PointsController, [{
    key: "create",
    value: function () {
      var _create = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var values;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                values = [req.body.levelid, req.body.subjectname, req.body.catone, req.body.cattwo, req.body.exam, req.body.studentid, req.body.teacherid, req.body.term];

                _Points["default"].create(values).then(function (results) {
                  if (results.status !== 200) {
                    res.status(results.status).send({
                      status: results.status,
                      message: results.message
                    });
                  } else {
                    res.status(results.status).send({
                      status: results.status,
                      message: results.message,
                      Points: results.response.rows
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
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        var values;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                values = [req.body.catone, req.body.cattwo, req.body.exam, req.params.levelid, req.params.subjectname, req.params.studentid];

                _Points["default"].update(values).then(function (result) {
                  // console.log(result);
                  res.status(result.status).send({
                    status: result.status,
                    message: result.message,
                    points: result.response.rows
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

      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }

      return update;
    }() // getting all points from database by subjects

  }, {
    key: "getBysubjects",
    value: function () {
      var _getBysubjects = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _Points["default"].getBysubjects([req.params.levelid, req.params.subjectname]).then(function (result) {
                  res.status(result.status).send({
                    status: result.status,
                    message: result.message,
                    points: result.response.rows
                  });
                })["catch"](function (err) {
                  res.status(400).send({
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

      function getBysubjects(_x5, _x6) {
        return _getBysubjects.apply(this, arguments);
      }

      return getBysubjects;
    }() // getting all points from database by subjects in term

  }, {
    key: "getBysubjectsInTerm",
    value: function () {
      var _getBysubjectsInTerm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _Points["default"].getBysubjectsInTerm([req.params.levelid, req.params.subjectname, req.body.term]).then(function (result) {
                  res.status(result.status).send({
                    status: result.status,
                    message: result.message,
                    points: result.response.rows
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

      function getBysubjectsInTerm(_x7, _x8) {
        return _getBysubjectsInTerm.apply(this, arguments);
      }

      return getBysubjectsInTerm;
    }() // getting all points from database by students in term

  }, {
    key: "getByStudentInTerm",
    value: function () {
      var _getByStudentInTerm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _Points["default"].getByStudentInTerm([req.params.studentid, req.body.term]).then(function (result) {
                  res.status(result.status).send({
                    status: result.status,
                    message: result.message,
                    points: result.response.rows
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

      function getByStudentInTerm(_x9, _x10) {
        return _getByStudentInTerm.apply(this, arguments);
      }

      return getByStudentInTerm;
    }() // getting all points from database by students

  }, {
    key: "getByStudents",
    value: function () {
      var _getByStudents = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _Points["default"].getByStudent([req.params.studentid]).then(function (result) {
                  res.status(result.status).send({
                    status: result.status,
                    message: result.message,
                    points: result.response.rows
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

      function getByStudents(_x11, _x12) {
        return _getByStudents.apply(this, arguments);
      }

      return getByStudents;
    }() // getting all points from database by students

  }, {
    key: "getByClass",
    value: function () {
      var _getByClass = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _Points["default"].getByClass([req.params.classid]).then(function (result) {
                  res.status(result.status).send({
                    status: result.status,
                    message: result.message,
                    points: result.response.rows
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

      function getByClass(_x13, _x14) {
        return _getByClass.apply(this, arguments);
      }

      return getByClass;
    }() // getting all points from database by students

  }, {
    key: "getByClassInTerm",
    value: function () {
      var _getByClassInTerm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _Points["default"].getByClassInTerm([req.params.classid, req.body.term]).then(function (result) {
                  res.status(result.status).send({
                    status: result.status,
                    message: result.message,
                    points: result.response.rows
                  });
                })["catch"](function (err) {
                  res.status(400).send({
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

      function getByClassInTerm(_x15, _x16) {
        return _getByClassInTerm.apply(this, arguments);
      }

      return getByClassInTerm;
    }()
  }]);

  return PointsController;
}();

var _default = new PointsController();

exports["default"] = _default;