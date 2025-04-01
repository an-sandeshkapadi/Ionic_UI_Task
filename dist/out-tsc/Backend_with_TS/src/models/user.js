import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import bcrypt from 'bcrypt';
class User extends Model {
}
User.init({
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
        defaultValue: null
    },
    token_created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    },
    token_expires_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    }
}, {
    sequelize,
    modelName: 'User'
});
// Hash password before saving
User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
});
sequelize
    .sync()
    .then(() => console.log('User table is ready!'))
    .catch((err) => console.error('Error setting up User table:', err));
export default User;
//# sourceMappingURL=user.js.map