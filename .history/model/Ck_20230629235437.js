import { DataTypes, Sequelize } from "sequelize";
import isEmail, {body, validationResult} from "express-validator";
const sequelize = new Sequelize('doan1','root','123456',{
    host: '127.0.0.1',
    dialect: 'mysql',
    
    timezone: 'Asia/Bangkok',
})

const Ck = sequelize.define('Ck', {
    IDCK: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    ten_chuyen_khoa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                args: true,
                msg:  'Email is incorrect format',
            },
        },
    }
},
{
    tableName: 'ck',
    timestamps: false
})
Ck.associations = (models) => {
    User.hasMany(models.User,{ foreignKey: 'IDCK'})
    
}


export default Ck