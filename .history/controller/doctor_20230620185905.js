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
    let doctorID = req.params
}


export default {
    getAllSchedule,
    getDetailSchedule
}