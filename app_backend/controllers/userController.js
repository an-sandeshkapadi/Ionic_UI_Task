const User = require('../models/user');
const { responseHandler, errorHandler } = require('../Utils/utils');
const bcrypt = require('bcrypt');
const validator = require('validator');

const jwt = require('jsonwebtoken');
const SECRET_KEY = "punenexus123";

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    responseHandler(res, 200, 'Users fetched successfully', users);
  } catch (error) {
    errorHandler(res, error, 'Error fetching users');
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return responseHandler(res, 404, 'User not found');
    responseHandler(res, 200, 'User fetched successfully', user);
  } catch (error) {
    errorHandler(res, error, 'Error fetching user');
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    responseHandler(res, 201, 'User created successfully', user);
  } catch (error) {
    errorHandler(res, error, 'Error creating user');
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return responseHandler(res, 401, 'Invalid email or password');

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    await user.update({ token, token_created_at: new Date(), token_expires_at: new Date(Date.now() + 60 * 60 * 1000) });
    
    responseHandler(res, 200, 'Login successful', { token });
  } catch (error) {
    errorHandler(res, error, 'Error logging in');
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) return responseHandler(res, 404, 'User not found');

    await user.update({ name, email, password });
    responseHandler(res, 200, 'User updated successfully', user);
  } catch (error) {
    errorHandler(res, error, 'Error updating user');
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return responseHandler(res, 404, 'User not found');

    await user.destroy();
    responseHandler(res, 200, 'User deleted successfully');
  } catch (error) {
    errorHandler(res, error, 'Error deleting user');
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, { attributes: { exclude: ['password'] } });
    if (!user) return responseHandler(res, 404, 'User not found');
    if (!user.token) return responseHandler(res, 401, 'Invalid token');
    
    responseHandler(res, 200, 'User profile fetched successfully', user);
  } catch (error) {
    errorHandler(res, error, 'Error fetching user profile');
  }
};

exports.logoutUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) return responseHandler(res, 404, 'User not found');

    await user.update({ token: null });
    responseHandler(res, 200, 'Logout successful');
  } catch (error) {
    errorHandler(res, error, 'Error logging out');
  }
};
