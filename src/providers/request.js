const { Container } = require('@ibrahimanshor/my-express');

const { createPollingRequestCreate } = require('../requests/polling');

Container.factory('PollingRequestCreate', createPollingRequestCreate);
