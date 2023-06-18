import jwt from "jsonwebtoken";
import HttpStatusCode from "../error/HttpStatusCode.js";
import Exception from "../error/Exception.js";

const middlewareVerifyToken = {
    
    verifyToken: (req,res,next) => {
        debugger
        const token = req.headers.authorization
        if(token) {
            //Bearer token => bo khoang trang ban g split va lay phan token o sau
            const accessToken = token.split(" ")[1]
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
            if(req.user.IDU = user.IDU) {
                next()
            }
            else{ 
                
                throw new Exception("you are not authenticated")
                
            }
        })
    }
}

export default middlewareVerifyToken