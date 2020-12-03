"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _lodash = _interopRequireDefault(require("lodash"));

var _schemas = _interopRequireDefault(require("./_schemas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable linebreak-style */
var _default = function _default(schema) {
  return function (req, res, next) {
    var data = req.body;

    if (_lodash["default"].has(_schemas["default"], schema)) {
      var chosenSchema = _lodash["default"].get(_schemas["default"], schema);

      var validationResult = _joi["default"].validate(data, chosenSchema, {
        abortEarly: false
      });

      if (!validationResult.error) {
        req.body = data;
        next();
      } else {
        var allErrors = [];
        validationResult.error.details.forEach(function (errors) {
          var findError = allErrors.filter(function (error) {
            return error === errors.context.label;
          });

          if (findError.length === 0) {
            allErrors.push(errors.context.label);
          }
        });
        return res.status(400).send({
          status: 400,
          error: {
            message: allErrors
          }
        });
      }
    }
  };
};

exports["default"] = _default;