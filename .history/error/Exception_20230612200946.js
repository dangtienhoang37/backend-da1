import { print,
OutPutType
} from "../helper/print.js";

export default class Exception extends Error{
    static CANNOT_CONNECT_MYSQL = ' cant not connect tp mysql, check the network'
    static WRONG_EMAIL_OR_PASSWORD = 'Wrong username or Password'

    constructor(message, validationErrors={}){
        super(message) // call constructer of Error parent
        print(message,OutPutType.ERROR)
        this.validationErrors = validationErrors
    }
}
