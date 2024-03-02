import { DataTypes } from 'sequelize';
import sequelize from '../../driver.js';

const User = sequelize.define('User', {
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'idUser',
  },
  idExternal: {
    type: DataTypes.STRING,
    field: 'idExternal',
    allowNull: false,
    unique: false,
  },
  idRole: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idRole',
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'name',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'email',
    unique: true,
  },
  position: {
    type: DataTypes.STRING,
    field: 'position',
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    field: 'role',
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'User',
  indexes: [{
    fields: ['idRole'],
  }],
});

export default User;
