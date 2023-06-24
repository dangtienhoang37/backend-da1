import HttpStatusCode from '../error/HttpStatusCode.js'
import { doctorRepo } from '../repositories/index.js'

const getAllSchedule = async(req,res) => {
    let doctorID = req.params.id
    try {
        const schedule = await doctorRepo.getAllSchedule(doctorID)
        res.status(HttpStatusCode.OK).json({
            message: 'get schedule sucessfully',
            data: {
                schedule
            }
        })
    } catch(exception){
        console.log(exception)
        res.status(HttpStatusCode.INTERNEL_SERVER_ERROR).json({
            message: exception.toString()
        })
    }
}
const getDetailSchedule = async(req,res) => {
    let doctorID = req.params.id
    let IDL = req.params.idl
    let IDP = req.params.idp
    try {
        const schedule = await doctorRepo.getDetailSchedule(doctorID,IDL,IDP)
        res.status(HttpStatusCode.OK).json({
            message: 'get schedule sucessfully',
            data: {
                schedule
            }
        })
    } catch(exception){
        console.log(exception)
        res.status(HttpStatusCode.INTERNEL_SERVER_ERROR).json({
            message: exception.toString()
        })
    }
}

const doctorCreateAppointment = async(req,res) => {
    const information = {
        name,
        dob,
        sex,
        phoneNumber,
        BHYT,
        address,
        email,
        date,
        time,
        message
    } = req.body
    try {
        
    } catch (exception) {
        console.log(exception)
        res.status(HttpStatusCode.INTERNEL_SERVER_ERROR).json({
            message: exception.toString()
        })
        
    }
}

export default {
    getAllSchedule,
    getDetailSchedule,
    doctorCreateAppointment
}