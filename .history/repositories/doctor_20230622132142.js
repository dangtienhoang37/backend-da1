import {LbsModel, PdlModel} from '../model/index.js'

const  getAllSchedule =  async(doctorID) => {
    try {
        const schedule = await LbsModel.findAll({ where: {
            IDUBS: doctorID
        }})
        return schedule
    } catch(exception){
        throw exception
    }
}

const getDetailSchedule = async(doctorID,IDL) => {
    try {
        const detailSchedule = await LbsModel.findOne({ where: {
            IDUBS: doctorID, 
            IDL: IDL
        }})
        const detailorder = await PdlModel.findOne({ where: {
            IDL: IDL
        }})
        const result = {
            detailSchedule: detailSchedule,
            detailorder: detailorder }
            return result
    }catch(exception){
        throw exception
    }
}
export default {
    getAllSchedule,
    getDetailSchedule
}