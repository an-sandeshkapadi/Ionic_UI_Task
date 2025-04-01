const { Sequelize } = require('sequelize');

// Database connection
const sequelize = new Sequelize('User_login', 'root', 'punenexus123', {
  host: 'localhost',
  dialect: 'mariadb',
  port: 3306
});

// Test connection

module.exports = sequelize;
