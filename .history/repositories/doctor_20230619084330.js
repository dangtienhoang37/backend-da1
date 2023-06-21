import {LbsModel} from '../model/index.js'

const getAllSchedule =  async(doctorID) => {
    try {
        const schedule = await LbsModel.findAll({ where: {
            IDU: doctorID
        }})
        return schedule
    } catch(exception){
        throw exception
    }
}

export default {
    getAllSchedule
}