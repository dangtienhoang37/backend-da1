import mysql from "mysql"

async function connect(){
    debugger
    try {
        
        let connection = await mysql.createConnection({
            host:"da1.c0l55y3i7vog.us-east-1.rds.amazonaws.com",
            user:"admin",
            password:"Hoang30072001",
            port:3306,
        })
        console.log("connect mySQL successfully")
        return connection
    } catch (error) {
        console.error('cant not connect to db')
        // throw Error('can not coonect')
    }
}

export default connect
