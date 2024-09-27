const { Sequelize } = require('sequelize');
const mysql = require('mysql2')
const env = require('dotenv')

env.config()

const database = process.env.database || 'miniprojekt';
const mySqlUser = process.env.sqlUser || 'root';
const mySqlPassword = process.env.sqlPassword || '';
const mySqlHost = process.env.sqlHost || 'localhost';


const mysqlConnection = mysql.createConnection({
    host: mySqlHost,
    user: mySqlUser,
    password: mySqlPassword
});

mysqlConnection.connect((err) => {
    if(err) throw err;
    mysqlConnection.query(`CREATE DATABASE IF NOT EXISTS ${database}`);
});

// Create a Sequelize instance
const sequelize = new Sequelize(database,mySqlUser, mySqlPassword, {
    host: mySqlHost,
    dialect: 'mysql',
});


module.exports = sequelize;