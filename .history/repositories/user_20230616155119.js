import {EventEmitter} from 'node:events'
import { print, OutPutType } from '../helper/print.js'
import { Sequelize } from 'sequelize'
import  Jwt  from 'jsonwebtoken'
import User from '../model/User.js'
import Exception from '../error/Exception.js'
import bcrypt from 'bcrypt'
import {uniqueId} from '../helper/UniqueId.js'
import token from '../helper/genToken.js'


const login = async ({email, password}) => {
    // print('login ne', OutPutType.INFORMATION)
    debugger
    try{
        let existingUser =  await User.findOne({where: {username : email},
        
        raw: true })

        if(existingUser){
            let isMatch = await bcrypt.compare(password,existingUser.password)
            if(!!isMatch){
                
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

export default {
    login,
    register,
    getDetailUser,
    getAllUser
}
