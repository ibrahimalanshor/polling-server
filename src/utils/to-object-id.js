const { Types } = require('mongoose');

module.exports = (id) => new Types.ObjectId(id);
