import jwt from 'jsonwebtoken';
import db from '../database/connection/query';
import dotenv from 'dotenv';
import {getByEmail,checkExist} from '../database/queries/User';

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

    async isHeadMaster(req,res,next){
        let email = await jwt.verify(req.headers['access-token'], process.env.JWT_SECRET).email
       db.query(getByEmail,[email]).then(({
        rows
      }) =>
       {
           if(rows[0].role === 'HEAD_MASTER'){
               next();
           }else{
            res.status(403).send({
                status: 403,
                message: "unauthorized User"
              })
           }
       }).catch((err)=>{
           res.send({
               error: err.message
           });
       })
      
    }
    async isTeacher(req,res,next){
        let email = await jwt.verify(req.headers['access-token'], process.env.JWT_SECRET).email
        db.query(getByEmail,[email]).then(({
         rows
       }) =>
        {
            if(rows[0].role === 'TEACHER'){
                next();
            }else{
             res.status(403).send({
                 status: 403,
                 message: "unauthorized User"
               })
            }
        }).catch((err)=>{
            res.send({
                error: err.message
            });
        })
       
     }
     async isDOS(req,res,next){
        let email = await jwt.verify(req.headers['access-token'], process.env.JWT_SECRET).email
       db.query(getByEmail,[email]).then(({
         rows
       }) =>
        {
            if(rows[0].role === 'DOS'){
                next();
            }else{
             res.status(403).send({
                 status: 403,
                 message: "unauthorized User"
               })
            }
        }).catch((err)=>{
            res.send({
                error: err.message
            });
        })
       
     }
     //check if email exist on updating user
     async emailExist(req,res,next){
         const email = req.body.email;
         db.query(checkExist,[req.params.userid,email]).then((user)=>{
             if(user.rows.length == 0){
                 next()
             }else{
                 res.status(400).send({
                     status:400,
                     error: 'email already exist in our database!',
                 });
             }
         }).catch((err)=>{
             res.send({
                 error: err.message,
             });
         });
     }
}
export default new Auth();