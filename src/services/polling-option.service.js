function createPollingOptionService({ pollingOptionRepository }) {
  async function createMany(options) {
    return await pollingOptionRepository.createMany(options);
  }

  return { createMany };
}

module.exports = createPollingOptionService;
