const { model } = require('mongoose');
const PollAnswerSchema = require('./poll-answer.schema.js');

module.exports = model('poll-answer', PollAnswerSchema);
