import { DataTypes } from 'sequelize';
import sequelize from '../../driver.js';

const Epic = sequelize.define('Epic', {
  idEpic: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'idEpic',
  },
  idBoard: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idBoard',
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
}, {
  timestamps: true,
  tableName: 'Epic',
  indexes: [
    { fields: ['idBoard'] },
    {
      unique: true,
      fields: ['idBoard', 'name'],
    },
  ],
});

export default Epic;
