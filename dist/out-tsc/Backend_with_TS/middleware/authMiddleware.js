import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;
export default (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(403).json({ message: 'Access denied. No token provided.' });
    }
    const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};
//# sourceMappingURL=authMiddleware.js.map