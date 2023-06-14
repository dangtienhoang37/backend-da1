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

const register = ({
    name,
    email,
    password,
    phoneNumber,
    address,
    
})

export default {
    login,
    register
}
