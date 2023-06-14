import { body,validationResult } from "express-validator";
import HttpStatusCode from '../error/HttpStatusCode.js'

import Exception from "../error/Exception.js";
import {EventEmitter} from 'node:events'
import {userRepo} from '../repositories/index.js'
import user from "../repositories/user.js";
// import { Sequelize,json } from "sequelize";

const myEvent = new EventEmitter()
myEvent.on('event.register.user',(params)=>{
    //listen
    console.log(`they talk about:${JSON.stringify(params)}`)
})
const login = async(req,res) => {
    debugger
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(HttpStatusCode.BAD_REQUEST).json({errors: errors.array() })
    }
    const {email, password} = req.body
    // res.send(`${email} : ${password}`)
    try {
        let existingUser = await userRepo.login({email,password})
        debugger
        res.status(HttpStatusCode.OK).json({
            message: 'login user successfully',
            data: existingUser.toJSON()
        })
    } catch(exception) {
        res.status(HttpStatusCode.INTERNEL_SERVER_ERROR).json({
            message: exception.toString()
        })
    }
}

const register = async(req,res) => {
    const {
        name,
        email,
        password,
        phoneNumber,
        address
    } = req.body
    
}

const getDetailUser = async(req,res) => {
    
}

export default{
    login,
    register,
    getDetailUser
}