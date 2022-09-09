const { Container } = require('@ibrahimanshor/my-express');

const createPollService = require('../services/poll.service.js');
const createPollOptionService = require('../services/poll-option.service.js');
const createPollAnswerService = require('../services/poll-answer.service.js');

Container.factory('PollService', createPollService, {
  pollRepository: 'PollRepository',
  pollOptionService: 'PollOptionService',
});
Container.factory('PollOptionService', createPollOptionService, {
  pollOptionRepository: 'PollOptionRepository',
});
Container.factory('PollAnswerService', createPollAnswerService, {
  pollAnswerRepository: 'PollAnswerRepository',
});
