import HttpStatusCode from "../error/HttpStatusCode.js";

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
}

export default{
    bookingAppointment
}