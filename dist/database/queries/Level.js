"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLevel = exports.getById = exports.getAll = void 0;
var getAll = "select * from levels where status = '1' ";
exports.getAll = getAll;
var getById = "select * from levels where levelid =$1 and status ='1'";
exports.getById = getById;
var createLevel = "insert into levels(levelId,levelName,status) values($1,$2,'1') returning *";
exports.createLevel = createLevel;