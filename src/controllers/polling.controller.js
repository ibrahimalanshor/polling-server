const {
  responses: { CreatedResponse },
} = require('@ibrahimanshor/my-express');

function createPollingController({ pollingService }) {
  async function create(req, res, next) {
    try {
      const polling = await pollingService.create(req.body);

      return new CreatedResponse('', polling).send(req, res);
    } catch (err) {
      next(err);
    }
  }

  return { create };
}

module.exports = createPollingController;
