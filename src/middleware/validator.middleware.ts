import Joi from "joi";
import { ErrorResponse } from "../types/errorResponse.types";
import { NextFunction, Request, Response } from "express";

/**
 * @function validationHandler
 * @description Middleware to validate incoming request bodies using Joi schemas. If the request body does not match the schema, it responds with a 400 error.
 * @param {Joi.ObjectSchema} schema - The Joi schema to validate against.
 * @returns {Function} Middleware function to validate request bodies.
 */
export const validationHandler = (schema: Joi.ObjectSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body); // Validate request body against the schema
    const valid = error == null;

    if (valid) {
      next(); // Proceed to the next middleware if validation passes
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(","); // Collect error messages

      next(new ErrorResponse(message, 400)); // Pass an error to the next middleware with a 400 status
    }
  };
};

/**
 * @function validationQueryHandler
 * @description Middleware to validate incoming request queries using Joi schemas. If the request query does not match the schema, it responds with a 400 error.
 * @param {Joi.ObjectSchema} schema - The Joi schema to validate against.
 * @returns {Function} Middleware function to validate request queries.
 */
export const validationQueryHandler = (schema: Joi.ObjectSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.query); // Validate request query against the schema
    const valid = error == null;

    if (valid) {
      next(); // Proceed to the next middleware if validation passes
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(","); // Collect error messages

      next(new ErrorResponse(message, 400)); // Pass an error to the next middleware with a 400 status
    }
  };
};
