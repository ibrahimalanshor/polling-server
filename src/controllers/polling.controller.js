const {
  responses: { SuccessResponse, CreatedResponse },
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

  async function show(req, res, next) {
    try {
      const polling = await pollingService.find(req.params.id);

      return new SuccessResponse('', polling).send(req, res);
    } catch (err) {
      next(err);
    }
  }

  return { create, show };
}

module.exports = createPollingController;
