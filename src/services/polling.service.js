const slugify = require('slugify');

function createPollingService({ pollingRepository, pollingOptionService }) {
  async function create(body) {
    const polling = await pollingRepository.create({
      name: body.name,
      slug: slugify(body.name, { lower: true }),
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
