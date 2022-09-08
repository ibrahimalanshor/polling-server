const { Container } = require('@ibrahimanshor/my-express');

const createPollingController = require('../controllers/polling.controller.js');
const createPollingAnswerController = require('../controllers/polling-answer.controller.js');

Container.factory('PollingController', createPollingController, {
  pollingService: 'PollingService',
});
Container.factory('PollingAnswerController', createPollingAnswerController, {
  pollingAnswerService: 'PollingAnswerService',
});
