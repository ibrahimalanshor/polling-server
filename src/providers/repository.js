const { Container } = require('@ibrahimanshor/my-express');

const createPollRepository = require('../repositories/poll.repository.js');
const createPollOptionRepository = require('../repositories/poll-option.repository.js');
const createPollAnswerRepository = require('../repositories/poll-answer.repository.js');

Container.factory('PollRepository', createPollRepository, {
  pollModel: 'PollModel',
});
Container.factory('PollOptionRepository', createPollOptionRepository, {
  pollOptionModel: 'PollOptionModel',
});
Container.factory('PollAnswerRepository', createPollAnswerRepository, {
  pollAnswerModel: 'PollAnswerModel',
});
