import { DataTypes, Sequelize } from "sequelize";
import moment from "moment-timezone";

const sequelize = new Sequelize("doan1", "root", "123456", {
    host: "127.0.0.1",
    dialect: "mysql",
    
    timezone: "Asia/Bangkok",
});

const Pdl = sequelize.define(
    "Pdl",
    {
        IDP: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        bookingAt: {
            type: DataTypes.DATE,
            allowNull: false,
            
        },
        message: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        IDUBN: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        IDBS: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
        },
        dob: {
            type: DataTypes.DATEONLY,
        },
        sex: {
            type: DataTypes.STRING,
        },
        phoneNumber: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: "Email is incorrect format",
                },
            },
        },
        isCancel:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    },
    {
        tableName: "pdl",
        timestamps: false,
    }
);

Pdl.associations = (models) => {
    Pdl.belongsTo(models.User, { foreignKey: "IDUBN" });
    Pdl.belongsTo(models.User, { foreignKey: "IDBS", as: "UserByBN" });
};

export default Pdl;
