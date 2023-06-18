import HttpStatusCode from "../error/HttpStatusCode.js";
import jwt from 'jsonwebtoken'

export default function checkToken(req,res,next){
    // next nghia la request se dc di tiep, ko goi next => req ko dc di tiep
    // ko ap dung(bypass) voi login, register
    // trim: loai bo cac khoang trang 2 ben string
        // dieu kien trong if se bo qua buoc check token neu path la user/login va user.register
    if(req.url.toLowerCase().trim() == '/users/login'.toLowerCase().trim()|| req.url.toLowerCase().trim() == '/users/register'.toLowerCase().trim()){
        next()
        return
    }
    const token = req.headers.authorization.split(" ")[1]
    try {
        const jwtObject = jwt.verify(token,process.env.JWT_SECRET)
        // verify - xac thuc token- su dung khoa bi mat trong env de giai ma va tra ve 1 jwtobject neu token hop le 
        // obj co dang sau { data: Object, iat: 1684802900, exp: 1685666900 }
    }
}