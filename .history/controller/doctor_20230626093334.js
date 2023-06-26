import HttpStatusCode from '../error/HttpStatusCode.js'
import { doctorRepo, userRepo } from '../repositories/index.js'

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
    const {
        name,
        dob,
        sex,
        phoneNumber,
        BHYT,
        address,
        username,
        time,
        date,

        
    } = req.body
    const idDoctor = req.query.id
    try {
        let appointment = await doctorRepo.doctorCreateAppointment({
            idDoctor,
            name,
            dob,
            sex,
            phoneNumber,
            BHYT,
            address,
            email,
            time,
            date,     
    })
        res.status(HttpStatusCode.OK).json({
            message: "create appointment sucessfully",
            data: {...appointment}
        })
        
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