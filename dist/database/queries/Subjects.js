"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSubjectByTeacher = exports.deleteSubject = exports.hidesubjects = exports.update = exports.create = exports.asignTeacherOnSubject = exports.getOne = exports.getByLevel = exports.getAll = void 0;
var getAll = "select *from subjects where status ='1'";
exports.getAll = getAll;
var getByLevel = "select * from subjects inner join levels on subjects.levelid = levels.levelid where subjects.status ='1' and levels.levelid =$1";
exports.getByLevel = getByLevel;
var getOne = "select *from subjects where status = '1' and subjectname = $1 and levelid= $2";
exports.getOne = getOne;
var asignTeacherOnSubject = "INSERT INTO subjects_teachers(\n\tteacherid, levelid, subjectname)\n    VALUES ($1, $2, $3)";
exports.asignTeacherOnSubject = asignTeacherOnSubject;
var create = "INSERT INTO subjects(\n        subjectname, catmax, exammax, levelid, status)\n        VALUES ($1, $2, $3, $4, $5) returning *";
exports.create = create;
var update = "UPDATE subjects\n        SET subjectname=$3, catmax=$4, exammax=$5, levelid=$6\n        WHERE subjectname = $1 and levelid =$2 returning *";
exports.update = update;
var hidesubjects = "UPDATE subjects\n        SET status='0'\n        WHERE where subjectname = $1 and levelid =$2";
exports.hidesubjects = hidesubjects;
var deleteSubject = "DELETE FROM subjects\n        WHERE subjectname = $1 and levelid =$2"; //retrieve all subject assigned to one teacher

exports.deleteSubject = deleteSubject;
var getSubjectByTeacher = "SELECT teacherid, levelid, subjectname\n        FROM subjects_teachers where teacherid = $1";
exports.getSubjectByTeacher = getSubjectByTeacher;