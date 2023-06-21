import HttpStatusCode from '../error/HttpStatusCode'

const getAllSchedule = async(req,res) => {
    try {
        const schedule = await doctorRepo.getAllSchedule()
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