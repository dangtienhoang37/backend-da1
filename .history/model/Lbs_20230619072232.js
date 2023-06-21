import { DataTypes, Sequelize } from "sequelize";
import isEmail, {body, validationResult} from "express-validator";
const sequelize = new Sequelize('doan1','root','123456',{
    host: '127.0.0.1',
    dialect: 'mysql'
})
const Lbs = sequelize.define('Lbs', {
    IDL: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    Date: {

    }
})