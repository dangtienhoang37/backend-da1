import mysql from "mysql"
// import dotenv from "dotenv"

async function connect(){
    debugger
try {
    var connection = await mysql.createConnection({
        host: process.env.HOSTDB,
        user: process.env.USERDB,
        password: process.env.PASSWORDDB,
        database: process.env.DBNAME,
        port: process.env.DBPORT,  
    })
    print('connect mysql sucessfully')
    return connection

}
catch(exception){

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
