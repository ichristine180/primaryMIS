"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getByEmail = exports.getById = exports.avoidDuplicate = exports.updateShool = exports.createSchool = void 0;
var createSchool = "INSERT INTO schoolprofile(school_id,school_name,schoolLogo,schoolEmail,schoolPhone,schoolWebsite,\nprovince,district, sector, RegisteredDate)\n    VALUES ($1, $2, $3, $4,$5,$6,$7,$8,$9,$10) returning *";
exports.createSchool = createSchool;
var updateShool = "UPDATE schoolprofile\n\tSET school_name=$1,schoolEmail=$2, schoolPhone=$3, schoolWebsite=$4,province=$5,district=$6,sector=$7\n    WHERE school_id =$8 returning *";
exports.updateShool = updateShool;
var avoidDuplicate = "select * from schoolprofile where schoolEmail=$1 or school_name=$2 or schoolPhone=$3 or schoolWebsite=$4";
exports.avoidDuplicate = avoidDuplicate;
var getById = "select * from schoolprofile where schoolEmail=$1";
exports.getById = getById;
var getByEmail = "select * from schoolprofile where schoolEmail=$1";
exports.getByEmail = getByEmail;