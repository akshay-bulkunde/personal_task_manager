const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');
const config = require('../config/config');

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
  }
);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require('./user')(sequelize, DataTypes);
db.Task= require('./task')(sequelize,DataTypes)

module.exports = db;
