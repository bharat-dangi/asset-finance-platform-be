/**
 * @class ErrorResponse
 * @extends {Error}
 * @description Custom error class that extends the built-in Error class to include an HTTP status code.
 * This allows for more structured and informative error handling in web applications.
 */
export class ErrorResponse extends Error {
  statusCode: number;

  /**
   * @constructor
   * @param {string} message - The error message that provides details about the error.
   * @param {number} statusCode - The HTTP status code associated with the error.
   */
  constructor(message: any, statusCode: any) {
    super(message); // Call the parent class constructor with the error message
    this.statusCode = statusCode; // Set the HTTP status code for the error
  }
}
