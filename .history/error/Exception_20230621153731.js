import {
    print,
    OutPutType
} from "../helper/print.js";

export default class Exception extends Error {
    static WRONG_DB_USERNAME_PASSWORD = "Wrong database name or password"
    static WRONG_CONNECTION_STRING = "wrong server name/ connection string"
    static CANNOT_CONNECT_MGDB = 'cant not connect MGDB'
    static USER_EXIST = "User already exist"
    static USER_NOT_EXIST = "User not exist"

    static CANNOT_REGISTER_USER = "cannot register user"
    static WRONG_EMAIL_OR_PASSWORD = 'Wrong username or Password'

    constructor(message, validationErrors = {}) {
        super(message) // call constructer of Error parent
        print(message, OutPutType.ERROR)
        this.validationErrors = validationErrors
    }
}
