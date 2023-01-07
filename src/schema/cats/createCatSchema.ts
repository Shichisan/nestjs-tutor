import * as Joi from 'joi';

export const createCatSchema = Joi.object({
  name: Joi.string().max(30).required(),
  age: Joi.number().positive().less(150).required(),
  breed: Joi.string().max(255).required(),
});
