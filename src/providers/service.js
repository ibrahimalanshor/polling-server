const { Container } = require('@ibrahimanshor/my-express');

const createPollingService = require('../services/polling.service.js');

Container.factory('PollingService', createPollingService, {
  pollingRepository: 'PollingRepository',
});
