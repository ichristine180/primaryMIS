import dotenv from "dotenv";
import conection from "./connection";
dotenv.config();
const pool = conection.getPoolConnection();
class ExecuteQuery {
  constructor() {
    this.query = (text, params) =>
      new Promise((resolve, reject) => {
        pool.connect();
        pool
          .query(text, params)
          .then((res) => {
            resolve(res.rows[0]);
          })
          .catch((err) => {
            reject(err.detail);
          });
      });
  }
}

export default new ExecuteQuery();
