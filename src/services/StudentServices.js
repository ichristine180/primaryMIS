import moment from 'moment';
import db from '../database/connection/query';
import {create,update} from '../database/queries/Student';
import random from 'random';
class StudentServices{

 registrationNumber(schoolNmae){
    let regNumber = schoolNmae+'/' + moment(new Date()).year() + '/' + random.int(0, 1000);
    return regNumber;
}
async create(data){
    let student = await db.query(create,data);
    return {
        status: 200,
        message: 'student registered',
        student: student,
    }
}
async update(data){
    let student = await db.query(update,data);
    if(student.rowCount){
        return{
            status: 200,
            message: 'student updated',
            student: student,
        }
    }else{
        return {
            status: 400,
            message: 'oops! student not updated',
            student: [],
        }
    }
}
}
export default new StudentServices();
