const { Schema } = require('mongoose');

const PollingSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

module.exports = PollingSchema;
