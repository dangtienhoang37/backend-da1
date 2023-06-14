import mysql from "mysql"

async function connect(){
    debugger
  

var connection = await mysql.createConnection({
    host:"da1.c0l55y3i7vog.us-east-1.rds.amazonaws.com",
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

export default connect
