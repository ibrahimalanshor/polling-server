const { Schema } = require('mongoose');

const PollSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = PollSchema;
