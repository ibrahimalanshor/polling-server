const {
  Container,
  helpers: { createRequestValidator },
} = require('@ibrahimanshor/my-express');

module.exports = (app) => {
  app.post(
    '/polls',
    createRequestValidator(Container.get('PollRequestCreate').rules),
    Container.get('PollController').create
  );
  app.get('/polls/:id', Container.get('PollController').show);
};
