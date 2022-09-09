const {
  utils: { check },
} = require('@ibrahimanshor/my-express');
const { isValidObjectId } = require('../utils');

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

  async function find(id) {
    check.isNotFound(!isValidObjectId(id));

    return await pollingRepository.find(id);
  }

  async function exists(id) {
    return await pollingRepository.exists({ _id: id });
  }

  return { create, find, exists };
}

module.exports = createPollingService;
