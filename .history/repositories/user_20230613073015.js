import {EventEmitter} from 'node:events'
import { print, OutPutType } from '../helper/print.js'
import { Sequelize } from 'sequelize'
import User from '../model/User.js'
import Exception from '../error/Exception.js'


const login = async ({email, password}) => {
    // print('login ne', OutPutType.INFORMATION)
    debugger
    try{
        let existingUser =  await User.findOne({where: {username : email} })

        if(existingUser){
            let isMatch = (password == existingUser.password)
            if(isMatch){
                console.log(existingUser.toJSON());
                return existingUser
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
    BHYT,
    address,
    role,
    username,
    password
    
}) => {
    try{
        let existingUser = await User.findOne({where: {username: email}})
        if(!!existingUser){
            throw new Exception(Exception.USER_EXIST)
        } 
        const newUser = await User.create({
            ho_ten,
            ntns,
            gioi_tinh,
            sdt,
            so_BHYT,
            dia_chi,
            role,
            IDCK,
            username,
            password
        })
        return newUser
    } catch(exception){
        throw exception
    }
    
    
    // const newUser = await User.create
}

export default {
    login,
    register
}
