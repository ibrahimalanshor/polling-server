const {
  Container,
  helpers: { createRequestValidator },
} = require('@ibrahimanshor/my-express');

module.exports = (app) => {
  app.post(
    '/poll-answers',
    createRequestValidator(Container.get('PollAnswerRequestCreate').rules),
    Container.get('PollAnswerController').create
  );
};
