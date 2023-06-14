import mysql from "mysql"
import { print, outPutType } from "../helper/print.js"
import Exception from "../error/Exception.js"
// import dotenv from "dotenv"

async function connect(){
    

    // debugger
    let con =  mysql.createConnection({
        host: process.env.HOSTDB,
        user: process.env.USERDB,
        password: process.env.PASSWORDDB,
        database: process.env.DBNAME,
        port: process.env.DBPORT,  
    })
    con.connect(function(err){
        if (err) {
            throw err
            console.log(err)}
    })

}

export default connect
