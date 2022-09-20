const { ModelExists } = require('../base/model');

function PollExists({ model }) {
  ModelExists.call(this, model);
}

PollExists.prototype = Object.create(ModelExists.prototype, {
  constructor: {
    value: PollExists,
  },
});

PollExists.prototype.byId = function (id) {
  this.query._id = id;

  return this;
};

module.exports = PollExists;
