"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkExist = exports.deleteuser = exports.hideuser = exports.updatePassword = exports.update = exports.create = exports.getuserDetails = exports.getTeacherById = exports.getById = exports.getByRole = exports.getByEmail = exports.getAll = void 0;
var getAll = "SELECT userid,names, email, phonenumber, role, password, status\nFROM users where status='1'";
exports.getAll = getAll;
var getByEmail = "select userid,names,email,\nphonenumber,role,password,status from users where email =$1 and status = '1' ";
exports.getByEmail = getByEmail;
var getByRole = "select userid,names,email,phonenumber,role,password,status from users where role = 'TEACHER' and status = '1'";
exports.getByRole = getByRole;
var getById = "SELECT userid,names, email, phonenumber, role, password, status\nFROM users where status='1' and userid = $1";
exports.getById = getById;
var getTeacherById = " SELECT userid,names, email, phonenumber, role, password, status\nFROM users where status='1' and userid = $1 and role='TEACHER'";
exports.getTeacherById = getTeacherById;
var getuserDetails = "SELECT *\nFROM subjects_teachers inner join subjects on subjects_teachers.subjectid = subjects.subjectid inner join users on subjects_teachers.teacherid = users.userid where users.userid =$1 and users.status = '1'";
exports.getuserDetails = getuserDetails;
var create = "INSERT INTO users(\n\tnames, email, phonenumber, role, password, status, registereddate)\n\tVALUES ($1, $2, $3, $4, $5, $6, $7) returning *";
exports.create = create;
var update = "UPDATE users\n\tSET names=$2, email=$3, phonenumber=$4, role=$5\n\tWHERE userid = $1 returning *";
exports.update = update;
var updatePassword = "UPDATE users\n\tSET password=$2\n\tWHERE userid = $1";
exports.updatePassword = updatePassword;
var hideuser = "UPDATE users\n\tSET status='0'\n\tWHERE userid = $1";
exports.hideuser = hideuser;
var deleteuser = "delete from users where userid =$1"; //check email exist on updating user

exports.deleteuser = deleteuser;
var checkExist = "select * from users where email = $2 and userid !=$1 ";
exports.checkExist = checkExist;