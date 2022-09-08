const { Container } = require('@ibrahimanshor/my-express');

const createPollingService = require('../services/polling.service.js');
const createPollingOptionService = require('../services/polling-option.service.js');
const createPollingAnswerService = require('../services/polling-answer.service.js');

Container.factory('PollingService', createPollingService, {
  pollingRepository: 'PollingRepository',
  pollingOptionService: 'PollingOptionService',
});
Container.factory('PollingOptionService', createPollingOptionService, {
  pollingOptionRepository: 'PollingOptionRepository',
});
Container.factory('PollingAnswerService', createPollingAnswerService, {
  pollingAnswerRepository: 'PollingAnswerRepository',
});
