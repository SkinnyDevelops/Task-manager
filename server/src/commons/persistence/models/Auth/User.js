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
    validate: {
      isEmail: true,
    },
    unique: true,
  },
  position: {
    type: DataTypes.STRING,
    field: 'position',
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
