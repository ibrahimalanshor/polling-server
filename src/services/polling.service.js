function createPollingService({ pollingRepository, pollingOptionService }) {
  async function create(body) {
    const polling = await pollingRepository.create({
      name: body.name,
    });

    const pollingOptions = await pollingOptionService.createMany(
      body.options.map((option) => ({
        name: option.name,
        pollingId: polling.id,
      }))
    );

    await pollingRepository.pushOptions(
      polling,
      pollingOptions.map((option) => option.id)
    );

    return polling;
  }

  async function find(id) {
    return await pollingRepository.find(id);
  }

  async function exists(id) {
    return await pollingRepository.exists({ _id: id });
  }

  return { create, find, exists };
}

module.exports = createPollingService;
