import {EventEmitter} from 'node:events'
import { print, OutPutType } from '../helper/print.js'



const login = async ({email, password}) => {
    print('login ne', OutPutType.INFORMATION)
}

export default {
    login}
