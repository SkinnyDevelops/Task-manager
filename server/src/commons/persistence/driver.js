import { Sequelize } from 'sequelize';
import config from '../../config.js';

const {
  NAME, HOST, PORT, USER, PASSWORD, SOURCE,
} = config.database;

const sequelize = new Sequelize({
  host: HOST,
  database: NAME,
  username: USER,
  password: PASSWORD,
  port: PORT,
  dialect: SOURCE,
});

export default sequelize;
