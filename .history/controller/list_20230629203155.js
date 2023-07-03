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

const getDoctorById = async (req,res) => {
    let doctorID = req.query.id 
    try {
        const doctor = await doctorRepo.getDetailDoctor()
    } catch (exception) {
        res.status(HttpStatusCode.INTERNEL_SERVER_ERROR).json({
            message: exception.toString()
        })
    }
}
const getSpecialistById = async (req,res) => {

}
const getAllDcotor = async (req,res) => {

}
const getAllSpecialist = async (req,res) => {

}

export default {
    getDoctorById,
    getSpecialistById,
    getAllDcotor,
    getAllSpecialist

}