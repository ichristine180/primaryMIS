import SubjectService from '../services/SubjectService';
class SubjectController {
    async addSubject(req,res){
        const values = [
            req.body.subjectname,
            req.body.catmax,
            req.body.exammax,
            req.body.levelid,
            '1',
           
        ];
        const teacherSubject = [req.body.teacherid,req.body.levelid];
        SubjectService.create(values).then((results)=>{
           teacherSubject.push(results.response.rows[0].subjectname);
           // issign teacher on subject
            SubjectService.asignTeacherOnSubject(teacherSubject);
            res.status(results.status).send({
                status: results.status,
                message: results.message,
                subject: results.response.rows,
            });
        }).catch((err)=>{
            res.status(400).send({
                status: 400,
                error: err.message,
            });
        });
    }
}
export default new SubjectController();