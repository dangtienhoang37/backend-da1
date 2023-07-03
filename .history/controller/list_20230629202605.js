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

const getDoctorById = async (req,res) => {

}
const getSpecialistById = async (req,res) => {

}

export default {
    getDoctorById,
    getSpecialistById

}