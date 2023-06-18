import jwt from "jsonwebtoken";

const middlewareVerifyToken = {
    verifyToken: (req,res,next) => {
        const token = req.headers.token
        if(token) {
            const accessToken = token.split(" ")[1];
        }
    }
}