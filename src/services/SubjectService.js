import db from "../database/connection/query";
import {
  create,
  asignTeacherOnSubject,
  getAll,
  getSubjectByTeacher,
  getByLevel,
} from "../database/queries/Subjects";
class SubjectService {
  async create(data) {
    let subject = await db.query(create, data);
    return {
      status: 200,
      message: "subject Added",
      response: subject,
    };
  }
  async asignTeacherOnSubject(data) {
    let result = await db.query(asignTeacherOnSubject, data);
    if (result.rowCount) {
      console.log("subject inserted");
    } else console.log("subject not inserted");
  }
  async getAll() {
    let Subjects = await db.query(getAll);
    if (Subjects.rowCount) {
      return {
        status: 200,
        message: "data found",
        response: Subjects,
      };
    } else {
      return {
        status: 400,
        message: "data not found",
        response: Subjects,
      };
    }
  }
  async getByTeacher(data) {
    let Subjects = await db.query(getSubjectByTeacher, data);
    if (Subjects.rowCount) {
      return {
        status: 200,
        message: "data found",
        response: Subjects,
      };
    } else {
      return {
        status: 400,
        message: "data not found",
        response: Subjects,
      };
    }
  }
  async getByLevel(data) {
    let Subjects = await db.query(getByLevel, data);
    if (Subjects.rowCount) {
      return {
        status: 200,
        message: "data found",
        response: Subjects,
      };
    } else {
      return {
        status: 400,
        message: "data not found",
        response: Subjects,
      };
    }
  }
}
export default new SubjectService();
