/**
 * Builds a standardized response object for API responses.
 *
 * @function buildResponse
 * @param {boolean} success - Indicates whether the operation was successful.
 * @param {any} data - The data returned from the operation. It can be of any type depending on the operation's result.
 * @param {string} message - A message providing additional context about the response,
 * typically used to convey success or error information.
 * @param {any} [additionalData] - Optional additional data that can be included in the response.
 * This can be any type and is used for extra information that isn't part of the main data payload.
 * @returns {object} An object containing the standardized API response, including
 * the success status, message, data, and any additional data.
 */
const buildResponse = (success: boolean, data: any, message: string, additionalData?: any) => {
  return {
    success: success,
    message: message || (success && "success"),
    data: data,
    additionalData: additionalData,
  };
};

export { buildResponse };
