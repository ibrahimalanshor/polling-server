const { body } = require('express-validator');
const {
  utils: { validators },
} = require('@ibrahimanshor/my-express');
const { toObjectId } = require('../../utils');

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
        const exists = await pollService.exists({ id: toObjectId(val) });

        if (!exists) throw new Error();

        return true;
      })
      .bail()
      .withMessage('validation.not-exists'),
    body('pollOptionId')
      .if(validators.related('pollId'))
      .exists({ checkNull: true, checkFalsy: true })
      .bail()
      .withMessage('validation.exists')
      .notEmpty()
      .bail()
      .withMessage('validation.not-empty')
      .isMongoId()
      .bail()
      .withMessage('validation.mongoid')
      .custom(async (val, { req }) => {
        const exists = await pollOptionService.exists({
          id: val,
          pollId: req.body.pollId,
        });

        if (!exists) throw new Error();

        return true;
      })
      .bail()
      .withMessage('validation.not-exists'),
  ];

  return { rules };
}

module.exports = createPollAnswerRequestCreate;
