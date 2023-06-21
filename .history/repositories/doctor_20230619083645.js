import {LbsModel} from '../model/index.js'

const getAllSchedule =  async(doctorID) => {
    try {
        const schedule = await LbsModel.findAll({ where: {
            IDU: doctorID
        }})
    } catch(exception){
        throw exception
    }
}