import jwt from "jsonwebtoken";
import HttpStatusCode from "../error/HttpStatusCode.js";
import Exception from "../error/Exception.js";
import { OutPutType, print } from "../helper/print.js";
const middlewareVerifyToken = {

    verifyDoctor: (req,res,next) =>{
        middlewareVerifyToken.verifyToken(req,res,() =>{
            // role for doctor : 3
            if( req.user.role == 3){
                next();
            }
            else{ 
                res.status(HttpStatusCode.FORBIDEN).json({
                    message: "you are not allow"
                })
            }
        })
    },
    
    verifyToken: (req,res,next) => {
        try {
            debugger
        const token = req.cookies.token
        if(token) {
            //Bearer token => bo khoang trang ban g split va lay phan token o sau
            // const accessToken = token.split(' ')[1];
            const accessToken = token 
            jwt.verify(accessToken,process.env.JWT_SECRET,(err,user) =>{
                if(err){  
                    res.status(HttpStatusCode.FORBIDEN).json({
                        message: "token is not valid"
                    })
                }
                req.user = user
                next()
            })
        }
        else{ 
            
            throw new Exception("you are not authenticated")
        }
        } catch (exception) {
            
            res.status(HttpStatusCode.FORBIDEN).json({
                message: exception.toString()
            })
        }
        
    },
    verifyAdminAuth: (req,res,next) => {
        middlewareVerifyToken.verifyToken(req,res,() =>{
            if( req.user.role == 2){
                next();
            }
            else{ 
                res.status(HttpStatusCode.FORBIDEN).json({
                    message: "you are not allow"
                })
            }
        })
    },
    verifyGetUserById: (req,res,next) => {
            
            middlewareVerifyToken.verifyToken(req,res,()=> {
                
                if(req.user.id == req.params.id) {
                    next()
                }
                
                else{ 
                    
                    throw new Exception("you have not permission")
                }
            })
        
        
    }
}

export default middlewareVerifyToken