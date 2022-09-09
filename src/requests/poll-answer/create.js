const { body } = require('express-validator');

function createPollAnswerRequestCreate({ pollService, pollOptionService }) {
  const rules = [
    body('pollId')
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
        const exists = await pollService.exists(val);

        if (!exists) throw new Error();

        return true;
      })
      .bail()
      .withMessage('validation.not-exists'),
    body('pollOptionId')
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
        const exists = await pollOptionService.exists(val);

        if (!exists) throw new Error();

        return true;
      })
      .bail()
      .withMessage('validation.not-exists'),
  ];

  return { rules };
}

module.exports = createPollAnswerRequestCreate;
