import { DataTypes } from 'sequelize';
import sequelize from '../../driver.js';

const UserBoard = sequelize.define('UserBoard', {
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idUser',
  },
  idBoard: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'idBoard',
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'role',
  },
}, {
  timestamps: true,
  tableName: 'UserBoard',
});

export default UserBoard;
