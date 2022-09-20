const {
  responses: { CreatedResponse },
} = require('@ibrahimanshor/my-express');

function createPollAnswerController({ pollAnswerService }) {
  async function create(req, res, next) {
    try {
      const pollAnswer = await pollAnswerService.create({
        ...req.body,
        userIp: req.ip,
      });

      return new CreatedResponse('', pollAnswer).send(req, res);
    } catch (err) {
      next(err);
    }
  }

  return { create };
}

module.exports = createPollAnswerController;
