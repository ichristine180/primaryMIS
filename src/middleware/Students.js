import db from "../database/connection/query";
import {
  checkStudentExist,
  checkExistOnUpdate,
} from "../database/queries/Student";

class Student {
  async checkStudent(req, res, next) {
    let student = await db.query(checkStudentExist, [
      req.body.studentnames,
      req.body.parentsphonenumber,
    ]);
    //res.send(student);
    if (!student.rowCount) {
      next();
    } else {
      res.status(400).send({
        status: 400,
        message: "student exist in our database!",
      });
    }
  }
  async checkExist(req, res, next) {
    let student = await db.query(checkExistOnUpdate, [
      req.body.studentnames,
      req.body.parentsphonenumber,
      req.params.id,
    ]);
    if (!student.rowCount) {
      next();
    } else {
      res.status(400).send({
        status: 400,
        message: "student names exist in our database!",
      });
    }
  }
}
export default new Student();
