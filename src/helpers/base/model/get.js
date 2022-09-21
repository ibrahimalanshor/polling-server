const {
  utils: { check },
} = require('@ibrahimanshor/my-express');

function ModelGet(model, options = {}) {
  this.model = model;
  this.aggregate = [];
  this.query = {};

  this.useAggregate = options?.useAggregate ?? false;
}

ModelGet.prototype.findOrFailAggregate = async function () {
  const res = await this.model.aggregate(this.aggregate);

  check.isNotFound(!res[0]);

  return res[0];
};

ModelGet.prototype.findOrFail = async function () {
  if (this.useAggregate) {
    return await this.findOrFailAggregate();
  }
};

ModelGet.prototype.find = async function () {
  return await this.model.findOne(this.query);
};

ModelGet.prototype.existsAggregate = async function () {
  const exists = await this.model.aggregate(this.aggregate);

  return exists[0];
};

ModelGet.prototype.exists = async function () {
  if (this.useAggregate) {
    return await this.existsAggregate();
  } else {
    return await this.model.exists(this.query);
  }
};

module.exports = ModelGet;
