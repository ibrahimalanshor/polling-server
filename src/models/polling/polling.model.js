const { model } = require('mongoose');
const PollingSchema = require('./polling.schema.js');

module.exports = model('polling', PollingSchema);
