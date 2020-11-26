import moment from 'moment';
import db from '../database/connection/query';
import {createSchool,updateShool} from '../database/queries/school';

class SchoolService{


    async createSchool(data){
        let school = await db.query(createSchool,data);
        console.log(school)
        if(school){
            return {
                status: 200,
                message: 'School registered',
                school: school,
            }
        }else{
            return {
                status: 400,
                message: 'Error occured',
            }
        }
       
    }

}

export default new SchoolService();
