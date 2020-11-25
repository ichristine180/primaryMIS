import config from "../connection/config";
import {
  createUserTable,
  CreateStudentTable,
  createlevelTable,
  createClassTable,
  createSubjectTable,
  createTeacherSubjectTable,
  createPointTable,
  createStudentLevelTable,
  createStudentClassTable,
  dropUserTable,
  dropStudentTable,
  dropLevelTable,
  dropClassTable,
  dropSubjectTbale,
  dropPointTable,
  dropSchoolProfileTable,
  dropSubjectTeacherTable,
  dropStudentLevelTable,
  dropStudentClassTable,
  createSchoolProfileTable
} from "../queries/tables";
import connection from "../connection/connection";
const pool = connection.getPoolConnection();
class CREATETABLE {
  constructor() {
    this.createTables = {
      all: async () => {
        pool.connect();
        pool.query(createUserTable, (err, res) => {
       
        });
        pool.query(createlevelTable, (err, res) => {
          
         
        });
        pool.query(createClassTable, (err, res) => {

         
        });
        pool.query(CreateStudentTable, (err, res) => {
      
        
        });
        pool.query(createSubjectTable, (err, res) => {
       
          
        });
        pool.query(createTeacherSubjectTable, (err, res) => {
        
        
        });
        pool.query(createPointTable, (err, res) => {
         
        
        });
        pool.query(createStudentLevelTable, (err, res) => {
         
         
        });
        pool.query(createStudentClassTable, (err, res) => {
       
        
        });
        pool.query(createSchoolProfileTable, (err, res) => {
       
        });
        pool.end();
      },
    };
    this.dropTables = {
      all: async () => {
        pool.connect().then(() => {
          pool.query(dropUserTable);
          pool.query(dropLevelTable);
          pool.query(dropClassTable);
          pool.query(dropStudentTable);
          pool.query(dropSubjectTbale);
          pool.query(dropSubjectTeacherTable);
          pool.query(dropPointTable);
          pool.query(dropStudentLevelTable);
          pool.query(dropStudentClassTable);
          pool.query(dropSchoolProfileTable);
        });
        pool.end();
      },
    };
  }
}
export default new CREATETABLE();
