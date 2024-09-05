import Joi from "joi";

/**
 * @constant UserSchema
 * @description Joi schema for validating user objects. This schema ensures
 * that the object contains all required fields with the correct data types and constraints for creating a new user.
 */
export const UserSchema = Joi.object({
  name: Joi.string().required(), // Required string for the name of the user
  age: Joi.number().integer().min(0).required(), // Required integer for the age of the user, must be non-negative
  address: Joi.string().required(), // Required string for the address of the user
});

/**
 * @constant GetUserSchema
 * @description Joi schema for validating user retrieval criteria.
 * This schema allows partial fields to be used for filtering user data in queries.
 */
export const GetUserSchema = Joi.object({
  _id: Joi.string().optional(), // Optional string for the unique identifier of the user
  name: Joi.string().optional(), // Optional string for the name of the user
  age: Joi.number().integer().min(0).optional(), // Optional integer for the age of the user, must be non-negative
  address: Joi.string().optional(), // Optional string for the address of the user
});

/**
 * @constant deleteUserSchema
 * @description Joi schema for validating user deletion criteria.
 * This schema ensures that the object contains the required field for identifying a user to be deleted.
 */
export const deleteUserSchema = Joi.object({
  _id: Joi.string().required(), // Required string for the unique identifier of the user
});
