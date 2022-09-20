const { ModelExists } = require('../base/model');

function PollAnswerExists({ model }) {
  ModelExists.call(this, model);
}

PollAnswerExists.prototype = Object.create(ModelExists.prototype, {
  constructor: {
    value: PollAnswerExists,
  },
});

PollAnswerExists.prototype.byPoll = function (pollId) {
  this.query.pollId = pollId;

  return this;
};

PollAnswerExists.prototype.byUser = function ({ userIp, userId }) {
  if (userIp) {
    this.query.userIp = userIp;
  }

  if (userId) {
    this.query.userId = userId;
  }

  return this;
};

module.exports = PollAnswerExists;
