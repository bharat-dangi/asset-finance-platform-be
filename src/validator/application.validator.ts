import Joi from "joi";

/**
 * @constant FinanceDetailsSchema
 * @description Joi schema for validating the financial details of an application.
 * Validates fields related to income, expenses, assets, and liabilities.
 */
const FinanceDetailsSchema = Joi.object({
  income: Joi.number().positive().required(), // Required positive number for the income of the applicant
  expenses: Joi.number().min(0).required(), // Required number for the expenses of the applicant, must be non-negative
  assets: Joi.number().min(0).required(), // Required number for the assets of the applicant, must be non-negative
  liabilities: Joi.number().min(0).required(), // Required number for the liabilities of the applicant, must be non-negative
});

/**
 * @constant ApplicationSchema
 * @description Joi schema for validating a complete finance application.
 * Extends FinanceDetailsSchema to include additional application-specific fields.
 */
export const ApplicationSchema = Joi.object({
  userId: Joi.string().required(), // Required string for the user ID of the applicant
}).concat(FinanceDetailsSchema);

/**
 * @constant GetApplicationSchema
 * @description Joi schema for validating criteria for retrieving finance applications.
 * Allows optional fields for filtering applications, with support for null and empty values.
 */
export const GetApplicationSchema = Joi.object({
  id: Joi.string().allow(null, "").optional(), // Optional string that allows null or an empty string
  income: Joi.number().allow(null).optional(), // Optional number that allows null
  expenses: Joi.number().allow(null).optional(), // Optional number that allows null
  assets: Joi.number().allow(null).optional(), // Optional number that allows null
  liabilities: Joi.number().allow(null).optional(), // Optional number that allows null
});

/**
 * @constant DeleteApplicationSchema
 * @description Joi schema for validating the deletion of a finance application.
 * Ensures the application ID is provided and is a string.
 */
export const DeleteApplicationSchema = Joi.object({
  id: Joi.string().required(), // Required string for the application ID
});

/**
 * @constant updateApplicationSchema
 * @description Joi schema for validating the update of a finance application.
 * Ensures all required fields for an application update are present and correctly typed.
 */
export const updateApplicationSchema = Joi.object({
  _id: Joi.string().required(), // Required string for the unique identifier of the application to be updated
  userId: Joi.string().required(), // Required string for the user ID of the applicant
  income: Joi.number().required(), // Required number for the updated income of the applicant
  expenses: Joi.number().required(), // Required number for the updated expenses of the applicant
  assets: Joi.number().required(), // Required number for the updated assets of the applicant
  liabilities: Joi.number().required(), // Required number for the updated liabilities of the applicant
});
