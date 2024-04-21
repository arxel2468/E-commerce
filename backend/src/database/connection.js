const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: '3306',
  database: 'ecommerce_platform',
  username: 'root',
  password: ''
});

module.exports = { sequelize, DataTypes };
