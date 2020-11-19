import moment from 'moment';
import db from '../database/connection/query';
import { 
    create,
} from '../database/queries/Student';

class Students{
 async regesterStudent(req,res){
     const values = [
         req.body.studentNames,
         req.body.parentsEmail,
         req.body.parentsPhoneNumber,

     ];
     db.query(create,values).then((student)=>{
         res.status(200).send({
             status: 200,
             message: 'student registered successfully',
             student: student
         });
     }).catch((err)=>{
         res.status(400).send({
             status: 400,
             error: err.message,
         });
     });
 }
}
export default new Students();