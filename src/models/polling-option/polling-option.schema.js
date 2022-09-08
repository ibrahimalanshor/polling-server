const { Schema } = require('mongoose');

const PollingOptionSchema = new Schema({
  name: String,
  pollingId: {
    type: Schema.Types.ObjectId,
    ref: 'polling',
  },
});

module.exports = PollingOptionSchema;
