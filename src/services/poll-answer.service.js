const {
  exceptions: { ForbiddenException },
} = require('@ibrahimanshor/my-express');

function createPollAnswerService({ pollAnswerRepository }) {
  async function create(body) {
    await checkUserAlreadyAnsweredByIp({
      pollId: body.pollId,
      userIp: body.userIp,
    });

    return await pollAnswerRepository.create(body);
  }

  async function checkUserAlreadyAnsweredByIp({ pollId, userIp }) {
    const exists = await pollAnswerRepository
      .exists()
      .byPoll(pollId)
      .byUser({ userIp })
      .exists();

    if (exists) {
      throw new ForbiddenException();
    }
  }

  return { create };
}

module.exports = createPollAnswerService;
