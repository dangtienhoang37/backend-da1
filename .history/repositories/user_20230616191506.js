import {EventEmitter} from 'node:events'
import { print, OutPutType } from '../helper/print.js'
import { Sequelize } from 'sequelize'
import  Jwt  from 'jsonwebtoken'
import User from '../model/User.js'
import Exception from '../error/Exception.js'
import bcrypt from 'bcrypt'
import {uniqueId} from '../helper/UniqueId.js'


const login = async ({email, password}) => {
    // print('login ne', OutPutType.INFORMATION)
    debugger
    try{
        let existingUser =  await User.findOne({where: {username : email},
        
        raw: true })

        if(existingUser){
            let isMatch = await bcrypt.compare(password,existingUser.password)
            if(!!isMatch){
                let token = Jwt.sign({
                    id: existingUser.IDU,
                    role: existingUser.role
                },
                process.env.JWT_SECRET, {
                    expiresIn: '60s'
                })
                console.log({...existingUser, token})

                return {
                    ...existingUser,
                    password: 'not show',
                    accessToken: token 
                }
                
                
            }else{
                console.log('sai roii')
                throw new Exception('sai roi nha')
            }
        }
        else{
            console.log("ko thay")
            throw new Exception('chans')
        }
    }
    catch(exception){
        throw exception
    }


}

const register = async({
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
    let existingUser =  await User.findOne({where: {username : username},raw: true })
    if(existingUser){
        throw new Exception(Exception.USER_EXIST)
    }
    const hashPassword = await bcrypt.hash(password,parseInt(process.env.SALT_ROUNDS))
    const newUser = await User.create({
        IDU : uniqueId(),
        ho_ten: name,
        ntns: dob,
        gioi_tinh:sex,
        sdt:phoneNumber,
        so_BHYT:BHYT,
        dia_chi:address,
        role:1,
        IDCK:1,
        username:username,
        password: hashPassword
    })
    return newUser

}

const getDetailUser = async(userId) => {
    const user = await User.findOne({where: {IDU : userId},raw: true})
    if(!user) {
        throw new Exception('cant not find user')
    }
    return user
}
const getAllUser = async() => {
    try{
        const user = await User.findAll()
        return user
    } catch(exception){
        throw exception
    }  
}
const updateUserProfile = async ({
    userId,
    name,
    dob,
    sex,
    phoneNumber,
    BHYT,
    address,
    password
}) => {
    console.log(name)
    
    try {
        let userUpdating = await User.findOne({where: {IDU : userId},raw: true})
        console.log(userUpdating.name)
        
        debugger
        if(!userUpdating){
        throw new Exception(Exception.USER_NOT_EXIST)
        }
        const hashPassword = await bcrypt.hash(password,parseInt(process.env.SALT_ROUNDS))


        
        if(userUpdating){
            userUpdating.name = name
            userUpdating.dob = dob
            userUpdating.sex = sex
            userUpdating.phoneNumber = phoneNumber
            userUpdating.BHYT = BHYT
            userUpdating.address = address
            userUpdating.password = hashPassword 
            // console.log(userUpdating.password )
            await userUpdating.save()
            // console.log(userUpdating.name)
            return userUpdating 
        }
        
        
        
    } catch(exception){
        throw exception
    }
}

export default {
    login,
    register,
    getDetailUser,
    getAllUser,
    updateUserProfile
}
