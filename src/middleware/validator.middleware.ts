import Joi from "joi";
import { ErrorResponse } from "../types/errorResponse.types";
import { NextFunction, Request, Response } from "express";

/**
 * @function validationHandler
 * @description Middleware to validate incoming requests using Joi schemas.
 * @param {ObjectSchema} schema - The Joi schema to validate against.
 * @returns {Function} Middleware function to validate request bodies.
 */

export const validationHandler = (schema: Joi.ObjectSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");

      next(new ErrorResponse(message, 400));
    }
  };
};

/**
 * @function validationQueryHandler
 * @description Middleware to validate incoming requests using Joi schemas.
 * @param {ObjectSchema} schema - The Joi schema to validate against.
 * @returns {Function} Middleware function to validate request query.
 */

export const validationQueryHandler = (schema: Joi.ObjectSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.query);
    const valid = error == null;

    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");

      next(new ErrorResponse(message, 400));
    }
  };
};
