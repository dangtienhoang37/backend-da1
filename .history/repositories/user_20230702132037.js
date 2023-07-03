import { EventEmitter } from 'node:events'
import { print, OutPutType } from '../helper/print.js'
// import Sequelize from 'sequelize'
import Jwt from 'jsonwebtoken'
import { PdlModel, UserModel,LbsModel} from '../model/index.js'
import Exception from '../error/Exception.js'
import moment from 'moment-timezone'
import bcrypt from 'bcrypt'
import { uniqueId } from '../helper/UniqueId.js'
import {auth} from '../controller/index.js'
import { Op } from 'sequelize'

// const findone = async()

const login = async ({ email, password }) => {
    // print('login ne', OutPutType.INFORMATION)
    debugger
    try {
        let existingUser = await UserModel.findOne({
            where: { username: email },

            raw: true
        })
        
        if (existingUser) {
            let isMatch = await bcrypt.compare(password, existingUser.password)
            if (!!isMatch) {
                let accessToken = auth.createAccessToken(existingUser)
                let refreshToken = auth.createRefreshToken(existingUser)
                console.log({ ...existingUser, accessToken, refreshToken })

                return {
                    ...existingUser,
                    password: 'not show',
                    accessToken: accessToken,
                    refreshToken: refreshToken
                }
            } else {
                console.log('sai roii')
                throw new Exception('sai roi nha')
            }
        }
        else {
            console.log("ko thay")
            throw new Exception(Exception.WRONG_EMAIL_OR_PASSWORD)
        }
    }
    catch (exception) {
        throw exception
    }


}

const register = async ({
    name,
    dob,
    sex,
    phoneNumber,
    BHYT,
    address,
    username,
    password
}
) => {
    let existingUser = await UserModel.findOne({ where: { username: username }, raw: true })
    if (existingUser) {
        throw new Exception(Exception.USER_EXIST)
    }
    const hashPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))
    const newUser = await UserModel.create({
        IDU: uniqueId(),
        ho_ten: name,
        ntns: dob,
        gioi_tinh: sex,
        sdt: phoneNumber,
        so_BHYT: BHYT,
        dia_chi: address,
        role: 1,
        IDCK: 1,
        username: username,
        password: hashPassword
    })
    return newUser

}
const getDetailUser = async (userId) => {
    const user = await UserModel.findOne({ where: { IDU: userId }, raw: true })
    if (!user) {
        throw new Exception('cant not find user')
    }
    return user
}
const getAllUser = async () => {
    try {
        const user = await UserModel.findAll()
        return user
    } catch (exception) {
        throw exception
    }
}
const updateUserProfile = async (userId, {
    name,
    dob,
    sex,
    phoneNumber,
    BHYT,
    address,
    password
}) => {
    console.log(userId, name,
        dob,
        sex,
        phoneNumber,
        BHYT,
        address,
        password)
    try {

        let userUpdating = await UserModel.findOne({ where: { IDU: userId } })


        debugger
        if (!userUpdating) {
            throw new Exception(Exception.USER_NOT_EXIST)
        }
        console.log(userUpdating.password)
        console.log(password)

        const hashdPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))



        if (userUpdating) {
            userUpdating.ho_ten = name
            userUpdating.ntns = dob
            userUpdating.gioi_tinh = sex
            userUpdating.sdt = phoneNumber
            userUpdating.so_BHYT = BHYT
            userUpdating.dia_chi = address
            userUpdating.password = hashdPassword
            // console.log(userUpdating.password )
            await userUpdating.save()
            // console.log(userUpdating.name)
            return userUpdating
        }



    } catch (exception) {
        throw exception
    }
}
const deleteUser = async (userId) => {
    const user = await UserModel.destroy({ where: { IDU: userId } })
    if (!user) {
        throw new Exception('cant not find user')
    }
    return user
}

const CreateDoctorAccount = async ({
    name,
    dob,
    sex,
    phoneNumber,
    BHYT,
    address,
    IDCK,
    username,
    password
}) => {
    
        let existingUser = await UserModel.findOne({ where: { username: username }, raw: true })
        if (existingUser) {
            throw new Exception(Exception.USER_EXIST)
        }
        const hashPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))
        const newUser = await UserModel.create({
            IDU: uniqueId(),
            ho_ten: name,
            ntns: dob,
            gioi_tinh: sex,
            sdt: phoneNumber,
            so_BHYT: BHYT,
            dia_chi: address,
            role: 3,
            IDCK: IDCK,
            username: username,
            password: hashPassword
        })
        return newUser
}

const updateDoctorProfile = async (userId, {
            name,
            dob,
            sex,
            phoneNumber,
            BHYT,
            address,
            IDCK,
            password
}) => {
    console.log(userId, name,
        dob,
        sex,
        phoneNumber,
        BHYT,
        address,
        password
    )
    try{
        let doctorUpdating = await UserModel.findOne({ where:{
            IDU: userId
        }})
        if(!doctorUpdating) {
            throw new Exception(Exception.USER_NOT_EXIST)
        }
        // console.log(userUpdating.password)
        console.log(password)
        const hashdPassword = await bcrypt.hash(password,parseInt(process.env.SALT_ROUNDS))
        if(doctorUpdating){
            doctorUpdating.ho_ten= name
            doctorUpdating.ntns= dob
            doctorUpdating.gioi_tinh = sex
            doctorUpdating.sdt = phoneNumber
            doctorUpdating.so_BHYT = BHYT
            doctorUpdating.dia_chi= address
            doctorUpdating.IDCK = IDCK
            doctorUpdating.password = hashdPassword
            

            await doctorUpdating.save()
            return doctorUpdating

        }
    } catch(exception){
        throw exception
    }
}
const createAppointment = async({
            id,
            name,
            dob,
            sex,
            phoneNumber,
            BHYT,
            address,
            username,
            time,
            date,
            idDoctor
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
    let existingUser = await UserModel.findOne({ where: {IDU: id}, raw: true })
    const newIDP = uniqueId()
    const newSchedule = await PdlModel.create({
        IDP: newIDP ,
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
    let docProfile = await UserModel.findOne({ where: {IDU: idDoctor}, raw: true })
    let room = docProfile.work_room
    const doctorSchedule = await LbsModel.create({
        IDL: uniqueId(),
        date: date,
        time: time,
        address: room,
        IDUBS: idDoctor,
        IDP:newIDP 
    })
    return{
        newSchedule,
        doctorSchedule
    }
}
export default {
    login,
    register,
    getDetailUser,
    getAllUser,
    updateUserProfile,
    deleteUser,
    CreateDoctorAccount,
    updateDoctorProfile,
    createAppointment,
    cancelAppointment
}
