const { Schema } = require('mongoose');

const PollAnswerSchema = new Schema(
  {
    pollId: {
      type: Schema.Types.ObjectId,
      ref: 'poll',
    },
    pollOptionId: {
      type: Schema.Types.ObjectId,
      ref: 'poll-option',
    },
    userIp: String,
  },
  {
    collection: 'poll_answers',
    timestamps: true,
  }
);

module.exports = PollAnswerSchema;
