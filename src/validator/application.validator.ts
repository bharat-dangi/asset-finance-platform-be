import Joi from "joi";

/**
 * @constant FinanceDetailsSchema
 * @description Joi schema for validating financial details of an application.
 */
const FinanceDetailsSchema = Joi.object({
  income: Joi.number().positive().required(),
  expenses: Joi.number().min(0).required(),
  assets: Joi.number().min(0).required(),
  liabilities: Joi.number().min(0).required(),
});

/**
 * @constant ApplicationSchema
 * @description Joi schema for validating a complete finance application.
 */
export const ApplicationSchema = Joi.object({
  userId: Joi.string().required(),
}).concat(FinanceDetailsSchema);

export const GetApplicationSchema = Joi.object({
  id: Joi.string().allow(null, "").optional(), // Optional string that allows null or an empty string
  income: Joi.number().allow(null).optional(), // Optional number that allows null
  expenses: Joi.number().allow(null).optional(), // Optional number that allows null
  assets: Joi.number().allow(null).optional(), // Optional number that allows null
  liabilities: Joi.number().allow(null).optional(), // Optional number that allows null
});

export const DeleteApplicationSchema = Joi.object({
  id: Joi.string().required(), // Required string for the application ID
});
