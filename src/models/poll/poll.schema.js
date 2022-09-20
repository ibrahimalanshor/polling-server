const { Schema } = require('mongoose');

const PollSchema = new Schema(
  {
    name: String,
    code: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = PollSchema;
