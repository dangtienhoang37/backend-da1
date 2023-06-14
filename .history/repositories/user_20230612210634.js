import {EventEmitter} from 'node:events'
import { print, OutPutType } from '../helper/print.js'
import { Sequelize } from 'sequelize'
import User from '../model/User.js'
import Exception from '../error/Exception.js'


const login = async ({email, password}) => {
    // print('login ne', OutPutType.INFORMATION)
    debugger
    let user = User.findOne({where: {username : email} })

    try{
        let isMatch = (password == user.password)
        if(isMatch){
            console.log(user.toJSON());
            debugger
            return user
        }
        else {
            console.log('ko tim thay nha')
            throw new Exception(Exception.WRONG_EMAIL_OR_PASSWORD)
        }
    }
        
    
    catch(err){
        throw new Exception(Exception.WRONG_EMAIL_OR_PASSWORD)

    }

}

export default {
    login}
