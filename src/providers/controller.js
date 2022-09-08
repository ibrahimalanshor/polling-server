const { Container } = require('@ibrahimanshor/my-express');

const createPollingController = require('../controllers/polling.controller.js');

Container.factory('PollingController', createPollingController, {
  pollingService: 'PollingService',
});
