"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SubjectService = _interopRequireDefault(require("../services/SubjectService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SubjectController = /*#__PURE__*/function () {
  function SubjectController() {
    _classCallCheck(this, SubjectController);
  }

  _createClass(SubjectController, [{
    key: "addSubject",
    value: function () {
      var _addSubject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
        var values, teacherSubject;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                values = [req.body.subjectname, req.body.catmax, req.body.exammax, req.body.levelid, "1"];
                teacherSubject = [req.body.teacherid, req.body.levelid];

                _SubjectService["default"].create(values).then(function (results) {
                  teacherSubject.push(results.response.rows[0].subjectname);

                  _SubjectService["default"].asignTeacherOnSubject(teacherSubject);

                  res.status(results.status).send({
                    status: results.status,
                    message: results.message,
                    subject: results.response.rows
                  });
                })["catch"](function (err) {
                  res.status(400).send({
                    status: 400,
                    error: err.message
                  });
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function addSubject(_x, _x2) {
        return _addSubject.apply(this, arguments);
      }

      return addSubject;
    }() // getting all data from database

  }, {
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _SubjectService["default"].getAll().then(function (result) {
                  res.status(result.status).send({
                    status: result.status,
                    message: result.message,
                    Subjects: result.response.rows
                  });
                })["catch"](function (err) {
                  res.status(400).send({
                    message: err.message
                  });
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getAll(_x3, _x4) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }() // getting all data from database by teacher

  }, {
    key: "getAllByTeacher",
    value: function () {
      var _getAllByTeacher = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _SubjectService["default"].getByTeacher([req.params.teacherid]).then(function (result) {
                  res.status(result.status).send({
                    status: result.status,
                    message: result.message,
                    Subjects: result.response.rows
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

      function getAllByTeacher(_x5, _x6) {
        return _getAllByTeacher.apply(this, arguments);
      }

      return getAllByTeacher;
    }() // getting all data from database by level

  }, {
    key: "getAllByLevel",
    value: function () {
      var _getAllByLevel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _SubjectService["default"].getByLevel([req.params.levelid]).then(function (result) {
                  res.status(result.status).send({
                    status: result.status,
                    message: result.message,
                    Subjects: result.response.rows
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

      function getAllByLevel(_x7, _x8) {
        return _getAllByLevel.apply(this, arguments);
      }

      return getAllByLevel;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
        var values;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                values = [req.params.subjectname, req.params.levelid, req.body.subjectname, req.body.catmax, req.body.exammax, req.body.levelid];

                _SubjectService["default"].update(values).then(function (result) {
                  //console.log(result);
                  res.status(result.status).send({
                    status: result.status,
                    message: result.message,
                    subject: result.subject.rows
                  });
                })["catch"](function (err) {
                  res.status(400).send({
                    status: 400,
                    error: err.message
                  });
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function update(_x9, _x10) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "deleteSubject",
    value: function () {
      var _deleteSubject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _SubjectService["default"].deleteSubject([req.params.subjectname, req.params.levelid]).then(function (result) {
                  res.status(result.status).send({
                    status: result.status,
                    message: result.message
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

      function deleteSubject(_x11, _x12) {
        return _deleteSubject.apply(this, arguments);
      }

      return deleteSubject;
    }()
  }]);

  return SubjectController;
}();

var _default = new SubjectController();

exports["default"] = _default;