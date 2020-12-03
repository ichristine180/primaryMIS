"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropStudentClassTable = exports.dropStudentLevelTable = exports.dropSubjectTeacherTable = exports.dropPointTable = exports.dropSubjectTbale = exports.dropClassTable = exports.dropLevelTable = exports.dropStudentTable = exports.dropSchoolProfileTable = exports.dropUserTable = exports.createSchoolProfileTable = exports.createStudentClassTable = exports.createStudentLevelTable = exports.createPointTable = exports.createTeacherSubjectTable = exports.createSubjectTable = exports.createClassTable = exports.createlevelTable = exports.CreateStudentTable = exports.createUserTable = void 0;
// query to create tables
var createUserTable = "CREATE TABLE IF NOT EXISTS users(userId SERIAL PRIMARY KEY,\n    names VARCHAR(100) NOT NULL,email VARCHAR(255) NOT NULL UNIQUE,\nphoneNumber VARCHAR(13) NOT NULL UNIQUE,\nrole VARCHAR(40) NOT NULL,\npassword VARCHAR(1024) NOT NULL,status VARCHAR(10) NOT NULL,RegisteredDate date not null)";
exports.createUserTable = createUserTable;
var CreateStudentTable = "CREATE TABLE IF NOT EXISTS students(studentId SERIAL PRIMARY KEY,\n    studentNames VARCHAR(100) NOT NULL,\n    parentsEmail VARCHAR(255) NOT NULL,\n    parentsPhoneNumber VARCHAR(13) NOT NULL,\n    regestrationNumber Varchar(200) NOT NULL,\n    RegisteredDate date not null,\n    status VARCHAR(10) NOT NULL)";
exports.CreateStudentTable = CreateStudentTable;
var createlevelTable = "CREATE TABLE IF NOT EXISTS levels(levelId SERIAL PRIMARY KEY,\n    levelName VARCHAR(100) NOT NULL UNIQUE,\n    status VARCHAR(10) NOT NULL)";
exports.createlevelTable = createlevelTable;
var createClassTable = "CREATE TABLE IF NOT EXISTS class(classId  SERIAL PRIMARY KEY, \n    className VARCHAR(100) NOT NULL UNIQUE,teacherID integer not null UNIQUE,\n    levelID INTEGER not null,\n    status varchar(5) not null,\n    FOREIGN KEY(teacherID) REFERENCES users(userId) on delete cascade on update cascade,\n    FOREIGN KEY(levelID) REFERENCES levels(levelId) on delete cascade on update cascade)";
exports.createClassTable = createClassTable;
var createSubjectTable = "CREATE TABLE IF NOT EXISTS subjects(\n    subjectName VARCHAR(100) NOT NULL,\n    catMax integer,\n    examMax integer,\n    levelId integer not null,\n    status varchar(10) not null,\n    PRIMARY KEY(subjectName,levelID),\n    FOREIGN KEY(levelID) REFERENCES levels(levelId) on delete cascade on update cascade)";
exports.createSubjectTable = createSubjectTable;
var createTeacherSubjectTable = "CREATE TABLE IF NOT EXISTS subjects_teachers(teacherId integer not null,\n    levelID integer not null,\n    subjectName varchar(100) not null,\n    PRIMARY KEY(subjectName,levelID),\n    FOREIGN KEY(subjectName,levelID) REFERENCES subjects(subjectName,levelID) on delete cascade on update cascade,\n    FOREIGN KEY(teacherID) REFERENCES users(userId) on delete cascade on update cascade)";
exports.createTeacherSubjectTable = createTeacherSubjectTable;
var createPointTable = "CREATE TABLE IF NOT EXISTS points(\n    levelID integer not null,\n    subjectName varchar(100) not null,\n    catOne float default 0.0,\n    catTwo float default  0.0,\n    exam float default 0.0,\n    studentId integer not null,\n    teacherId integer not null,\n    term varchar(50) not null,\n    PRIMARY KEY(studentId,subjectName,levelID,term),\n    FOREIGN KEY(subjectName,levelID) REFERENCES subjects(subjectName,levelID) on delete cascade on update cascade,\n    FOREIGN KEY(teacherID) REFERENCES users(userId) on delete cascade on update cascade,\n    FOREIGN KEY(studentId) REFERENCES students(studentId ) on delete cascade on update cascade)";
exports.createPointTable = createPointTable;
var createStudentLevelTable = "CREATE TABLE IF NOT EXISTS student_level(studentID integer not null,levelId integer not null,year varchar(10) not null,\n    PRIMARY KEY(studentId,year),\n    FOREIGN KEY(studentId) REFERENCES students(studentId) on delete cascade on update cascade,\n    FOREIGN KEY(levelId) REFERENCES levels(levelId) on delete cascade on update cascade)";
exports.createStudentLevelTable = createStudentLevelTable;
var createStudentClassTable = "CREATE TABLE IF NOT EXISTS student_class(studentID integer not null,classId integer not null,year varchar(10) not null,\n    PRIMARY KEY(studentId,year),\n    FOREIGN KEY(studentId) REFERENCES students(studentId) on delete cascade on update cascade,\n    FOREIGN KEY(classId) REFERENCES class(classId) on delete cascade on update cascade)";
exports.createStudentClassTable = createStudentClassTable;
var createSchoolProfileTable = "CREATE TABLE IF NOT EXISTS schoolprofile(school_id integer not null,school_name varchar(255) not null unique,schoolLogo varchar(255) not null,schoolEmail varchar(255) unique,schoolPhone varchar(255) unique,schoolWebsite varchar(255) unique,\n    province varchar(255) not null,district varchar(255) not null, sector varchar(255) not null, RegisteredDate date not null,\n    PRIMARY KEY(school_id,school_name))"; // query to drop tables

exports.createSchoolProfileTable = createSchoolProfileTable;
var dropUserTable = "DROP TABLE IF EXISTS users";
exports.dropUserTable = dropUserTable;
var dropSchoolProfileTable = "DROP TABLE IF EXISTS schoolprofile";
exports.dropSchoolProfileTable = dropSchoolProfileTable;
var dropStudentTable = "DROP TABLE IF EXISTS students";
exports.dropStudentTable = dropStudentTable;
var dropLevelTable = "DROP TABLE IF EXISTS levels";
exports.dropLevelTable = dropLevelTable;
var dropClassTable = "DROP TABLE IF EXISTS class";
exports.dropClassTable = dropClassTable;
var dropSubjectTbale = "DROP TABLE IF EXISTS subjects";
exports.dropSubjectTbale = dropSubjectTbale;
var dropPointTable = "DROP TABLE IF EXISTS points";
exports.dropPointTable = dropPointTable;
var dropSubjectTeacherTable = "DROP TABLE IF EXISTS subjects_teachers";
exports.dropSubjectTeacherTable = dropSubjectTeacherTable;
var dropStudentLevelTable = "DROP TABLE IF EXISTS student_level";
exports.dropStudentLevelTable = dropStudentLevelTable;
var dropStudentClassTable = "DROP TABLE IF EXISTS student_class";
exports.dropStudentClassTable = dropStudentClassTable;