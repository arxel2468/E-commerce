// backend/src/models/Session.js

const { DataTypes } = require('sequelize');
const db = require('../database/connection').sequelize;

const Session = db.define('Session', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  expiryDate: {
    type: DataTypes.DATE
  }
});

module.exports = Session;
