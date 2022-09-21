const {
  responses: { SuccessResponse, CreatedResponse },
} = require('@ibrahimanshor/my-express');

function createPollController({ pollService }) {
  async function create(req, res, next) {
    try {
      const poll = await pollService.create({
        ...req.body,
        userIp: req.ip,
      });

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

  async function get(req, res, next) {
    try {
      const polls = await pollService.get(req.query);

      return new SuccessResponse('', polls).send(req, res);
    } catch (err) {
      next(err);
    }
  }

  return { create, show, get };
}

module.exports = createPollController;
