const { Container } = require('@ibrahimanshor/my-express');

const createPollingRepository = require('../repositories/polling.repository.js');
const createPollingOptionRepository = require('../repositories/polling-option.repository.js');
const createPollingAnswerRepository = require('../repositories/polling-answer.repository.js');

Container.factory('PollingRepository', createPollingRepository, {
  pollingModel: 'PollingModel',
});
Container.factory('PollingOptionRepository', createPollingOptionRepository, {
  pollingOptionModel: 'PollingOptionModel',
});
Container.factory('PollingAnswerRepository', createPollingAnswerRepository, {
  pollingAnswerModel: 'PollingAnswerModel',
});
