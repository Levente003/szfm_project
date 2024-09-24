const { Sequelize } = require('sequelize');

// Create a Sequelize instance
const sequelize = new Sequelize('miniprojekt', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', 
});

module.exports = sequelize;
