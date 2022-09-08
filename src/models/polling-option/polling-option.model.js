const { model } = require('mongoose');
const PollingOptionSchema = require('./polling-option.schema.js');

module.exports = model('polling-option', PollingOptionSchema);
