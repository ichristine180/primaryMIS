"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.avoidDuplicates = exports.getByClassInTerm = exports.getByStudentInTerm = exports.getBysubjectsInTerm = exports.getByClass = exports.getByStudent = exports.getBysubjects = exports.addExamPoint = exports.addCatTwoPoint = exports.update = exports.create = exports.getAll = void 0;
var getAll = "";
exports.getAll = getAll;
var create = "INSERT INTO points(\n\tlevelid, subjectname, catone, cattwo, exam, studentid, teacherid,term)\n    VALUES ($1, $2, $3, $4, $5, $6, $7,$8) returning *";
exports.create = create;
var update = "UPDATE points\n\tSET catone=$1, cattwo=$2, exam=$3\n    WHERE levelid = $4 and subjectname = $5 and studentid =$6 returning *";
exports.update = update;
var addCatTwoPoint = "UPDATE points\n\tSET cattwo=$1\n    WHERE levelid = $2 and subjectname = $3 and studentid =$4";
exports.addCatTwoPoint = addCatTwoPoint;
var addExamPoint = "UPDATE points\n\tSET exam=$1\n    WHERE levelid = $2 and subjectname = $3 and studentid =$4";
exports.addExamPoint = addExamPoint;
var getBysubjects = "SELECT subjects.levelid, subjects.subjectname, catone, cattwo, exam, students.studentid, teacherid,catMax,examMax,studentNames,levelName\n    FROM points inner join students \n    on students.studentid = points.studentid \n    inner join subjects \n    on subjects.subjectname = points.subjectname \n    and subjects.levelid \n    =points.levelid \n    inner join levels \n    on levels.levelid \n    = points.levelid \n    WHERE points.levelid \n    = $1 and points.subjectname = $2";
exports.getBysubjects = getBysubjects;
var getByStudent = "SELECT subjects.levelid, \n    subjects.subjectname, catone,term,\n    cattwo, exam, students.studentid, teacherid,catMax,examMax,studentNames,levelName,term\n    FROM points inner join students \n    on students.studentid = points.studentid \n    inner join subjects \n    on subjects.subjectname = points.subjectname \n    and subjects.levelid \n    =points.levelid \n    inner join levels \n    on levels.levelid \n    = points.levelid\n    WHERE points.studentid \n    = $1";
exports.getByStudent = getByStudent;
var getByClass = "SELECT subjects.levelid, subjects.subjectname, catone,term, cattwo, exam, st.studentid, teacherid,catMax,examMax,studentNames,levelName,classid\n    FROM points inner join students as st\n    on st.studentid = points.studentid inner join student_class as sc on st.studentid = sc.studentid\n    inner join subjects \n    on subjects.subjectname = points.subjectname \n    and subjects.levelid \n    =points.levelid \n    inner join levels \n    on levels.levelid \n    = points.levelid \n   WHERE sc.classid = $1";
exports.getByClass = getByClass;
var getBysubjectsInTerm = "SELECT subjects.levelid, \n   subjects.subjectname, catone,\n   cattwo, exam, students.studentid, teacherid,catMax,examMax,studentNames,levelName,term\n   FROM points inner join students \n   on students.studentid = points.studentid \n   inner join subjects \n   on subjects.subjectname = points.subjectname \n   and subjects.levelid \n   =points.levelid \n   inner join levels \n   on levels.levelid \n   = points.levelid \n   WHERE points.levelid \n   = $1 and points.subjectname = $2 and points.term = $3";
exports.getBysubjectsInTerm = getBysubjectsInTerm;
var getByStudentInTerm = "SELECT subjects.levelid, \n   subjects.subjectname, catone, cattwo, exam, students.studentid, \n   teacherid,catMax,examMax,studentNames,levelName,term\n   FROM points inner join students \n   on students.studentid = points.studentid \n   inner join subjects \n   on subjects.subjectname = points.subjectname \n   and subjects.levelid \n   =points.levelid \n   inner join levels \n   on levels.levelid \n   = points.levelid \n   WHERE points.studentid \n   = $1 and points.term = $2";
exports.getByStudentInTerm = getByStudentInTerm;
var getByClassInTerm = "SELECT subjects.levelid, subjects.subjectname, catone, cattwo,term,\n   exam, st.studentid, teacherid,catMax,examMax,studentNames,\n   levelName,classid,term\n   FROM points inner join students as st\n   on st.studentid = points.studentid inner join student_class as sc on st.studentid = sc.studentid\n   inner join subjects \n   on subjects.subjectname = points.subjectname \n   and subjects.levelid \n   =points.levelid \n   inner join levels \n   on levels.levelid \n   = points.levelid \n  WHERE sc.classid = $1 and points.term = $2";
exports.getByClassInTerm = getByClassInTerm;
var avoidDuplicates = "SELECT * FROM points WHERE studentid = $1";
exports.avoidDuplicates = avoidDuplicates;