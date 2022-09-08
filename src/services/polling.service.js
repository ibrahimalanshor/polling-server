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

  return { create, find };
}

module.exports = createPollingService;
