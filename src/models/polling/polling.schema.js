const { Schema } = require('mongoose');

const PollingSchema = new Schema(
  {
    name: String,
    slug: String,
  },
  {
    timestamps: true,
  }
);

module.exports = PollingSchema;
