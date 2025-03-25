const { Sequelize } = require('sequelize');

// Database connection
const sequelize = new Sequelize('User_login', 'root', 'punenexus123', {
  host: 'localhost',
  dialect: 'mariadb',
  port: 3306
});

// Test connection
sequelize.authenticate()
  .then(() => console.log('Connected to MariaDB successfully!'))
  .catch(err => console.error('Unable to connect to MariaDB:', err));

module.exports = sequelize;
