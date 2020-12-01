import db from "../database/connection/query";
import {
  create,
  addCatTwoPoint,
  addExamPoint,
  getBysubjects,
  getByStudent,
  getByClass,
  getBysubjectsInTerm,
  getByStudentInTerm,
  getByClassInTerm,
  update,
} from "../database/queries/Points";
import { avoidDuplicates } from "../database/queries/Points";

class Points {
  async create(data) {
    const pointRes = await db.query(avoidDuplicates, [data[5]]);
    console.log(pointRes.rowCount)
    if (pointRes.rowCount) {
      return {
        status: 400,
        message: "Marks already exist",
      };
    } else {
      let points = await db.query(create, data);
      if (points) {
        return {
          status: 200,
          message: "Points added",
          response: points,
        };
      } else {
        return {
          status: 400,
          message: "Error occured",
          response: [],
        };
      }
    }
  }
  async update(data) {
    let points = await db.query(update, data);
    if (points) {
      return {
        status: 200,
        message: "Points updated",
        response: points,
      };
    } else {
      return {
        status: 400,
        message: "Error occured",
        response: [],
      };
    }
  }
  async addCatTwoPoint(data) {
    let points = await db.query(addCatTwoPoint, data);
    if (points) {
      return {
        status: 200,
        message: "Points added",
        points: points,
      };
    } else {
      return {
        status: 400,
        message: "Error occured",
        points: [],
      };
    }
  }
  async addExamPoint(data) {
    let points = await db.query(addExamPoint, data);
    if (points) {
      return {
        status: 200,
        message: "Points added",
        points: points,
      };
    } else {
      return {
        status: 400,
        message: "Error occured",
        points: [],
      };
    }
  }
  async getBysubjects(data) {
    let points = await db.query(getBysubjects, data);
    if (points.rowCount) {
      return {
        status: 200,
        message: "data found",
        response: points,
      };
    } else {
      return {
        status: 400,
        message: "data not found",
        response: points,
      };
    }
  }
  async getByStudent(data) {
    let points = await db.query(getByStudent, data);
    if (points.rowCount) {
      return {
        status: 200,
        message: "data found",
        response: points,
      };
    } else {
      return {
        status: 400,
        message: "data not found",
        response: points,
      };
    }
  }
  async getByClass(data) {
    let points = await db.query(getByClass, data);
    if (points.rowCount) {
      return {
        status: 200,
        message: "data found",
        response: points,
      };
    } else {
      return {
        status: 400,
        message: "data not found",
        response: points,
      };
    }
  }
  async getBysubjectsInTerm(data) {
    let points = await db.query(getBysubjectsInTerm, data);
    if (points.rowCount) {
      return {
        status: 200,
        message: "data found",
        response: points,
      };
    } else {
      return {
        status: 400,
        message: "data not found",
        response: points,
      };
    }
  }
  async getByStudentInTerm(data) {
    let points = await db.query(getByStudentInTerm, data);
    if (points.rowCount) {
      return {
        status: 200,
        message: "data found",
        response: points,
      };
    } else {
      return {
        status: 400,
        message: "data not found",
        response: points,
      };
    }
  }
  async getByClassInTerm(data) {
    let points = await db.query(getByClassInTerm, data);
    if (points.rowCount) {
      return {
        status: 200,
        message: "data found",
        response: points,
      };
    } else {
      return {
        status: 400,
        message: "data not found",
        response: points,
      };
    }
  }
}
export default new Points();
