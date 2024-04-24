const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: process.env.REACT_APP_DB_DIALECT,
  host: process.env.REACT_APP_DB_HOST,
  port: process.env.REACT_APP_DB_PORT,
  database: process.env.REACT_APP_DB_NAME,
  username: process.env.REACT_APP_DB_USERNAME,
  password: process.env.REACT_APP_DB_PASSWORD,
});

module.exports = { sequelize };