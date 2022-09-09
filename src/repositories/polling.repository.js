const {
  utils: { check },
} = require('@ibrahimanshor/my-express');
const { toObjectId } = require('../utils');

function createPollingRepository({ pollingModel }) {
  async function create(body) {
    return await pollingModel.create(body);
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
    const countPollingAnswers = [{ $count: 'count' }, { $unwind: '$count' }];
    const lookupPollingAnswers = {
      $lookup: {
        from: 'polling_answers',
        localField: '_id',
        foreignField: 'pollingOptionId',
        as: 'answers',
        pipeline: countPollingAnswers,
      },
    };
    const lookupPollingOptions = {
      $lookup: {
        from: 'polling_options',
        localField: '_id',
        foreignField: 'pollingId',
        as: 'options',
        pipeline: [lookupPollingAnswers, ...setCountAnswers],
      },
    };
    const polling = await pollingModel.aggregate([
      match,
      lookupPollingOptions,
      setTotalAnswers,
    ]);

    check.isNotFound(!polling[0]);

    return polling[0];
  }

  async function exists(filter) {
    return pollingModel.exists(filter);
  }

  return { create, find, exists };
}

module.exports = createPollingRepository;
