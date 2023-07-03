import { body,cookie,validationResult } from "express-validator";
import HttpStatusCode from '../error/HttpStatusCode.js'
import  Express  from "express";
import Exception from "../error/Exception.js";
import {EventEmitter} from 'node:events'
import {doctorRepo, userRepo} from '../repositories/index.js'
import user from "../repositories/user.js";
import User from "../model/User.js";
import jwt from "jsonwebtoken";
import {auth} from "./index.js"
import { log } from "node:console";

const getDoctorById = async (req,res) => {
    let doctorID = req.query.id 
    try {
        const doctor = await doctorRepo.getDetailDoctor(doctorID)
        res.status(HttpStatusCode.OK).json({
            message: 'get detail doctor sucessfully',
            data: {
                ...doctor,
                password: 'not show',
                refreshToken: 'not show',
                username: 'not show',
                role: 'not show',
                so_BHYT: 'not show'
            }
        })
    } catch (exception) {
        res.status(HttpStatusCode.INTERNEL_SERVER_ERROR).json({
            message: exception.toString()
        })
    }
}
const getSpecialistById = async (req,res) => {
    let specialistID = req.query.id 
    try {
        const specialist = await doctorRepo.getDetailSpecialist(specialistID)
        res.status(HttpStatusCode.OK).json({
            message: 'get detail doctor sucessfully',
            data: {
                ...specialist
            }
        })
    } catch (exception) {
        console.log(exception);
        res.status(HttpStatusCode.INTERNEL_SERVER_ERROR).json({
            message: exception.toString()
        })
    }
}
const getAllDoctor = async (req,res) => {
    try {
        const
    }
}
const getAllSpecialist = async (req,res) => {

}

export default {
    getDoctorById,
    getSpecialistById,
    getAllDoctor,
    getAllSpecialist

}