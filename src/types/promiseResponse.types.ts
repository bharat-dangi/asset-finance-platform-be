/**
 * @interface PromiseResponse
 * @description A generic interface for defining the structure of a response object used in asynchronous operations,
 * especially in service methods. This interface is designed to handle both successful responses and errors.
 * @template DataType - The type of the data property, representing the successful response data.
 * @template ErrorType - The type of the error property, representing the error details when an operation fails.
 */
export interface PromiseResponse<DataType, ErrorType> {
  /**
   * @property {DataType} [data] - The data resulting from a successful operation.
   * It is optional and only present when the operation succeeds.
   */
  data?: DataType;

  /**
   * @property {number} [totalCount] - The total count of items, usually used in responses involving collections or lists.
   * It is optional and may not always be present.
   */
  totalCount?: number;

  /**
   * @property {ErrorType | Error} [error] - The error information resulting from a failed operation.
   * It is optional and only present when an error occurs.
   */
  error?: ErrorType | Error;
}
