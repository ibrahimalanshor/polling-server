const { body } = require('express-validator');

function createPollingAnswerRequestCreate({
  pollingService,
  pollingOptionService,
}) {
  const rules = [
    body('pollingId')
      .exists({ checkNull: true, checkFalsy: true })
      .bail()
      .withMessage('validation.exists')
      .notEmpty()
      .bail()
      .withMessage('validation.not-empty')
      .isMongoId()
      .bail()
      .withMessage('validation.mongoid')
      .custom(async (val) => {
        const exists = await pollingService.exists(val);

        if (!exists) throw new Error();

        return true;
      })
      .bail()
      .withMessage('validation.not-exists'),
    body('pollingOptionId')
      .exists({ checkNull: true, checkFalsy: true })
      .bail()
      .withMessage('validation.exists')
      .notEmpty()
      .bail()
      .withMessage('validation.not-empty')
      .isMongoId()
      .bail()
      .withMessage('validation.mongoid')
      .custom(async (val) => {
        const exists = await pollingOptionService.exists(val);

        if (!exists) throw new Error();

        return true;
      })
      .bail()
      .withMessage('validation.not-exists'),
  ];

  return { rules };
}

module.exports = createPollingAnswerRequestCreate;
