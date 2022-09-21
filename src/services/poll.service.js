const srs = require('secure-random-string');

function createPollService({ pollRepository, pollOptionService }) {
  async function create(body) {
    const code = await srs({ length: 10, alphanumeric: true });
    const poll = await pollRepository.create({
      name: body.name,
      code,
    });

    await pollOptionService.create(
      body.options.map((option) => ({
        name: option.name,
        pollId: poll.id,
      }))
    );

    return poll;
  }

  async function findByCode(code, { userIp }) {
    const getPoll = pollRepository.get().byCode(code).withOptionAnswer();

    if (userIp) {
      getPoll.withUserAnswer({ userIp });
    }

    return await getPoll.findOrFail();
  }

  async function exists({ id }) {
    return await pollRepository.get().byId(id).exists();
  }

  return { create, findByCode, exists };
}

module.exports = createPollService;
