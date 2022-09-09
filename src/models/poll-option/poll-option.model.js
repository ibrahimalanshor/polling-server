const { model } = require('mongoose');
const PollOptionSchema = require('./poll-option.schema.js');

module.exports = model('poll-option', PollOptionSchema);
