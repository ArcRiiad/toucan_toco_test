const fs = require('fs');

module.exports = {
  development: {
    username: process.env.DB_USERNAME_DEVELOPMENT,
    password: process.env.DB_PASSWORD_DEVELOPMENT,
    database: process.env.DB_NAME_DEVELOPMENT,
    host: process.env.DB_HOSTNAME_DEVELOPMENT,
    port: process.env.DB_PORT_DEVELOPMENT,
    dialect: 'mysql',
    logging: false
  },
  test: {
    username: process.env.DB_USERNAME_TEST,
    password: process.env.DB_PASSWORD_TEST,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOSTNAME_TEST,
    port: process.env.DB_PORT_TEST,
    dialect: 'mysql',
    logging: false
  },
  production: {
    username: process.env.DB_USERNAME_PRODUCTION,
    password: process.env.DB_PASSWORD_PRODUCTION,
    database: process.env.DB_NAME_PRODUCTION,
    host: process.env.DB_HOSTNAME_PRODUCTION,
    port: process.env.DB_PORT_PRODUCTION,
    dialect: 'mysql',
    logging: false
  }
};
