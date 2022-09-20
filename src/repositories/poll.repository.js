const {
  utils: { check },
} = require('@ibrahimanshor/my-express');
const { pollOptionTotalAnswer } = require('../models/poll/aggregates');

function createPollRepository({ pollModel }) {
  async function create(body) {
    return await pollModel.create(body);
  }

  async function findByCode(code) {
    const match = {
      $match: { code },
    };
    const poll = await pollModel.aggregate([match, ...pollOptionTotalAnswer]);

    check.isNotFound(!poll[0]);

    return poll[0];
  }

  async function exists(filter) {
    return pollModel.exists(filter);
  }

  return { create, findByCode, exists };
}

module.exports = createPollRepository;
