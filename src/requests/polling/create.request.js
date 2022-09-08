const { body } = require('express-validator');

function createPollingRequestCreate() {
  const rules = [
    body('name')
      .exists({ checkNull: true, checkFalsy: true })
      .bail()
      .withMessage('validation.exists')
      .notEmpty()
      .bail()
      .withMessage('validation.not-empty')
      .isString()
      .bail()
      .withMessage('validation.string'),
    body('options')
      .exists({ checkNull: true, checkFalsy: true })
      .bail()
      .withMessage('validation.exists')
      .isArray({ min: 2 })
      .bail()
      .withMessage('validation.invalid'),
    body('options.*.name')
      .exists({ checkNull: true, checkFalsy: true })
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
