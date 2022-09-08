const { Container } = require('@ibrahimanshor/my-express');

const createPollingRepository = require('../repositories/polling.repository.js');

Container.factory('PollingRepository', createPollingRepository, {
  pollingModel: 'PollingModel',
});
