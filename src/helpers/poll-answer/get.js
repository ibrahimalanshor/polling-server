const { ModelGet } = require('../base/model');

function PollAnswerGet({ model }) {
  ModelGet.call(this, model);
}

PollAnswerGet.prototype = Object.create(ModelGet.prototype, {
  constructor: {
    value: PollAnswerGet,
  },
});

PollAnswerGet.prototype.byPoll = function (pollId) {
  this.query.pollId = pollId;

  return this;
};

PollAnswerGet.prototype.byUser = function ({ userIp, userId }) {
  if (userIp) {
    this.query.userIp = userIp;
  }

  if (userId) {
    this.query.userId = userId;
  }

  return this;
};

module.exports = PollAnswerGet;
