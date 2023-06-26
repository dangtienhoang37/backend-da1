import Exception from '../error/Exception.js'
import { uniqueId } from '../helper/UniqueId.js'
import {LbsModel, PdlModel,UserModel} from '../model/index.js'
import moment from 'moment-timezone'
import { userRepo } from './index.js'
import generatePassword from '../helper/genPass.js'

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
    idDoctor,
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
    debugger
    let appointment = await PdlModel.findAndCountAll({
        where: {
            time: time,
            date: date,
        }, raw: true
    })
    if(appointment.count >= 5) {
        throw new Exception("lich kham trong gio nay da day")
    }
    const infor = {
    
    name,
    dob,
    sex,
    phoneNumber,
    BHYT,
    address,
    email,
    
    }
    console.log(infor)

    let existingUser = await UserModel.findOne({ where: {username: "email"}, raw: true })
    if (!existingUser) {
        const password = generatePassword()
        let newRegister = await userRepo.register(
            infor.name,
            infor.dob,
            infor.sex,
            infor.phoneNumber,
            infor.BHYT,
            infor.address,
            infor.email,
            infor.password)
            return newRegister
        // throw new Exception(Exception.USER_EXIST)
        
        
        
        
    }
    else{
        const newSchedule = await PdlModel.create({
            IDP: uniqueId(),
            bookingAt: moment(appointment.bookingAt).tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss'),
            time: time,
            date: date,
            address: existingUser.dia_chi,
            BHYT: existingUser.so_BHYT,
            phoneNumber: existingUser.sdt,
            sex: existingUser.gioi_tinh,
            dob: existingUser.ntns,
            name: existingUser.ho_ten,
            IDBS: idDoctor,
            IDUBN: existingUser.IDU,
            email: existingUser.username
        })
        return newSchedule 
    }
    
    console.log(appointment);
    return appointment
}
export default {
    getAllSchedule,
    getDetailSchedule,
    doctorCreateAppointment
}