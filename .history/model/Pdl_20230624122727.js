import { DataTypes, Sequelize } from "sequelize";
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
    bookingAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    IDUBN: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    IDBS: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    dob: {
        type: DataTypes.DATEONLY
    },
    sex: {
        type: DataTypes.STRING
    },
    phoneNumber: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
},
{
    tableName: 'pdl',
    timestamps: false
})


Pdl.associations = (models) => {
    Pdl.belongsTo(models.User, {foreignKey: 'IDUBN'})
    Pdl.belongsTo(models.User, {foreignKey: 'IDUBS',as: 'UserByBN' })


}

export default Pdl