import db from '../database/connection/query';
import {create,asignTeacherOnSubject} from '../database/queries/Subjects';
class SubjectService{
    async create(data){
        let subject = await db.query(create,data);
        return {
            status: 200,
            message: 'subject Added',
            response: subject,
        }
    }
    async asignTeacherOnSubject(data){
        let result = await db.query(asignTeacherOnSubject,data);
        if(result.rowCount){
        console.log('subject inserted');
        }else
        console.log('subject not inserted');
    }
}
export default new SubjectService();