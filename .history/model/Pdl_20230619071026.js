import { DataTypes, Sequelize } from "sequelize";
import isEmail, {body, validationResult} from "express-validator";
const sequelize = new Sequelize('doan1','root','123456',{
    host: '127.0.0.1',
    dialect: 'mysql'
})

const Pdl = sequelize.define('Pdl',{
    IDP: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    dateTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    IDU: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    IDL: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})