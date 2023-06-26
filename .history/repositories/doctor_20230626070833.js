import Exception from '../error/Exception.js'
import { uniqueId } from '../helper/UniqueId.js'
import {LbsModel, PdlModel,UserModel} from '../model/index.js'

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

const doctorCreateAppointment = async ({
    name,
    dob,
    sex,
    phoneNumber,
    BHYT,
    address,
    email,
    time,
    date,
}) => {
    let appointment = await PdlModel.findAndCountAll({
        where: {
            time: time,
            date: date,
        }, raw: true
    })
    if(appointment.count >= 5) {
        throw new Exception("lich kham trong gio nay da day")
    }
    let existingUser = await UserModel.findOne({ where: { username: email }, raw: true })
    if (existingUser) {
        // throw new Exception(Exception.USER_EXIST)
        const newSchedule = await PdlModel.create({
            PdlModel.IDP = uniqueId
            PdlModel.bookingAt = Date()
            PdlModel.time = time
            PdlModel.date= date
            PdlModel.address = address
            PdlModel.BHYT = BHYT
            PdlModel.phoneNumber = phoneNumber
            PdlModel.sex = sex
            PdlModel.dob = dob
            PdlModel.name = name
        })
        
    }
    
    console.log(appointment);
    return appointment
}
export default {
    getAllSchedule,
    getDetailSchedule,
    doctorCreateAppointment
}