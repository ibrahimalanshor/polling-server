const {
  utils: { check },
} = require('@ibrahimanshor/my-express');
const { toObjectId } = require('../utils');

function createPollRepository({ pollModel }) {
  async function create(body) {
    return await pollModel.create(body);
  }

  async function find(id) {
    const match = {
      $match: {
        _id: toObjectId(id),
      },
    };
    const setTotalAnswers = {
      $set: {
        totalAnswers: {
          $reduce: {
            input: '$options',
            initialValue: 0,
            in: {
              $add: ['$$value', '$$this.countAnswers'],
            },
          },
        },
      },
    };
    const setCountAnswers = [
      { $unwind: '$answers' },
      { $set: { countAnswers: '$answers.count' } },
      { $unset: 'answers' },
    ];
    const countPollAnswers = [{ $count: 'count' }, { $unwind: '$count' }];
    const lookupPollAnswers = {
      $lookup: {
        from: 'poll_answers',
        localField: '_id',
        foreignField: 'pollOptionId',
        as: 'answers',
        pipeline: countPollAnswers,
      },
    };
    const lookupPollOptions = {
      $lookup: {
        from: 'poll_options',
        localField: '_id',
        foreignField: 'pollId',
        as: 'options',
        pipeline: [lookupPollAnswers, ...setCountAnswers],
      },
    };
    const poll = await pollModel.aggregate([
      match,
      lookupPollOptions,
      setTotalAnswers,
    ]);

    check.isNotFound(!poll[0]);

    return poll[0];
  }

  async function exists(filter) {
    return pollModel.exists(filter);
  }

  return { create, find, exists };
}

module.exports = createPollRepository;
