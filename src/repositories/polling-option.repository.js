function createPollingOptionRepository({ pollingOptionModel }) {
  async function createMany(options) {
    return await pollingOptionModel.create(options);
  }

  return { createMany };
}

module.exports = createPollingOptionRepository;
