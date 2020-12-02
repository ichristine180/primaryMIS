"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getByStudent = exports.getByClassTeacher = exports.deletePem = exports.deleteClass = exports.update = exports.create = exports.getByLevel = exports.getById = exports.getAll = void 0;
var getAll = "select * from class where status = \"1\"";
exports.getAll = getAll;
var getById = "select * from class where classid = $1 and status =\"1\" "; //get all class in a given level

exports.getById = getById;
var getByLevel = "select * from class where levelId = $1 and status = \"1\"";
exports.getByLevel = getByLevel;
var create = "insert into class(classname,teacherid,levelid) values($1,$2,$3)";
exports.create = create;
var update = "update table class set classname = $1,teacherid = $2 where classid = $3";
exports.update = update;
var deleteClass = "update class set status = \"0\" where classid = $1 ";
exports.deleteClass = deleteClass;
var deletePem = "delete from class where classid =$1";
exports.deletePem = deletePem;
var getByClassTeacher = "select * from class where teacherid =$1";
exports.getByClassTeacher = getByClassTeacher;
var getByStudent = "select * from student_class where studentid = $1 and year =$2";
exports.getByStudent = getByStudent;