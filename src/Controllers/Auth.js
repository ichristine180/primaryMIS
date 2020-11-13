import moment from 'moment';
import Auth from '../middleware/Auth';
import db from '../database/connection/query';
import { getByEmail,create } from '../database/queries/User';
import bcrypt from 'bcrypt';
class AuthController{
async createAccount(req,res){
const values = [
    req.body.names,
    req.body.email,
    req.body.phonenumber,
    req.body.role,
    bcrypt.hashSync(req.body.password, 10),
    '1',
    moment(new Date()),
];
Auth.generateToken(req.body.email).then((token)=>{
db.query(create,values).then((user) =>{
res.status(201).send({
    token: token,
    status: 201,
    message: 'User created Successfully',
    user: user.rows
});
}).catch((err)=>{
    res.status(400).send({
        status: 400,
        Error:err.message
});
});
});
}
async login(req,res){
    Auth.generateToken(req.body.email).then((token)=>{
        db.query(getByEmail,[req.body.email]).then((user)=>{
            if(bcrypt.compareSync(req.body.password,user.rows[0].password)){
                res.status(200).send({
                    token:token,
                    status: 200,
                    message:"sussesfully logged in",
                     user: user.rows
                  });
            }else{
                res.status(400).send({
                    status: 400,
                    error:"Invalid credentials"
                  });
            }
        }).catch((err)=>{
            res.status(400).send({
                status: 400,
                message: 'email not found'
            })
        }).catch((err)=> {
            res.status(400).send({
                status: 400,
                message: err.message
            });
        });
    });
}
}
export default new AuthController();