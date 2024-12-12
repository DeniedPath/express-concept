import {Sequelize}  from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
// add sequelize connection
const sequelize = new Sequelize(
    process.env.DB_NAME, // Database name
    process.env.DB_USER, // Database user
    process.env.DB_PASSWORD, // Database password
    {
      host: process.env.DB_HOST, // Database host
      dialect: 'mysql', // Use MySQL as the database dialect
      port: process.env.DB_PORT, // Database port
    }
  );
    
    console.log("Database::connected",true);

    export default sequelize