import config from './config.js';
import app from './commons/http/app.js';

(async () => {
  // TODO: initialize database connection here

  const port = config.server.PORT;
  app.listen(port, () => {
    console.log(`task manager is up and running on port ${port}!`);
  });
})();
