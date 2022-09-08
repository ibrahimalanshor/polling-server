const createPollingRoute = require('./polling.route.js');
const createPollingAnswerRoute = require('./polling-answer.route.js');

module.exports = (app) => {
  app.get('/', (req, res) => res.send(req.polyglot.t('greet')));

  createPollingRoute(app);
  createPollingAnswerRoute(app);
};
