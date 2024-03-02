import { DataTypes } from 'sequelize';
import sequelize from '../../driver.js';

const Board = sequelize.define('Board', {
  idBoard: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'idBoard',
  },
  idOwner: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idOwner',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name',
  },
  description: {
    type: DataTypes.STRING,
    field: 'description',
  },
  acronym: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'acronym',
  },
}, {
  indexes: [{
    fields: ['idOwner'],
  }],
  timestamps: true,
  tableName: 'Board',
});

export default Board;
