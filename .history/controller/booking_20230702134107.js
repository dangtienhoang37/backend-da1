import HttpStatusCode from "../error/HttpStatusCode.js";
import { userRepo } from "../repositories/index.js";

const bookingAppointment = async(req,res) => {
    const id = req.params.id
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
        idDoctor
    } = req.body
    try {
        let appointment = await userRepo.createAppointment({
            id,
            name,
            dob,
            sex,
            phoneNumber,
            BHYT,
            address,
            username,
            time,
            date,
            idDoctor
        })
        res.status(HttpStatusCode.OK).json({
            message: "create appointment sucessfully",
            data: {
                appointment
            }
        })
        } catch (exception) {
        res.status(HttpStatusCode.INTERNEL_SERVER_ERROR).json({
            message: exception.toString()
        })
    }
}
const cancelAppointment = async (req,res) => {
    let id = req.params.id
    try {
        let appointment = await userRepo.cancelAppointment(id)
        res.status(HttpStatusCode.OK).json({
            message: "cancel appointment sucessfully",
            
        })
    } catch (exception) {
        res.status(HttpStatusCode.INTERNEL_SERVER_ERROR).json({
            message: exception.toString()
        })
    }
}

export default{
    bookingAppointment,
    cancelAppointment
}