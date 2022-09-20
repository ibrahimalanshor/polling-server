const srs = require('secure-random-string');

function createPollService({ pollRepository, pollOptionService }) {
  async function create(body) {
    const code = await srs({ length: 10, alphanumeric: true });
    const poll = await pollRepository.create({
      name: body.name,
      code,
    });

    await pollOptionService.createMany(
      body.options.map((option) => ({
        name: option.name,
        pollId: poll.id,
      }))
    );

    return poll;
  }

  async function findByCode(code) {
    return await pollRepository.findByCode(code);
  }

  async function exists(id) {
    return await pollRepository.exists({ _id: id });
  }

  return { create, findByCode, exists };
}

module.exports = createPollService;
