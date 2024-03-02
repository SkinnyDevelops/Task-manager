import User from './models/Auth/User.js';
import Role from './models/Auth/Role.js';
import Board from './models/Board/Board.js';
import UserBoard from './models/Board/UserBoard.js';
import Epic from './models/Epic/Epic.js';
import Column from './models/Column/Column.js';
import Task from './models/Task/Task.js';
import TaskUser from './models/Task/TaskUser.js';
import Comment from './models/Comment/Comment.js';
import './models/Attachable/Attachable.js';

// User-Role
Role.hasMany(User, {
  sourceKey: 'idRole',
  foreignKey: 'idRole',
});

User.belongsTo(Role, {
  targetKey: 'idRole',
  foreignKey: 'idRole',
});

// User owns Boards
User.hasMany(Board, {
  sourceKey: 'idUser',
  foreignKey: 'idOwner',
  // TODO: test this deleting 1 user with multiple boards
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

// Board-Epics
Board.hasMany(Epic, {
  sourceKey: 'idBoard',
  foreignKey: 'idBoard',
});

Epic.belongsTo(Board, {
  targetKey: 'idBoard',
  foreignKey: 'idBoard',
});

// Board-Columns
Board.hasMany(Column, {
  sourceKey: 'idBoard',
  foreignKey: 'idBoard',
});

Column.belongsTo(Board, {
  targetKey: 'idBoard',
  foreignKey: 'idBoard',
});

// Board-Task
Board.hasMany(Task, {
  sourceKey: 'idBoard',
  foreignKey: 'idBoard',
});

Task.belongsTo(Board, {
  targetKey: 'idBoard',
  foreignKey: 'idBoard',
});

// Column-Task
Column.hasMany(Task, {
  sourceKey: 'idColumn',
  foreignKey: 'idColumn',
});

Task.belongsTo(Column, {
  targetKey: 'idColumn',
  foreignKey: 'idColumn',
});

// Epic-Task
Epic.hasMany(Task, {
  sourceKey: 'idEpic',
  foreignKey: 'idEpic',
});

Task.belongsTo(Epic, {
  targetKey: 'idEpic',
  foreignKey: 'idEpic',
});

// Users collaborate on Tasks
Task.belongsToMany(User, {
  foreignKey: 'idTask',
  through: TaskUser,
});

User.belongsToMany(Task, {
  foreignKey: 'idUser',
  through: TaskUser,
});

// Comment can be nested
Comment.hasMany(Comment, {
  sourceKey: 'idComment',
  foreignKey: 'idParent',
});

Comment.belongsTo(Comment, {
  targetKey: 'idComment',
  foreignKey: 'idParent',
});

// User can comment
User.hasMany(Comment, {
  sourceKey: 'idUser',
  foreignKey: 'idUser',
});

Comment.belongsTo(User, {
  targetKey: 'idUser',
  foreignKey: 'idUser',
});

// Task has comments
Task.hasMany(Comment, {
  sourceKey: 'idTask',
  foreignKey: 'idTask',
});

Comment.belongsTo(Task, {
  targetKey: 'idTask',
  foreignKey: 'idTask',
});
