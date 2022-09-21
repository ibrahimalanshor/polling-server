const mongoose = require('mongoose');

module.exports = async (url, options = {}) => {
  await mongoose.connect(url);

  if (options.debug) mongoose.set('debug', true);

  console.log(`database connected at ${url}`);
};
