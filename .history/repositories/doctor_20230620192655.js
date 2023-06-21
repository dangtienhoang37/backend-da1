import {LbsModel} from '../model/index.js'

const  getAllSchedule =  async(doctorID) => {
    try {
        const schedule = await LbsModel.findAll({ where: {
            IDU: doctorID
        }})
        return schedule
    } catch(exception){
        throw exception
    }
}

const getDetailSchedule = async(doctorID,IDP) => {
    try {
        const detailSchedule = await LbsModel.find({ where: {
            IDU: doctorID, 
            IDP: IDP
        }})
        return detailSchedule
    }catch(exception){
        throw exception
    }
}
export default {
    getAllSchedule,
    getDetailSchedule
}