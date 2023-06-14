import { Sequelize } from "sequelize";

const sequelize = new Sequelize(`${process.env.DBNAME}`,`process.env.USERDB`,`process.env.PASSWORDDB`,{
    host: 'localhost',
    dialect: 'mysql'
})

try {
    await sequelize.authenticate()
    console.log('sucess')
} catch (err) {
    console.err('unable to connect')
}