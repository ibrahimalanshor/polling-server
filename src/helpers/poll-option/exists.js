const { ModelExists } = require('../base/model');

function PollOptionExists({ model }) {
  ModelExists.call(this, model);
}

PollOptionExists.prototype = Object.create(ModelExists.prototype, {
  constructor: {
    value: PollOptionExists,
  },
});

PollOptionExists.prototype.byId = function (id) {
  this.query._id = id;

  return this;
};

PollOptionExists.prototype.byPoll = function (pollId) {
  this.query.pollId = pollId;

  return this;
};

module.exports = PollOptionExists;
