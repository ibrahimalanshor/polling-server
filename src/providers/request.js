const { Container } = require('@ibrahimanshor/my-express');

const { createPollRequestCreate } = require('../requests/poll');
const { createPollAnswerRequestCreate } = require('../requests/poll-answer');

Container.factory('PollRequestCreate', createPollRequestCreate);
Container.factory('PollAnswerRequestCreate', createPollAnswerRequestCreate, {
  pollService: 'PollService',
  pollOptionService: 'PollOptionService',
});
