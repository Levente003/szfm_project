const { DataTypes } = require('sequelize');
const sequelize = require('../database');

// Define the Task model
const Task = sequelize.define('Task', {
    ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(300),
        allowNull: true,
    },
    deadline: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    completion_time: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: null
    },
    assigned_user_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Users', // Reference the User model
            key: 'user_ID', // Foreign key field in User
        },
    },
});

module.exports = Task;