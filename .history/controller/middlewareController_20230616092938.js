import jwt from "jsonwebtoken";

const middlewareVerifyToken = {
    verifyToken: (req,res,next) => {
        const token = req.headers.token
        if(token) {
            //Bearer token => lay phan token o sau
            const accessToken = token.split(" ")[1];
        }
    }
}