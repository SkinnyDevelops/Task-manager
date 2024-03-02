import { DataTypes } from 'sequelize';
import sequelize from '../../driver.js';

const Role = sequelize.define('Role', {
  idRole: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'idRole,',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
    field: 'name',
  },
}, {
  timestamps: true,
  tableName: 'Role',
});

export default Role;
