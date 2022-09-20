const { ModelGet } = require('../base/model');
const { pollOptionTotalAnswer } = require('./aggregates');

function PollGet({ model }) {
  ModelGet.call(this, model);
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

PollGet.prototype.withOptionAnswer = function () {
  this.aggregate.push(...pollOptionTotalAnswer);

  return this;
};

PollGet.prototype.findOrFail = async function () {
  return await ModelGet.prototype.findOrFail.call(this, { useAggregate: true });
};

module.exports = PollGet;
