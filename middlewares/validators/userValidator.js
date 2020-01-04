const Joi = require('@hapi/joi');

const schemaUserId = Joi.object().keys({
  id: Joi.number().min(0).required(),
})

exports.checkUserId = [
  async (req, res, next) => {
    let result = schemaUserId.validate(req.params)

    if (result.error)
      return res.status(400).json({ opcode: 400, message: result.error.message });
    return next()
  }
]
