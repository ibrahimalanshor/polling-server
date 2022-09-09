function createPollOptionService({ pollOptionRepository }) {
  async function createMany(options) {
    return await pollOptionRepository.createMany(options);
  }

  async function exists(id) {
    return await pollOptionRepository.exists({ _id: id });
  }

  return { createMany, exists };
}

module.exports = createPollOptionService;
