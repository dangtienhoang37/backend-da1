import Exception from '../error/Exception.js'
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

const getDetailSchedule = async(doctorID,IDL,IDP) => {
    try {
        const detailSchedule = await LbsModel.findOne({ where: {
            IDUBS: doctorID, 
            IDL: IDL
        }})
        if (detailSchedule) {
            const detailorder = await PdlModel.findAll({ where: {
                IDP: IDP
            }})
            const result = {
                detailSchedule: detailSchedule,
                detailorder: detailorder }
                return result
        }
        else{
            throw new Exception("schedule not found")
            
        }
        
        
    }catch(exception){
        throw exception
    }
}

const doctorCreateAppointment = async({
            
            date,
            time,
            
}) => {
    let appointment = await PdlModel.findAll({
        where: {
            date: date,
            time: time
        }, raw: true
    })
    
    appointment.forEach((item) => {
        console.log(item); // In ra từng phần tử tìm được
      });
      
      // Hoặc sử dụng hàm console.log để in toàn bộ mảng các phần tử tìm được
      console.log(appointment);
}
export default {
    getAllSchedule,
    getDetailSchedule,
    doctorCreateAppointment
}