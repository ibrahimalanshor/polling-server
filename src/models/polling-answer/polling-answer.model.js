const { model } = require('mongoose');
const PollingAnswerSchema = require('./polling-answer.schema.js');

module.exports = model('polling-answer', PollingAnswerSchema);
