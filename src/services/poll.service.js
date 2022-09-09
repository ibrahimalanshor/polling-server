const {
  utils: { check },
} = require('@ibrahimanshor/my-express');
const { isValidObjectId } = require('../utils');

function createPollService({ pollRepository, pollOptionService }) {
  async function create(body) {
    const poll = await pollRepository.create({
      name: body.name,
    });

    await pollOptionService.createMany(
      body.options.map((option) => ({
        name: option.name,
        pollId: poll.id,
      }))
    );

    return poll;
  }

  async function find(id) {
    check.isNotFound(!isValidObjectId(id));

    return await pollRepository.find(id);
  }

  async function exists(id) {
    return await pollRepository.exists({ _id: id });
  }

  return { create, find, exists };
}

module.exports = createPollService;
