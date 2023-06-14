import mysql from "mysql"
// import dotenv from "dotenv"

async function connect(){
    debugger

var connection = await mysql.createConnection({
    host: process.env.HOSTDB,
    user: process.env.USERDB,
    password: process.env.PASSWORDDB,
    database: process.env.DBNAME,
    port: process.env.DBPORT,  
});
connection.connect(function(err) {
    debugger
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    
    console.log('Connected to database.');
    });
}
export default connect
