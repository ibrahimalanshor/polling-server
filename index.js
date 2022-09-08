const { createApp } = require('@ibrahimanshor/my-express');
const config = require('./config');
const setupMiddleware = require('./src/middlewares');
const setupRoute = require('./src/routes');
const messages = require('./resources/i18n');
const { connect: connectDatabase } = require('./database');

const app = createApp({
  env: config.env,
  port: config.port,
  setupRoute,
  setupMiddleware,
  messages,
});

const start = async () => {
  try {
    await connectDatabase(config.db.mongodb.url);

    app.run();
  } catch (err) {
    console.error(err);

    process.exit(0);
  }
};

start();
