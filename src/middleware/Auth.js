import jwt from 'jsonwebtoken';
import db from '../database/connection/query';
import dotenv from 'dotenv';
import {getByEmail} from '../database/queries/User';

class Auth{
    constructor(){
        dotenv.config();
    }
    async verifyToken(req,res,next){
        try{
            let token = req.headers['access-token'];
            if(!token){
                return res.status(400).send({
                    'status': 400,
                    'error': 'unauthorized user'
                });
            }
            const decoded = await jwt.verify(token,process.env.JWT_SECRET);
            db.query(getByEmail,[decoded.email]).then((result) =>{
                if(!result.rows[0]) {
                    return res.status(400).send({
                        'status': 400,
                        'error': {'message': 'invalid token'}
                    });
                }else{
                    req.user = {id:result.rows[0].id };
                    next();
                }
            });
        }catch(err){
            return res.status(400).send({
                'status': 400,
                error: err.message,
            })
        }

    }
    async generateToken(email) {
        const token = jwt.sign({ email: email },process.env.JWT_SECRET,{ expiresIn: '40d' });
        return token;
    }
    async getEmailFromToken(token){
        const email = await jwt.verify(token, process.env.JWT_SECRET).email;
        return email;
    }
}
export default new Auth();