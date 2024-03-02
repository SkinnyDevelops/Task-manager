import User from './models/Auth/User.js';
import Role from './models/Auth/Role.js';
import Board from './models/Board/Board.js';
import UserBoard from './models/Board/UserBoard.js';

// User-Role
Role.hasMany(User, {
  sourceKey: 'idRole',
  foreignKey: 'idUser',
});

User.belongsTo(Role, {
  targetKey: 'idRole',
  foreignKey: 'idRole',
});

// User owns Boards
User.hasMany(Board, {
  sourceKey: 'idUser',
  foreignKey: 'idOwner',
  // TODO: test this eliminating 1 user with multiple boards
  onDelete: 'CASCADE',
});

Board.belongsTo(User, {
  targetKey: 'idUser',
  foreignKey: 'idOwner',
});

// Users participates on Boards
User.belongsToMany(Board, {
  foreignKey: 'idUser',
  through: UserBoard,
});

Board.belongsToMany(User, {
  foreignKey: 'idBoard',
  through: UserBoard,
});
