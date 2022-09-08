const {
  responses: { CreatedResponse },
} = require('@ibrahimanshor/my-express');

function createPollingAnswerController({ pollingAnswerService }) {
  async function create(req, res, next) {
    try {
      const pollingAnswer = await pollingAnswerService.create(req.body);

      return new CreatedResponse('', pollingAnswer).send(req, res);
    } catch (err) {
      next(err);
    }
  }

  return { create };
}

module.exports = createPollingAnswerController;
