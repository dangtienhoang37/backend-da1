import mysql from "mysql"
import { print, OutPutType } from "../helper/print.js"
import Exception from "../error/Exception.js"

// import dotenv from "dotenv"

async function connect(){
    debugger
    try{
        let con =  mysql.createConnection({
            host: process.env.HOSTDB,
            user: process.env.USERDB,
            password: process.env.PASSWORDDB,
            database: process.env.DBNAME,
            port: process.env.DBPORT,  
        })
        await con.connect((err)=> {
            if(err){
                throw new Exception(Exception.CANNOT_CONNECT_MYSQL)
            }
            else {
                print('connected to mysql',OutPutType.SUCESS)
            }
            
        });

        
        // return con
    }
    catch(exception){
        // const {errno} = exception
        // if(exception.errno = 1045){
        // throw new Exception(Exception.CANNOT_CONNECT_MYSQL)
        // }
        print(exception,OutPutType.ERROR)
        // throw new Exception(Exception.CANNOT_CONNECT_MYSQL)

        
    }
    // debugger
    
    



}

export default connect
