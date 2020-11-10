import { text } from 'body-parser';
import dotenv from 'dotenv';
import conection from './connection';
dotenv.config();
const pool = conection.getPoolConnection();
class ExecuteQuery {
    constructor(){
        this.query = (text,params) => new Promise((resolve,reject) => {
pool.query(text,params).then((res)=>{
    resolve(res);
}).catch((err)=>{
    reject(err)
});
        });
    }

}

export default new ExecuteQuery();