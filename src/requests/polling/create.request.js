const { body } = require('express-validator');

function createPollingRequestCreate() {
  const rules = [
    body('name')
      .exists()
      .bail()
      .withMessage('validation.exists')
      .notEmpty()
      .bail()
      .withMessage('validation.not-empty')
      .isString()
      .bail()
      .withMessage('validation.string'),
  ];

  return { rules };
}

module.exports = createPollingRequestCreate;
