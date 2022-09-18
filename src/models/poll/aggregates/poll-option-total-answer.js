module.exports = [
  {
    $lookup: {
      from: 'poll_options',
      localField: '_id',
      foreignField: 'pollId',
      as: 'options',
      pipeline: [
        {
          $lookup: {
            from: 'poll_answers',
            localField: '_id',
            foreignField: 'pollOptionId',
            as: 'answers',
            pipeline: [{ $count: 'count' }, { $unwind: '$count' }],
          },
        },
        { $unwind: '$answers' },
        { $set: { countAnswers: '$answers.count' } },
        { $unset: 'answers' },
      ],
    },
  },
  {
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
  },
];
