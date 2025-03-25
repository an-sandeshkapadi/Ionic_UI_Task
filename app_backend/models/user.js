const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcrypt');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null,
  },
  token_created_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
  token_expires_at: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  }
});

// Hash password before saving
User.beforeCreate(async (user) => {
  // user.password = await bcrypt.hash(user.password, 10);
});

sequelize.sync()
  .then(() => console.log('User table is ready!'))
  .catch(err => console.error('Error setting up User table:', err));

module.exports = User;
