import User from '../models/user';
import { responseHandler, errorHandler } from '../Utils/utils';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;
const TOKEN_EXPIRATION = process.env.TOKEN_EXPIRATION;
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        responseHandler(res, 200, 'Users fetched successfully', users);
    }
    catch (error) {
        errorHandler(res, error, 'Error fetching users');
    }
};
export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        responseHandler(res, 201, 'User created successfully', user);
    }
    catch (error) {
        errorHandler(res, error, 'Error creating user');
    }
};
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return responseHandler(res, 401, 'Invalid email or password');
        }
        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: TOKEN_EXPIRATION });
        await user.update({ token, token_created_at: new Date(), token_expires_at: new Date(Date.now() + 60 * 60 * 1000) });
        responseHandler(res, 200, 'Login successful', { token });
    }
    catch (error) {
        errorHandler(res, error, 'Error logging in');
    }
};
//# sourceMappingURL=userController.js.map