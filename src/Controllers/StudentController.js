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
 async updateStudent(req,res){
    const values = [
        req.body.studentnames,
        req.body.parentsemail,
        req.body.parentsphonenumber,
        req.params.id,
    ];
    StudentServices.update(values).then((student)=>{
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
async deleteStudent(req,res){
    StudentServices.deleteStudent([req.params.userid]).then((student)=>{
        res.status(student.status).send({
            status: student.status,
            message:student.message
        });
    }).catch((err)=>{
        res.status(400).send({
            status: 400,
            message: err.message
        });
    });
}
// getting all data from database
async getAll(req,res){
    StudentServices.getAll().then((students)=>{
        res.status(students.status).send({
            status: students.status,
            message: students.message,
            students: students.students.rows,
        });
    }).catch((err)=>{
        res.status(400).send({
            message: err.message,
        });
    });
}
}
export default new Students();