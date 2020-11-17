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
    dropSubjectTeacherTable,
    dropStudentLevelTable,
    dropStudentClassTable,
} from '../queries/tables';
import connection from '../connection/connection';
const pool = connection.getPoolConnection();
class CREATETABLE{
constructor(){

    this.createTables = {
        all: async () =>{
pool.connect().then(()=>{
    pool.query(createUserTable);
    pool.query(createlevelTable);
    pool.query(createClassTable);
    pool.query(CreateStudentTable);
    pool.query(createSubjectTable);
    pool.query(createTeacherSubjectTable);
    pool.query(createPointTable);
    pool.query(createStudentLevelTable);
    pool.query(createStudentClassTable);
}).catch(err=>{
    console.log(err.message)
})
 }
}
    this.dropTables = {
        all: async () => {
          pool.connect().then(()=>{
            pool.query(dropUserTable);
            pool.query(dropLevelTable);
            pool.query(dropClassTable);
            pool.query(dropStudentTable);
            pool.query(dropSubjectTbale);
            pool.query(dropSubjectTeacherTable);
            pool.query(dropPointTable);
            pool.query(dropStudentLevelTable);
            pool.query(dropStudentClassTable);
 
          }).catch(err=>{
            console.log(err.message)
          })
        }
      }
    }
  }
export default new CREATETABLE();

