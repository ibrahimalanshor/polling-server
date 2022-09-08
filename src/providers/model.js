const { Container } = require('@ibrahimanshor/my-express');

const { PollingModel } = require('../models/polling');
const { PollingOptionModel } = require('../models/polling-option');

Container.register('PollingModel', PollingModel);
Container.register('PollingOptionModel', PollingOptionModel);
