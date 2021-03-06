// Validation
const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  console.log(data,"data");
  const schema = Joi.object({
    name: Joi.string().min(1).max(50).required(),
    email: Joi.string().min(1).max(255).required().email(),
    password: Joi.string().min(6).max(255).required(),
    address: Joi.string().min(1).max(255).required(),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(1).max(255).required().email(),
    password: Joi.string().min(6).max(255).required(),
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
