import { DataTypes, Sequelize } from "sequelize";
import isEmail, {body, validationResult} from "express-validator/src/options";
const sequelize = new Sequelize('doan1','root','123456',{
    host: '127.0.0.1',
    dialect: 'mysql'
})

const User = sequelize.define('User', {
    IDU: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    ho_ten: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ntns: {
        type: DataTypes.DATE,
        allowNull: false
    },
    gioi_tinh: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sdt: {
        type: DataTypes.STRING,
        allowNull: false
    },
    so_BHYT: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dia_chi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false

    },
    IDCK: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            validator: isEmail,
            message: ''
        }

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false

    }
}, {
    tableName: 'user',
    timestamps: false
});