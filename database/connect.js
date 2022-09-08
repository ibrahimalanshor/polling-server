const mongoose = require('mongoose');

module.exports = async (url) => {
  await mongoose.connect(url);

  console.log(`database connected at ${url}`);
};
