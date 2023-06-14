import { body,validationResult } from "express-validator";
import HttpStatusCode from '../error/HttpStatusCode.js'

import Exception from "../error/Exception.js";
import {EventEmitter} from 'node:events'

const myEvent = new EventEmitter()
myEvent.on('event.register.user',(params)=>{
    //listen
    console.log(`they talk about:${JSON.stringify(params)}`)
})

const login = async(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(HttpStatusCode.BAD_REQUEST).json({errors: errors.array() })
    }
    const {email, password} = req.body
    res.send(`${email} : ${password}`)
}

const register = async(req,res) => {
    
}

const getDetailUser = async(req,res) => {
    
}

export default{
    login,
    register,
    getDetailUser
}