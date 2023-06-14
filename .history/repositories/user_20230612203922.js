import {EventEmitter} from 'node:events'
import { print, OutPutType } from '../helper/print.js'
import { Sequelize } from 'sequelize'
import User from '../model/User.js'
import Exception from '../error/Exception.js'


const login = async ({email, password}) => {
    // print('login ne', OutPutType.INFORMATION)
    debugger
    let existingUser = User.findOne({where: {username : email} })

    
        
        let isMatch = false
        if(password == existingUser.password){
            isMatch = true
        } else isMatch = false
        if(!!isMatch){
            return{
                existingUser    
            }
        }
        else {
            throw new Exception(Exception.WRONG_EMAIL_OR_PASSWORD)
        }
    }
    


    // .then(username => {
    //     if(username){
    //         console.log(username.toJSON());
    //     }
    //     else {
    //         console.log('ko tim thay nha')
    //         throw new Exception(Exception.WRONG_EMAIL_OR_PASSWORD)
    //     }
    // })
    // .catch(err => {
    //     console.log(err)
    //     // throw new Exception(Exception.WRONG_EMAIL_OR_PASSWORD)

        
    // })

}

export default {
    login}
