function ModelExists(model) {
  this.model = model;
  this.query = {};
}

ModelExists.prototype.exists = async function () {
  return await this.model.exists(this.query);
};

module.exports = ModelExists;
