const {
  utils: { database },
} = require('@ibrahimanshor/my-express');
const srs = require('secure-random-string');

function createPollService({ pollRepository, pollOptionService }) {
  async function create(body) {
    const code = await srs({ length: 10, alphanumeric: true });
    const poll = await pollRepository.create({
      name: body.name,
      userIp: body.userIp,
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

    getPoll.excludeUserIp();

    return await getPoll.findOrFail();
  }

  async function exists({ id }) {
    return await pollRepository.get().byId(id).exists();
  }

  async function get(filter = {}) {
    const query = pollRepository
      .get()
      .search({ code: filter.code, name: filter.name });
    const paginate = database.paginate({
      page: filter.page,
      limit: filter.limit,
    });

    const docsQuery = query.clone();
    const countQuery = query.clone();

    if (filter.sort) {
      docsQuery.sort(filter.sort);
    }

    const docs = await docsQuery
      .paginate({ skip: paginate.offset, limit: paginate.limit })
      .withOptionAnswer()
      .findAll();
    const count = await countQuery.count();

    return { count, docs };
  }

  return { create, findByCode, exists, get };
}

module.exports = createPollService;
