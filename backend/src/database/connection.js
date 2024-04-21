const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: process.env.REACT_APP_DB_DIALECT ||'mysql',
  host: process.env.REACT_APP_DB_HOST || 'localhost',
  port: process.env.REACT_APP_DB_PORT || '3306',
  database: process.env.REACT_APP_DB_NAME || 'ecommerce_platform',
  username: process.env.REACT_APP_DB_USERNAME || 'root',
  password: process.env.REACT_APP_DB_PASSWORD || '',
});

module.exports = { sequelize };