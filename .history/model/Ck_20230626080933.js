import { DataTypes, Sequelize } from "sequelize";
import isEmail, {body, validationResult} from "express-validator";
import moment from "moment-timezone";
const sequelize = new Sequelize('doan1','root','123456',{
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: {
        dateStrings: true,
        typeCast: function (field, next) {
            if (field.type === 'DATETIME') {
            return moment.tz(field.string(), 'Asia/Bangkok').toDate();
            }
            return next();
        },
    },
    timezone: 'Asia/Bangkok',
})

const Ck = sequelize.define('Ck', {
    IDCK: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
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
    tableName: 'pdl',
    timestamps: false
})
Ck.associations = (models) => {
    User.hasMany(models.User,{ foreignKey: 'IDCK'})
    
}


export default Ck