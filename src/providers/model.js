const { Container } = require('@ibrahimanshor/my-express');

const { PollingModel } = require('../models/polling');

Container.register('PollingModel', PollingModel);
