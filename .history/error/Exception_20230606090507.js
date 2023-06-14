import { print,
outPutType
} from "../helper/print.js";

export default class Exception extends Error{
    

    constructor(message, validationErrors={}){
        super(message)
        print(message,outPutType.ERROR)
        this.validationErrors = validationErrors
    }
}
    