const { ModelGet } = require('../base/model');

function PollOptionGet({ model }) {
  ModelGet.call(this, model);
}

PollOptionGet.prototype = Object.create(ModelGet.prototype, {
  constructor: {
    value: PollOptionGet,
  },
});

PollOptionGet.prototype.byId = function (id) {
  this.query._id = id;

  return this;
};

PollOptionGet.prototype.byPoll = function (pollId) {
  this.query.pollId = pollId;

  return this;
};

module.exports = PollOptionGet;
