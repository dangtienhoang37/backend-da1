import { print,
outPutType
} from "../helper/print.js";

export default class Exception extends Error{
    

    constructor(message, validationErrors={}){
        super(message) // call constructer of Error parent
        print(message,outPutType.ERROR)
        this.validationErrors = validationErrors
    }
}
    