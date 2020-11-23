import db from '../database/connection/query';
 import {checkStudentExist} from '../database/queries/Student';


 class Student {
async checkStudent(req,res,next){
    let student = await db.query(checkStudentExist,[req.body.studentnames,req.body.parentsphonenumber]);
    //res.send(student);
    if(!student.rowCount){
        next();
    }else{
        res.status(400).send({
            status:400,
            message: 'student exist in our database!',
        })
    }
}
 }
 export default new Student();