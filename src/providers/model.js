const { Container } = require('@ibrahimanshor/my-express');

const { PollModel } = require('../models/poll');
const { PollOptionModel } = require('../models/poll-option');
const { PollAnswerModel } = require('../models/poll-answer');

Container.register('PollModel', PollModel);
Container.register('PollOptionModel', PollOptionModel);
Container.register('PollAnswerModel', PollAnswerModel);
