import HttpStatusCode from '../error/HttpStatusCode'

const getAllSchedule = async(req,res) => {
    try {
        const schedule = await doctorRepo.getAllSchedule()
        res.status(h)
    }
}