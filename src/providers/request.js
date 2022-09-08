const { Container } = require('@ibrahimanshor/my-express');

const { createPollingRequestCreate } = require('../requests/polling');
const {
  createPollingAnswerRequestCreate,
} = require('../requests/polling-answer');

Container.factory('PollingRequestCreate', createPollingRequestCreate);
Container.factory(
  'PollingAnswerRequestCreate',
  createPollingAnswerRequestCreate,
  {
    pollingService: 'PollingService',
    pollingOptionService: 'PollingOptionService',
  }
);
