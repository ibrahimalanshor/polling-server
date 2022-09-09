const { Schema } = require('mongoose');

const PollingOptionSchema = new Schema(
  {
    name: String,
    pollingId: {
      type: Schema.Types.ObjectId,
      ref: 'polling',
    },
  },
  {
    collection: 'polling_options',
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

PollingOptionSchema.virtual('countAnswers', {
  ref: 'polling-answer',
  localField: '_id',
  foreignField: 'pollingOptionId',
  count: true,
});

module.exports = PollingOptionSchema;
