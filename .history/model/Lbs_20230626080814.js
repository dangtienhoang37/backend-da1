import { DataTypes, Sequelize } from "sequelize";
import isEmail, {body, validationResult} from "express-validator";
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
      timezone: 'Asia/Bangkok', // Đặt múi giờ ở đây
})
const Lbs = sequelize.define('Lbs', {
    IDL: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    IDUBS: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    IDP: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    tableName: 'lbs',
    timestamps: false
})
Lbs.associations = (models) =>{ 
    Lbs.belongsTo(models.User, {foreignKey: 'IDU'})
    Lbs.belongsTo(models.Pdl, {foreignKey: 'IDP'})

}

export default Lbs