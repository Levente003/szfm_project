const User = require('../models/userModel');
const IUserDAO = require("../interfaces/IUserDAO");

class UserDAO extends IUserDAO{
    constructor() {
        super();
        console.log('UserDAO constructor called'); 
    }

    async getUserById(userId) {
        return await User.findByPk(userId);
    }

    async createUser(userData) {
        return await User.create(userData);
    }

    async updateUser(userId, userData) {
        const user = await User.findByPk(userId);
        if (user) {
            return await user.update(userData);
        }
        return null;
    }

    async deleteUser(userId) {
        const user = await User.findByPk(userId);
        if (user) {
            await user.destroy();
            return true;
        }
        return false;
    }

    async getAllUsers() {
        return await User.findAll();
    }
}
module.exports = new UserDAO();
