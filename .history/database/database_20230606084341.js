import mysql from "mysql"

async function connect(){
    debugger
    try {
        
        let connection = await mysql.createConnection({
            
        })
        console.log("connect mySQL successfully")
        return connection
    } catch (error) {
        console.error('cant not connect to db')
        // throw Error('can not coonect')
    }
}

var connection = await mysql.createConnection({
    host:"da1.c0l55y3i7vog.us-east-1.rds.amazonaws.com",
    user:"admin",
    password:"Hoang30072001",
    database:"NhiKhoa",
    port:3306,  
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

export default connect
