"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable linebreak-style */

/* eslint-disable no-unused-vars */
var schemas = {};

var email = _joi["default"].string().trim().lowercase().email().required().label("Email is required and should look like this : example@email.com!");

var password = _joi["default"].string().min(3).required().label("Password is required,  it must have at least 5 letters");

schemas.createUser = _joi["default"].object().keys({
  names: _joi["default"].string().trim().required().min(5).label("First name and second name are required, it must have at least 3 letters and must contain only letters, underscores(_) and hyphens (-)"),
  email: email,
  phonenumber: _joi["default"].string().min(3).required().label("Phone is required,  it must have at least 3 letters and must contain only letters"),
  role: _joi["default"].string().valid("TEACHER", "DOS", "HEAD_MASTER").required().label("Role is required, it must be admin or moderator"),
  password: password
});
schemas.login = _joi["default"].object().keys({
  email: email,
  password: password
});
schemas.resetPassword = _joi["default"].object().keys({
  userid: _joi["default"].any().required().label("User id is required"),
  password: password
});
schemas.registerStudent = _joi["default"].object().keys({
  studentnames: _joi["default"].string().trim().required().min(5).label("First name and second name are required, it must have at least 3 letters and must contain only letters, underscores(_) and hyphens (-)"),
  parentsemail: _joi["default"].string().trim().lowercase().email().required().label("Email is required and should look like this : example@email.com!"),
  parentsphonenumber: _joi["default"].string().min(3).required().label("Phone is required,  it must have at least 3 letters and must contain only letters")
});
schemas.createSubject = _joi["default"].object().keys({
  subjectname: _joi["default"].string().trim().required().regex(/^[A-Za-z_-]+$/).min(5).label("Subject name are required, it must have at least 3 letters and must contain only letters, underscores(_) and hyphens (-)"),
  catmax: _joi["default"].number().required().label("CAT maximum marks is required and must be a number"),
  exammax: _joi["default"].number().min(3).required().label("Exam maximumu marks is required and must be number"),
  levelid: _joi["default"].any().required().label("Level id n is required"),
  teacherid: _joi["default"].any().required().label("Techer id is required")
});
schemas.schoolSchema = _joi["default"].object().keys({
  schoolName: _joi["default"].string().required().min(3).label("School name is required and must contain at least 3 letters"),
  schoolLogo: _joi["default"].string().required().min(3).label("School logo is required and must contain at least 3 letters"),
  schooolemail: _joi["default"].string().email().required().min(5).label("School email is required and must contain at least  letters, format xxx@gmail.com"),
  schoolPhone: _joi["default"].string().required().min(10).label("School phone is required and must contain at least 10 digits"),
  schoolWebsite: _joi["default"].string().required().min(5).label("School website is required and must contain at least 5 letters"),
  province: _joi["default"].string().required().min(3).label("School province is required and must contain at least 3 letters"),
  district: _joi["default"].string().required().min(3).label("School district is required and must contain at least 3 letters"),
  sector: _joi["default"].string().required().min(3).label("School sector is required and must contain at least 3 letters")
});
schemas.createPoints = _joi["default"].object().keys({
  levelid: _joi["default"].any().required().label("Level id is required"),
  subjectname: _joi["default"].string().min(3).required().label("Subject name is required"),
  catone: _joi["default"].number().min(1).required().label("Cat one marks is required"),
  cattwo: _joi["default"].number().min(1).required().label("Cat two marks is required"),
  exam: _joi["default"].number().min(1).required().label("Exam marks is is required"),
  studentid: _joi["default"].number().min(1).required().label("Student id  is required"),
  teacherid: _joi["default"].number().min(1).required().label("Teacher id is required"),
  term: _joi["default"].number().min(1).required().label("Term is required")
});
var _default = schemas;
exports["default"] = _default;