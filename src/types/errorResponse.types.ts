/**
 * @class ErrorResponse
 * @extends {Error}
 * @description Custom error class extending the built-in Error class to include an HTTP status code.
 * This is useful for providing more structured error handling in web applications.
 */
export class ErrorResponse extends Error {
  statusCode: any;

  /**
   * @constructor
   * @param {any} message - The error message that describes the error.
   * @param {any} statusCode - The HTTP status code associated with the error.
   */
  constructor(message: any, statusCode: any) {
    super(message);
    this.statusCode = statusCode;
  }
}
