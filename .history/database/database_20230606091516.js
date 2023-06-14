import mysql from "mysql"
import dotenv from "dotenv"
import 

async function connect(){
    debugger

var connection = await mysql.createConnection({
    host: process.env.HOSTDB,
    user:"admin",
    password:"Hoang30072001",
    database:"NhiKhoa",
    port: '3306',  
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
