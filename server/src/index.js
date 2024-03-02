import config from './config.js';
import app from './commons/http/app.js';
import sequelize from './commons/persistence/driver.js';
import './commons/persistence/relations.js';

(async () => {
  const { RESTORE } = config.database;

  console.log(`[DB] RESTORE_MODE ${RESTORE}`);

  await sequelize.sync({
    force: RESTORE,
  });
  const port = config.server.PORT;

  app.listen(port, () => {
    console.log(`[INFO] Task-manager is up and running on port ${port}!`);
  });
})();
