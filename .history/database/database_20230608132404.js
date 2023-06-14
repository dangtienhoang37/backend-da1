import mysql from "mysql"
import { print, OutPutType } from "../helper/print.js"
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
        print('connected to mysql',outPutType.SUCESS)
        return con
    }
    catch(exception){
        const {errno} = exception
        if(exception.errno = 1045){
        throw new Exception(Exception.CANNOT_CONNECT_MYSQL)
        }
        console.log(exception)
        throw new Exception(Exception.CANNOT_CONNECT_MYSQL)

        
    }
    // debugger
    
    



}

export default connect
