import moment from 'moment';
import Auth from '../middleware/Auth';
import db from '../database/connection/query';
import { getByEmail,create,
    update,
    deleteuser,
    getAll,
    getById,
    getByRole,
    hideuser,
    updatePassword,
} from '../database/queries/User';
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
async updateuser(req,res){
    const values =[
        req.params.userid,
        req.body.names,
        req.body.email,
        req.body.phonenumber,
        req.body.role,
    ];
    db.query(update,values).then((user)=>{
        if(user.rowCount){
        res.status(201).send({
     status: 201,
     message: 'Sucessfully updated',
     user: user.rows[0],
        });
    }else{
        res.status(400).send({
            status: 400,
            message: 'user not found',
               });
    }
    }).catch((err)=>{
        res.status(400).send({
            status: 400,
            error: err.message
          });
    });
}
// change password
async passwordRest(req,res){
    const values =[
        req.body.userid,
        bcrypt.hashSync(req.body.password, 10),
    ];
    db.query(updatePassword,values).then((user)=>{
        if(user.rowCount){
        res.status(201).send({
     status: 201,
     message: 'password Sucessfully updated',
     user: user.rows[0],
        });
    }else{
        res.status(400).send({
            status: 400,
            message: 'password not updated',
               });
    }
    }).catch((err)=>{
        res.status(400).send({
            status: 400,
            error: err.message
          });
    });
}
async deleteuser(req,res){
    db.query(deleteuser,[req.params.userid]).then((rows)=>{
        if(rows.rowCount){
        res.status(201).send({
            status: 201,
            message: 'Deleted Successfully'
        });
    }else{
        res.status(400).send({
            status: 400,
            message: 'user not deleted'
        });
    }
    }).catch((err)=>{
        res.status(400).send({
            status: 400,
            message: err.message
        });
    });
}
async hideuser(req,res){
    db.query(hideuser,[req.params.userid]).then((rows)=>{
        if(rows.rowCount){
        res.status(201).send({
            status: 201,
            message: 'Deleted Successfully'
        });
    }else{
        res.status(400).send({
            status: 400,
            message: 'user not deleted'
        });
    }
    }).catch((err)=>{
        res.status(400).send({
            status: 400,
            message: err.message
        });
    });
}
async getAll(req,res){
    db.query(getAll).then((users)=>{
        if(users.rows.length != 0){
        res.status(200).send({
            status: 200,
            users: users.rows,
        });
    }else{
        res.status(400).send({
            status: 400,
            message:'Users not found' ,
        });
    }
    }).catch((err)=>{
        res.status(400).send({
            message: err.message,
        });
    });
}
async getById(req,res){
db.query(getById,[req.params.userid]).then((user)=>{
    if(user.rows.length != 0){
        res.status(200).send({
            status: 200,
            user: user.rows,
        });
    }else{
        res.status(400).send({
            status: 400,
            message:'User not found' ,
        });
    }
}).catch((err)=>{
    res.status(400).send({
        status: 400,
        message: err.message,
    })
})
}
async getTeachers(req,res){
    db.query(getByRole).then((users)=>{
        if(users.rows.length != 0){
            res.status(200).send({
                status: 200,
                users: users.rows,
            });
        }else{
            res.status(400).send({
                status: 400,
                message:'Users not found' ,
            });
        }
    }).catch((err)=>{
        res.status(400).send({
            status: 400,
            message: err.message,
        })
    })
    }
    async findByEmail(req,res){
        db.query(getByEmail,[req.body.email]).then((user)=>{
            if(user.rows.length != 0){
                res.status(200).send({
                    status: 200,
                    user: user.rows,
                });
            }else{
                res.status(400).send({
                    status: 400,
                    message: ' email not found',
                });
            }
        }).catch((err)=>{
            res.status(400).send({
                status:400,
                error: err.message,
            });
        });
    }
}
export default new AuthController();