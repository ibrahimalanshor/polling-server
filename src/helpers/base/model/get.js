const {
  utils: { check },
} = require('@ibrahimanshor/my-express');

function ModelGet(model) {
  this.model = model;
  this.aggregate = [];
}

ModelGet.prototype.findOrFailAggregate = async function () {
  const res = await this.model.aggregate(this.aggregate);

  check.isNotFound(!res[0]);

  return res[0];
};

ModelGet.prototype.findOrFail = async function ({ useAggregate = false }) {
  if (useAggregate) {
    return await this.findOrFailAggregate();
  }
};

module.exports = ModelGet;
