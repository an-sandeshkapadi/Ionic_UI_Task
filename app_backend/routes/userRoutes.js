const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Define user routes
router.get('/', userController.getAllUsers);
// router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.post('/login', userController.loginUser);
router.put('/:id', authMiddleware, userController.updateUser);
router.delete('/:id', authMiddleware, userController.deleteUser);
router.get('/profile', authMiddleware, userController.getUserProfile);
router.post('/logout', authMiddleware, userController.logoutUser);


module.exports = router;
