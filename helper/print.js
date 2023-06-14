import chalk from "chalk";

class OutPutType {
    static INFORMATION = "INFORMATION"
    static ERROR = "ERROR"
    static SUCESS = "SUCESS"
    static WARNING = "WARNING"
}

let print = (message, outPutType) =>{
    switch(outPutType){
        case OutPutType.SUCESS:
            console.log(chalk.green(message))
            break
        case OutPutType.WARNING:
            console.log(chalk.yellow(message))
            break
        case OutPutType.INFORMATION:
            console.log(chalk.white(message))
            break
        case OutPutType.ERROR:
            console.log(chalk.red(message))
            break
        default:
            console.log(chalk.white(message))
    }
}

export {
    OutPutType,
    print
    
} 