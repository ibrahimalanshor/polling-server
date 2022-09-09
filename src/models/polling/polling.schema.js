const { Schema } = require('mongoose');

const PollingSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

PollingSchema.virtual('options', {
  ref: 'polling-option',
  localField: '_id',
  foreignField: 'pollingId',
});

module.exports = PollingSchema;
