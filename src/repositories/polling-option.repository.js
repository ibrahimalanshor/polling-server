function createPollingOptionRepository({ pollingOptionModel }) {
  async function createMany(options) {
    return await pollingOptionModel.create(options);
  }

  async function exists(filter) {
    return pollingOptionModel.exists(filter);
  }

  return { createMany, exists };
}

module.exports = createPollingOptionRepository;
