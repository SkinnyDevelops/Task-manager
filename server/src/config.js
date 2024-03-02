export default {
  server: {
    PORT: process.env.PORT || 3000,
    NODE_ENV: process.env.NODE_ENV || 'DEV',
    API_VERSION: process.env.API_VERSION || 'v1',
  },
  database: {
    HOST: process.env.DB_HOST,
    NAME: process.env.DB_NAME,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    PORT: process.env.DB_PORT,
    SOURCE: process.env.DB_SOURCE,
    LOGGING: process.env.DB_LOGGING,
    // TODO: remove true when models implementation is finished
    RESTORE: true || process.env.DB_RESTORE,
  },
};
