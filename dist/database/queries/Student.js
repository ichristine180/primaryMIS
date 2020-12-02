"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkExistOnUpdate = exports.checkStudentExist = exports.getStudentById = exports.getAllByClass = exports.createStudentClass = exports.getByLevel = exports.getOne = exports.getAll = exports.deleteRecord = exports.deleteStudent = exports.createStudentLevel = exports.update = exports.create = void 0;
var create = "INSERT INTO students(\n\tstudentnames, parentsemail, parentsphonenumber,regestrationNumber,RegisteredDate,status)\n\tVALUES ($1, $2, $3, $4,$5,$6) returning *";
exports.create = create;
var update = "UPDATE students\n\tSET studentnames=$1, parentsemail=$2, parentsphonenumber=$3\n\tWHERE studentid = $4 returning *";
exports.update = update;
var createStudentLevel = "INSERT INTO student_level(\n\t\tstudentid, levelid, year)\n\t\tVALUES ($1, $2, $3)";
exports.createStudentLevel = createStudentLevel;
var deleteStudent = "UPDATE students\n\t\tSET status=$1\n\t\tWHERE studentid = $2";
exports.deleteStudent = deleteStudent;
var deleteRecord = "delete from students where studentid = $1";
exports.deleteRecord = deleteRecord;
var getAll = "select * from students where status = '1'";
exports.getAll = getAll;
var getOne = "select students.studentid, studentnames, parentsemail, \nparentsphonenumber,levelname,classname,student_level.year,student_level.levelid\nfrom students inner join student_class on student_class.studentid = students.studentid inner join class on student_class.classid = class.classid\ninner join\nstudent_level on students.studentid \n= student_level.studentid inner join levels on levels.levelid = student_level.levelid where students.studentid = $1 and student_level.year =$2";
exports.getOne = getOne;
var getByLevel = "select students.studentid, studentnames, parentsemail,\nparentsphonenumber,levelname,classname,student_level.year,student_level.levelid\nfrom students inner join student_class on student_class.studentid = students.studentid inner join class on student_class.classid = class.classid\ninner join\nstudent_level on students.studentid \n= student_level.studentid inner join levels on levels.levelid =student_level.levelid where student_level.levelid \n= $1 and students.status \n= '1' and student_level.year =$2";
exports.getByLevel = getByLevel;
var createStudentClass = "INSERT INTO student_class(\n\tstudentid, classid, year)\n\tVALUES ($1, $2, $3)";
exports.createStudentClass = createStudentClass;
var getAllByClass = "select students.studentid, studentnames, parentsemail, \n\tparentsphonenumber,levelname,classname,student_level.year,student_class.classid\n\tfrom students inner join student_class on student_class.studentid = students.studentid inner join class on student_class.classid = class.classid\n\tinner join\n\tstudent_level on students.studentid \n\t= student_level.studentid inner join levels on levels.levelid =student_level.levelid where student_class.classid \n\t= $1 and students.status \n\t= '1' and student_class.year =$2";
exports.getAllByClass = getAllByClass;
var getStudentById = "select students.studentid, studentnames, parentsemail, \n\tparentsphonenumber\n\tfrom students INNER JOIN student_level ON student_level.studentid=students.studentid  where students.studentid =$1"; // check student exist in database

exports.getStudentById = getStudentById;
var checkStudentExist = "select * from students where studentnames = $1 and parentsphonenumber = $2";
exports.checkStudentExist = checkStudentExist;
var checkExistOnUpdate = "select * from students where studentnames = $1 and parentsphonenumber = $2 and studentid != $3";
exports.checkExistOnUpdate = checkExistOnUpdate;