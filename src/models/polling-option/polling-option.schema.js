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
  }
);

module.exports = PollingOptionSchema;
