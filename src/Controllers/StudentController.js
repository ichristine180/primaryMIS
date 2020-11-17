import db from '../database/connection/query';
import { 
    create,
} from '../database/queries';

class Students{
 async regesterStudent(req,res){
     const values = [
         req.body.studentNames,
         req.body.parentsEmail,
         req.body.parentsPhoneNumber
     ];
     db.query(create,values).then((user)=>{
         res.status(200).send({
             status: 200,
             message: 'student registered succe'
         })
     })
 }
}
export default new Students();