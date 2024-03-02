import { DataTypes } from 'sequelize';
import sequelize from '../../driver.js';

const TaskUser = sequelize.define('TaskUser', {
  idTask: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idTask',
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idUser',
  },
}, {
  timestamps: true,
  tableName: 'TaskUser',
});

export default TaskUser;
