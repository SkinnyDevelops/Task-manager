import { DataTypes } from 'sequelize';
import sequelize from '../../driver.js';

const Attachable = sequelize.define('Attachable', {
  idAttachable: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'idAttachable',
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'url',
  },
  idAttached: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idAttached',
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'type',
  },
}, {
  timestamps: true,
  tableName: 'Attachable',
});

export default Attachable;
