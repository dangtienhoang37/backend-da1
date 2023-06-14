import chalk from "chalk";

class outPutType {
    static INFORMATION = "INFORMATION"
    static ERROR = "ERROR"
    static SUCESS = "SUCESS"
    static WARNING = "WARNING"
}

function print(message, outPutType){
    switch(outPutType){
        case outPutType.SUCESS:
            console.log(chalk.green(message))
            break
        case outPutType.WARNING:
            console.log(chalk.yellow(message))
            break
        case outPutType.INFORMATION:
            console.log(chalk.white(message))
            break
        case outPutType.ERROR:
            console.log(chalk.red(message))
            break
        default:
            console.log(chalk.white(message))
    }
}

export {
    print,
    outPutType
} 