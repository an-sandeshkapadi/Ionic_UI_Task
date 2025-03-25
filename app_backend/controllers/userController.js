const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = "punenexus123";

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // const hashedPassword = await bcrypt.hash(password, 10);
    // const user = await User.create({ name, email, password: hashedPassword });
    const user = await User.create({ name, email, password });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};
// User Login Controller using the jwt token

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ where: { email } });
    // res.json(user);
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check password
    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   return res.status(401).json({ message: 'Invalid email or password' });
    // }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, 'punenexus123', { expiresIn: '1h' });

    // Update user with token and expiration time
    await user.update({
      token: token,
      token_created_at: new Date(),
      token_expires_at: new Date(Date.now() + 60 * 60 * 1000) // 1 hour expiry
    });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await user.update({ name, email, password });
    res.json({ message: 'User updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await user.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};
exports.getUserProfile = async (req, res) => {
  try {
    
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] }
    });
    

    if (!user) {
      console.log("User Not Found in Database");  // Debugging line
      return res.status(404).json({ message: 'User not found' });
    }
    const currentUser = user.token;
    if (!currentUser) {
      console.log("Token Not Found in Database");  // Debugging line
      return res.status(401).json({ message: 'Invalid token' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile', error });
  }
};


// Logout User (Invalidate Token)
exports.logoutUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await user.update({ token: null });

    res.json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging out', error });
  }
};

