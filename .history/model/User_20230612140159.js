import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize('doan1','root','123456',{
    host: '127.0.0.1',
    dialect: 'mysql'
})

const User = sequelize.define('user', {
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
        allowNull: false
    },
    sdt: {
        allowNull: false
    },
    so_BHYT: {
        allowNull: false
    },
    dia_chi: {
        allowNull: false
    },
    role: {
        allowNull: false

    },
    IDCK: {
        allowNull: false

    },
    username: {
        allowNull: false

    },
    password: {
        allowNull: false

    }
})