const { Container } = require('@ibrahimanshor/my-express');

const { PollingModel } = require('../models/polling');
const { PollingOptionModel } = require('../models/polling-option');
const { PollingAnswerModel } = require('../models/polling-answer');

Container.register('PollingModel', PollingModel);
Container.register('PollingOptionModel', PollingOptionModel);
Container.register('PollingAnswerModel', PollingAnswerModel);
