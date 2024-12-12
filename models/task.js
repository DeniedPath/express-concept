import { DataTypes } from 'sequelize';
import sequelize from '../config/dbconn.js';

const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    // Add other fields as needed
});

export default Task;
