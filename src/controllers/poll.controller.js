const {
  responses: { SuccessResponse, CreatedResponse },
  utils: { check },
} = require('@ibrahimanshor/my-express');
const { isValidObjectId, toObjectId } = require('../utils');

function createPollController({ pollService }) {
  async function create(req, res, next) {
    try {
      const poll = await pollService.create(req.body);

      return new CreatedResponse('', poll).send(req, res);
    } catch (err) {
      next(err);
    }
  }

  async function show(req, res, next) {
    try {
      const poll = await pollService.findByCode(req.params.code, {
        userIp: req.ip,
      });

      return new SuccessResponse('', poll).send(req, res);
    } catch (err) {
      next(err);
    }
  }

  return { create, show };
}

module.exports = createPollController;
