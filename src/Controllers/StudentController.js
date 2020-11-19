import moment from 'moment';
import StudentServices from '../services/StudentServices';
class Students{

 async regesterStudent(req,res){
     let regNumber = StudentServices.registrationNumber('IPRC');
     const values = [
         req.body.studentnames,
         req.body.parentsemail,
         req.body.parentsphonenumber,
         regNumber,
         moment(new Date()),
         '1',
        
     ];
     StudentServices.create(values).then((student)=>{
         res.status(student.status).send({
             status: student.status,
             message: student.message,
             student: student.student.rows,
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