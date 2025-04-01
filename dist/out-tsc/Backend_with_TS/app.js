import express from 'express';
import sequelize from './src/config/db';
import userRoutes from './src/routes/userRoutes';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => res.send('Welcome to the Sequelize API with TypeScript!'));
app.use('/api/users', userRoutes);
sequelize.authenticate().then(() => console.log('Connected to MariaDB successfully!')).catch((err) => console.error('Unable to connect:', err));
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
//# sourceMappingURL=app.js.map