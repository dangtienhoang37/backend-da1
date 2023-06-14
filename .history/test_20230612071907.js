import { Sequelize } from "sequelize";

const sequelize = new Sequelize(`${process.env.DBNAME}`,`process.env.USERDB`,`process.env.PASSWORDDB`)