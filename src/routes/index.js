module.exports = (app) => {
  app.get('/', (req, res) => res.send(req.polyglot.t('greet')));
};
