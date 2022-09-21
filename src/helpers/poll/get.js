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

PollGet.prototype.searchCode = function (code) {
  ModelGet.prototype.match.call(this, 'code', {
    $regex: code,
    $options: 'i',
  });

  return this;
};

PollGet.prototype.searchName = function (name) {
  ModelGet.prototype.match.call(this, 'name', {
    $regex: name,
    $options: 'i',
  });

  return this;
};

PollGet.prototype.search = function ({ code, name }) {
  if (code) {
    this.searchCode(code);
  }

  if (name) {
    this.searchName(name);
  }

  return this;
};

PollGet.prototype.withOptionAnswer = function () {
  this.aggregate.push(...pollOptionTotalAnswer);

  return this;
};

PollGet.prototype.withUserAnswer = function ({ userIp }) {
  this.aggregate.push(...pollUserIpAnswer(userIp));
};

PollGet.prototype.excludeUserIp = function () {
  this.aggregate.push({
    $unset: 'userIp',
  });
};

module.exports = PollGet;
