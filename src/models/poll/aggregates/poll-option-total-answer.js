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
            pipeline: [
              { $count: 'count' },
              { $unwind: { path: '$count', preserveNullAndEmptyArrays: true } },
            ],
          },
        },
        { $unwind: { path: '$answers', preserveNullAndEmptyArrays: true } },
        {
          $set: {
            countAnswers: {
              $cond: {
                if: '$answers',
                then: '$answers.count',
                else: 0,
              },
            },
          },
        },
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
