const { Container } = require('@ibrahimanshor/my-express');

const createPollController = require('../controllers/poll.controller.js');
const createPollAnswerController = require('../controllers/poll-answer.controller.js');

Container.factory('PollController', createPollController, {
  pollService: 'PollService',
});
Container.factory('PollAnswerController', createPollAnswerController, {
  pollAnswerService: 'PollAnswerService',
});
