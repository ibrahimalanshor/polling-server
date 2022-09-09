const { Schema } = require('mongoose');

const PollOptionSchema = new Schema(
  {
    name: String,
    pollId: {
      type: Schema.Types.ObjectId,
      ref: 'poll',
    },
  },
  {
    collection: 'poll_options',
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

PollOptionSchema.virtual('countAnswers', {
  ref: 'poll-answer',
  localField: '_id',
  foreignField: 'pollOptionId',
  count: true,
});

module.exports = PollOptionSchema;
