import express from 'express';
import * as userController from '../controllers/userController';
import authMiddleware from '../middleware/authMiddleware';
const router = express.Router();
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/profile', authMiddleware, userController.getAllUsers);
export default router;
//# sourceMappingURL=userRoutes.js.map