import HttpStatusCode from '../error/HttpStatusCode.js'

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


export default {
    getAllSchedule
}