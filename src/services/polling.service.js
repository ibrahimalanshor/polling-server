const slugify = require('slugify');

function createPollingService({ pollingRepository }) {
  async function create(body) {
    return await pollingRepository.create({
      ...body,
      slug: slugify(body.name, { lower: true }),
    });
  }

  return { create };
}

module.exports = createPollingService;
