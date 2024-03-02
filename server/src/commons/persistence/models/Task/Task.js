import { DataTypes } from 'sequelize';
import sequelize from '../../driver.js';

const Task = sequelize.define('Task', {
  idTask: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    fields: 'idTask',
  },
  idBoard: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idBoard',
  },
  idColumn: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idColumn',
  },
  idEpic: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idEpic',
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'title',
  },
  description: {
    type: DataTypes.TEXT,
    field: 'description',
  },
  coverImage: {
    type: DataTypes.STRING,
    field: 'coverImage',
  },
  status: {
    type: DataTypes.STRING,
    field: 'status',
    allowNull: false,
    default: 'TODO',
  },
  dueDate: {
    type: DataTypes.DATE,
    field: 'dueDate',
  },
  startDate: {
    type: DataTypes.DATE,
    field: 'dueDate',
  },
  priority: {
    type: DataTypes.STRING,
    allowNull: 'false',
    field: 'priority',
    default: 'MEDIUM',
    validate: {
      isIn: ['LOW', 'MEDIUM', 'HIGH', 'HIGHEST'],
      msg: 'Must be a valid priority',
    },
  },
  points: {
    type: DataTypes.INTEGER,
    field: 'points',
  },
}, {
  timestamps: true,
});

export default Task;
