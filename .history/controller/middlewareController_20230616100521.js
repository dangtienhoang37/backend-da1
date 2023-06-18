import jwt from "jsonwebtoken";
import HttpStatusCode from "../error/HttpStatusCode.js";

const middlewareVerifyToken = {
    verifyToken: (req,res,next) => {
        const token = req.headers.token
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
            res.status(401).json({
                message: "you are not authenticated"
            })
        }
    }
}

export default middlewareVerifyToken