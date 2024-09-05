// src/validators/applicationValidator.ts

import Joi from "joi";

/**
 * @constant PersonalDetailsSchema
 * @description Joi schema for validating personal details of a user.
 */
const PersonalDetailsSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().integer().required(),
  address: Joi.string().required(),
});

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
  personalDetails: PersonalDetailsSchema.required(),
}).concat(FinanceDetailsSchema);
