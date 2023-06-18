import { body,validationResult } from "express-validator";
import HttpStatusCode from '../error/HttpStatusCode.js'

import Exception from "../error/Exception.js";
import {EventEmitter} from 'node:events'
import {userRepo} from '../repositories/index.js'
import user from "../repositories/user.js";
// import User from "../model/User.js";
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
            data: existingUser
        })
    } catch(exception) {
        console.log(exception)
        res.status(HttpStatusCode.INTERNEL_SERVER_ERROR).json({
            message: exception.toString()
        })
    }
}

const register = async(req,res) => {
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(HttpStatusCode.BAD_REQUEST).json({errors: errors.array() })
    }
    const {
        name,
        dob,
        sex,
        phoneNumber,
        BHYT,
        address,
        username,
        password
    } = req.body
    try {
        let userR = await userRepo.register({
            name,
            dob,
            sex,
            phoneNumber,
            BHYT,
            address,
            username,
            password
        })
        res.status(HttpStatusCode.OK).json({
            message: "register sucessfully",
            data: userR.toJSON()
        })
    } catch(exception){
        console.log(exception)
        res.status(HttpStatusCode.INTERNEL_SERVER_ERROR).json({
            message: exception.toString()
        })
    }
}

const getDetailUser = async(req,res) => {
    let userID = req.params.id
    try {
        const user = await userRepo.getDetailUser(userID)
        res.status(HttpStatusCode.OK).json({
            message: 'get detail User sucessfully',
            data : {
                ...user,
                id: 'not show',
                password: 'notshow',
            }
        })
    } catch{exception}{
        res.status(HttpStatusCode.INTERNEL_SERVER_ERROR).json({
            message: exception.message()
        })
    }
}

export default{
    login,
    register,
    getDetailUser
}