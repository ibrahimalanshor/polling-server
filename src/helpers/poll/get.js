const { ModelGet } = require('../base/model');
const { pollOptionTotalAnswer, pollUserIpAnswer } = require('./aggregates');

function PollGet({ model }) {
  ModelGet.call(this, model, { useAggregate: true });
}

PollGet.prototype = Object.create(ModelGet.prototype, {
  constructor: {
    value: PollGet,
  },
});

PollGet.prototype.byCode = function (code) {
  this.aggregate.push({
    $match: { code },
  });

  return this;
};

PollGet.prototype.byId = function (id) {
  this.aggregate.push({
    $match: { _id: id },
  });

  return this;
};

PollGet.prototype.withOptionAnswer = function () {
  this.aggregate.push(...pollOptionTotalAnswer);

  return this;
};

PollGet.prototype.withUserAnswer = function ({ userIp }) {
  this.aggregate.push(...pollUserIpAnswer(userIp));
};

module.exports = PollGet;
