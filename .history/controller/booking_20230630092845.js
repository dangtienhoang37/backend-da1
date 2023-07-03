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
        })
7    } catch (exception) {
        res.status(HttpStatusCode.INTERNEL_SERVER_ERROR).json({
            message: exception.toString()
        })
    }
}

export default{
    bookingAppointment
}