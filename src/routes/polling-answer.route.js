const {
  Container,
  helpers: { createRequestValidator },
} = require('@ibrahimanshor/my-express');

module.exports = (app) => {
  app.post(
    '/polling-answers',
    createRequestValidator(Container.get('PollingAnswerRequestCreate').rules),
    Container.get('PollingAnswerController').create
  );
};
