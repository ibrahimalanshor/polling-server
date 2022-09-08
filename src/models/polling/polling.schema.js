const { Schema } = require('mongoose');

const PollingSchema = new Schema(
  {
    name: String,
    options: [
      {
        type: Schema.Types.ObjectId,
        ref: 'polling-option',
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = PollingSchema;
