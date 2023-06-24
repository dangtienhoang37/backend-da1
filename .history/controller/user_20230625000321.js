import { body,cookie,validationResult } from "express-validator";
import HttpStatusCode from '../error/HttpStatusCode.js'
import  Express  from "express";
import Exception from "../error/Exception.js";
import {EventEmitter} from 'node:events'
import {userRepo} from '../repositories/index.js'
import user from "../repositories/user.js";
import User from "../model/User.js";
import jwt from "jsonwebtoken";
import {auth} from "./index.js"
// import User from "../model/User.js";
// import { Sequelize,json } from "sequelize";

const myEvent = new EventEmitter()
myEvent.on('event.register.user',(params)=>{
    //listen
    console.log(`they talk about:${JSON.stringify(params)}`)
})

//login
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
        res.cookie('refreshToken',existingUser.refreshToken,{
            httpOnly: true,
            expires: new Date(Date.now() + 3600000),
            sameSite: 'strict',
            path: '/',
        })
        res.status(HttpStatusCode.OK).json({
            message: 'login user successfully',
            data: {
                ...existingUser,
                refreshToken: 'not show'
            }
        })
        
    } catch(exception) {
        console.log(exception)
        res.status(HttpStatusCode.UNAUTH).json({
            message: exception.toString()
        })
    }
}
// logout
const logout = (req, res) => {

    res.clearCookie('refreshToken');
    res.status(302).send("Đăng xuất thành công");
}
//register
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


//get detail user
const getDetailUser = async(req,res) => {
    let userID = req.params.id
    try {
        const user = await userRepo.getDetailUser(userID)
        res.status(HttpStatusCode.OK).json({
            message: 'get detail User sucessfully',
            data : {
                ...user,
                // id: 'not show',
                password: 'notshow',
            }
        })
    } catch(exception){
        res.status(HttpStatusCode.UNAUTH).json({
            message: exception.toString()
        })
    }
}

const getAllUser = async(req,res) => {
    try {
        const user = await userRepo.getAllUser()
        res.status(HttpStatusCode.OK).json({
            message: 'get  User sucessfully',
            data : {
                user
                
            }
        })
    } catch (exception) {
        console.log(exception)
        res.status(HttpStatusCode.UNAUTH).json({
            message: exception.toString()
        })
    }
}

const updateProfile = async(req,res) => {
    let userID = req.params.id
    const {
        name,
        dob,
        sex,
        phoneNumber,
        BHYT,
        address,
        password
    } = req.body
    
    try {
        let updatedUser = await userRepo.updateUserProfile( userID,{
            name,
            dob,
            sex,
            phoneNumber,
            BHYT,
            address,
            password
        })
        
        res.status(HttpStatusCode.OK).json({
            message: 'update User sucessfully',
            data : updatedUser
                
            
        })
    } catch (exception) {
        console.log(exception)
        res.status(HttpStatusCode.UNAUTH).json({
            message: exception.toString()
        })
    }
}


const deleteUser = async(req,res) => {
    let userID = req.params.id
    try {
        const user = await userRepo.deleteUser(userID)
        res.status(HttpStatusCode.OK).json({
            message: 'delete User sucessfully',
            
        })
    } catch(exception){
        console.log(exception)
        res.status(HttpStatusCode.INTERNEL_SERVER_ERROR).json({
            message: exception.toString()
        })
    }
    
}

const reqRefreshToken = async (req,res) => {
    //take refresh token from user
    const refreshToken = req.cookies.refreshToken
    // console.log(refreshToken)
    if(!refreshToken) return res.status(HttpStatusCode.UNAUTH).json("you are not authenticated")
    jwt.verify(refreshToken,process.env.JWT_REFRESH, (err,user) => {
        // user ơ day co dang { id: 11, role: '1', iat: 1687342478, exp: 1687428878 }
        if(err){
            console.log(err)
            res.status(HttpStatusCode.INTERNEL_SERVER_ERROR).json({
                message: err.toString()
            })
        }
        console.log(user.id)

        const newAccessToken = auth.createAccessToken(user)
        const newRefreshToken = auth.createRefreshToken(user)
    

        // userRepo.savenewRefreshToken(newRefreshToken)
        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
            expires: new Date(Date.now() + 3600000),
            path: '/',
            // sameSite: 'strict'
        })
        res.status(HttpStatusCode.OK).json({accessToken: newAccessToken})

    })
}

const createDocAccount = async (req,res) => {
    const {
        name,
        dob,
        sex,
        phoneNumber,
        BHYT,
        address,
        IDCK,
        username,
        password
    } = req.body
    try {
        let userR = await userRepo.CreateDoctorAccount({
            name,
            dob,
            sex,
            phoneNumber,
            BHYT,
            address,
            IDCK,
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

const updateDoctorProfile = async(req,res)=>{
    let doctorID =  req.params.id
    const {
        name,
        dob,
        sex,
        phoneNumber,
        BHYT,
        address,
        IDCK
        password
    } = req.body
}
// doctor in main page
export default{
    login,
    logout,
    register,
    getDetailUser,
    getAllUser,
    updateProfile,
    deleteUser,
    reqRefreshToken,
    createDocAccount,
    updateDoctorProfile
}