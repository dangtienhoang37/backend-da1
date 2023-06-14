import mysql from "mysql"
import { print, outPutType } from "../helper/print.js"
import Exception from "../error/Exception.js"
// import dotenv from "dotenv"

async function connect(){
    

    // debugger
    var connection = await mysql.createConnection({
        host: process.env.HOSTDB,
        user: process.env.USERDB,
        password: process.env.PASSWORDDB,
        database: process.env.DBNAME,
        port: process.env.DBPORT,  
    })
    try {
    connection.connect(function(err) {
        // if(err) throw err;
        print('connect mysql sucessfully',outPutType.SUCESS)
    })
    
    debugger

}
catch(exception){
    const {code} = exception
    debugger
    throw new Exception(Exception.CANNOT_CONNECT_MYSQL)
    
}



// connection.connect(function(err) {
//     debugger
//     if (err) {
//         debugger
//         console.error('Database connection failed: ' + err.stack);
//         return;
//     }
    
//     console.log('Connected to database.');
//     // connection.end()
//     });
}
export default connect
