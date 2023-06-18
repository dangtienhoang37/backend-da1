import HttpStatusCode from "../error/HttpStatusCode.js";
import jwt from 'jsonwebtoken'

export default function checkToken(req,res,next){
    // next nghia la request se dc di tiep, ko goi next => req ko dc di tiep
    // ko ap dung(bypass) voi login, register
}