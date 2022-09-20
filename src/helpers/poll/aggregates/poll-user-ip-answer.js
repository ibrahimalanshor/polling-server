module.exports = (userIp) => [
  {
    $lookup: {
      from: 'poll_answers',
      localField: '_id',
      foreignField: 'pollId',
      as: 'userAnswer',
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ['$userIp', userIp],
            },
          },
        },
        {
          $limit: 1,
        },
      ],
    },
  },
  {
    $unwind: {
      path: '$userAnswer',
      preserveNullAndEmptyArrays: true,
    },
  },
];
