const { model } = require('mongoose');
const PollSchema = require('./poll.schema.js');

module.exports = model('poll', PollSchema);
