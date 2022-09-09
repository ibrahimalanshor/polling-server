const createPollRoute = require('./poll.route.js');
const createPollAnswerRoute = require('./poll-answer.route.js');

module.exports = (app) => {
  app.get('/', (req, res) => res.send(req.polyglot.t('greet')));

  createPollRoute(app);
  createPollAnswerRoute(app);
};
