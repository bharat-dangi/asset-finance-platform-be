import "colors";
import { ErrorRequestHandler, NextFunction, Response, Request } from "express";

/**
 * @function errorHandler
 * @description Middleware for handling errors in Express applications. It captures errors and sends a formatted JSON response to the client.
 * @param {Error} err - The error object containing details about the error.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function in the stack.
 * @returns {void} Sends a JSON response with the error message and status code.
 */
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const { message, statusCode } = err;

  let error = {
    statusCode: statusCode,
    message: message,
  };

  console.error("Error: ".red, error);

  res.status(error.statusCode || 500).json({
    success: false,
    data: null,
    message: error.message || "Internal Server Error",
  });
};

/**
 * @function error404Handler
 * @description Middleware for handling 404 Not Found errors in Express applications. It responds with a 404 status code and a JSON message.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function in the stack.
 * @returns {void} Sends a JSON response indicating the requested resource was not found.
 */
const error404Handler = (req: Request, res: Response, next: NextFunction) => {
  res.status(404);
  res.send({ success: false, data: null, message: "Not found" });
};

export { errorHandler, error404Handler };
