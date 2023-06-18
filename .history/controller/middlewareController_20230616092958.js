import jwt from "jsonwebtoken";

const middlewareVerifyToken = {
    verifyToken: (req,res,next) => {
        const token = req.headers.token
        if(token) {
            //Bearer token => bo khoang trang ban g split va lay phan token o sau
            const accessToken = token.split(" ")[1];
        }
    }
}