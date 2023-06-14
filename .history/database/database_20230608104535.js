import mysql from "mysql"
import { print, outPutType } from "../helper/print.js"
import Exception from "../error/Exception.js"
// import dotenv from "dotenv"

async function connect(){
    
    try{
        let con =  mysql.createConnection({
            host: process.env.HOSTDB,
            user: process.env.USERDB,
            password: process.env.PASSWORDDB,
            database: process.env.DBNAME,
            port: process.env.DBPORT,  
        })
        await con.connect();
    }
    catch(exception){
        throw new Exception(Exception.CANNOT_CONNECT_MYSQL)
    }
    // debugger
    
    



}

export default connect
