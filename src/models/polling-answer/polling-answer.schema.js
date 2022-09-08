const { Schema } = require('mongoose');

const PollingAnswerSchema = new Schema(
  {
    pollingId: {
      type: Schema.Types.ObjectId,
      ref: 'polling',
    },
    pollingOptionId: {
      type: Schema.Types.ObjectId,
      ref: 'polling-option',
    },
  },
  {
    collection: 'polling_answers',
    timestamps: true,
  }
);

module.exports = PollingAnswerSchema;
