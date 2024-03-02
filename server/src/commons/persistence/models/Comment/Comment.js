import { DataTypes } from 'sequelize';
import sequelize from '../../driver.js';

const Comment = sequelize.define('Comment', {
  idComment: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'idComment',
  },
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
  idParent: {
    type: DataTypes.INTEGER,
    allowNull: false,
    default: 0,
    field: 'idParent',
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'content',
  },
}, {
  indexes: [
    { fields: ['idTask'] },
    { fields: ['idUser'] },
    // QUESTION make sense to create a idParent index? why?
  ],
  timestamps: true,
  tableName: 'Comment',
});

export default Comment;
