function createPollingOptionService({ pollingOptionRepository }) {
  async function createMany(options) {
    return await pollingOptionRepository.createMany(options);
  }

  async function exists(id) {
    return await pollingOptionRepository.exists({ _id: id });
  }

  return { createMany, exists };
}

module.exports = createPollingOptionService;
