import {LbsModel, PdlModel} from '../model/index.js'

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

const getDetailSchedule = async(doctorID,IDL) => {
    try {
        const detailSchedule = await LbsModel.findOne({ where: {
            IDU: doctorID, 
            IDL: IDL
        }})
        const detailorder = await PdlModel.findOne({ where: {
            IDL: IDL
        }})
        return {...detailSchedule, ...detailorder}
    }catch(exception){
        throw exception
    }
}
export default {
    getAllSchedule,
    getDetailSchedule
}