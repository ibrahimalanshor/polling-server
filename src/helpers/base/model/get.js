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

ModelGet.prototype.findAllQuery = async function () {
  return await this.model.find();
};

ModelGet.prototype.findAllAggregate = async function () {
  if (!this.aggregate.length) {
    return await this.findAllQuery();
  }

  return await this.model.aggregate(this.aggregate);
};

ModelGet.prototype.findAll = async function () {
  if (this.useAggregate) {
    return await this.findAllAggregate();
  }
};

ModelGet.prototype.countAggregate = async function () {
  this.aggregate.push({
    $count: 'count',
  });

  const res = await this.model.aggregate(this.aggregate);

  return res[0] ? res[0].count : 0;
};

ModelGet.prototype.count = async function () {
  if (this.useAggregate) {
    return await this.countAggregate();
  } else {
    return await this.model.count(this.query);
  }
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

ModelGet.prototype.sort = function (column) {
  let order = 1;

  if (column[0] === '-') {
    order = -1;
    column = column.slice(1);
  }

  const sort = { [column]: order };

  if (this.useAggregate) {
    this.aggregate.push({
      $sort: sort,
    });
  } else {
    this.query.push({
      sort,
    });
  }

  return this;
};

ModelGet.prototype.skip = function (skip) {
  if (this.useAggregate) {
    this.aggregate.push({
      $skip: skip,
    });
  } else {
    this.query.push({ skip });
  }
};

ModelGet.prototype.limit = function (limit) {
  if (this.useAggregate) {
    this.aggregate.push({
      $limit: limit,
    });
  } else {
    this.query.push({ limit });
  }
};

ModelGet.prototype.paginate = function ({ skip, limit }) {
  if (skip) {
    this.skip(skip);
  }

  if (limit) {
    this.limit(limit);
  }

  return this;
};

ModelGet.prototype.match = function (column, value) {
  if (this.useAggregate) {
    const matchAggregate = this.aggregate.findIndex((pipeline) =>
      Object.prototype.hasOwnProperty.call(pipeline, '$match')
    );

    if (matchAggregate === -1) {
      this.aggregate.push({
        $match: {
          [column]: value,
        },
      });
    } else {
      this.aggregate[matchAggregate].$match[column] = value;
    }
  }

  return this;
};

ModelGet.prototype.clone = function () {
  const clone = new this.constructor({ model: this.model });

  clone.aggregate = [...this.aggregate];
  clone.query = { ...this.query };

  return clone;
};

module.exports = ModelGet;
