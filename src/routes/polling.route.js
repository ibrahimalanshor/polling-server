const {
  Container,
  helpers: { createRequestValidator },
} = require('@ibrahimanshor/my-express');

module.exports = (app) => {
  app.post(
    '/pollings',
    createRequestValidator(Container.get('PollingRequestCreate').rules),
    Container.get('PollingController').create
  );
};
