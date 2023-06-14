import {EventEmitter} from 'node:events'
import { print, OutPutType } from '../helper/print.js'
import { Sequelize } from 'sequelize'
import User from '../model/User.js'
import Exception from '../error/Exception.js'
import bcrypt from 'bcrypt'


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
        sex,
        phoneNumber,
        BHYT,
        address,
        username,
        password
}
) => {
    let existingUser =  await User.findOne({where: {username : username} })
    if(existingUser){
        throw new Exception(Exception.USER_EXIST)
    }
    const hashPassword = await bcrypt.hash(password,parseInt(process.env.SALT_ROUNDS))
    const newUser = await User.create({
        IDU : 889,
        ho_ten: name,
        ntns: dob,
        gioi_tinh:sex,
        sdt:phoneNumber,
        so_BHYT:BHYT,
        dia_chi:address,
        role:1,
        IDCK:1,
        username:username,
        password:hashPassword
    })
    return newUser

}

export default {
    login,
    register
}
