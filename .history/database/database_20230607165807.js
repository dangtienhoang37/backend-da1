import mysql from "mysql"
import { print, outPutType } from "../helper/print.js"
import Exception from "../error/Exception.js"
import conconfig from "./connectionCF.js"
// import dotenv from "dotenv"

async function connect(){
    

    // debugger
    let connectionPool =  mysql.createConnection(conconfig)

}

export default connect
