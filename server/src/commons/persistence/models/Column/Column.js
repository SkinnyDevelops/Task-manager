import { DataTypes } from 'sequelize';
import sequelize from '../../driver.js';

const Column = sequelize.define('Column', {
  idColumn: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    fields: 'idColumn',
  },
  idBoard: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idBoard',
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'title',
  },
  description: {
    type: DataTypes.STRING,
    field: 'description',
  },
  colorLabel: {
    type: DataTypes.STRING,
    field: 'description',
  },
}, {
  timestamps: true,
  indexes: [
    { fields: ['idBoard'] },
    {
      unique: true,
      fields: ['idBoard', 'title'],
    },
  ],
  tableName: 'Column',
});

export default Column;
