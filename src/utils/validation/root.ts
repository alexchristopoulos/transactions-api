import joi from 'joi';

export const postRootSchema = joi.object({
  msg: joi.string().required().alphanum(),
});
