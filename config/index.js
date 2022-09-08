if (process.env.NODE_ENV === 'development') {
  require('dotenv/config');
}

module.exports = {
  env: process.env.NODE_ENV || 'development',
  app: {
    port: process.env.APP_PORT || process.env.PORT || 4000,
    url: process.env.APP_URL || 'http://localhost:4000',
    secret: process.env.APP_SECRET || 'secret',
  },
  db: {
    mongodb: {
      url: process.env.MONGODB_URL,
    },
  },
};
