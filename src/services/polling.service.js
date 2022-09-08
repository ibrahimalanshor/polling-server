function createPollingService({ pollingRepository, pollingOptionService }) {
  async function create(body) {
    const polling = await pollingRepository.create({
      name: body.name,
    });

    await pollingOptionService.createMany(
      body.options.map((option) => ({
        name: option.name,
        pollingId: polling.id,
      }))
    );

    return polling;
  }

  return { create };
}

module.exports = createPollingService;
