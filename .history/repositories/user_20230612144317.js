import {EventEmitter} from 'node:events'
import { print, OutPutType } from '../helper/print.js'
import { Sequelize } from 'sequelize'
import User from '../model/User.js'


const login = async ({email, password}) => {
    // print('login ne', OutPutType.INFORMATION)
    let existingUser = User.findOne({where: {username : email, password: password } })
    .then(username => {
        if(username){
            console.log(username.toJSON());
        }
        else {
            console.log('ko tim thay nha')
        }
    })
    .catch(err => {
        console.log(err)
        
    })

}

export default {
    login}
