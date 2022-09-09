const { isValidObjectId } = require('mongoose');

module.exports = (id) => isValidObjectId(id);
