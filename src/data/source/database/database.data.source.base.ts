/**
 * @abstract
 * @class DatabaseDSBase
 * @description An abstract base class that defines the contract for database operations.
 * It provides a standard interface for implementing various database operations like insertion,
 * querying, updating, and counting records.
 * @template T The type of the document or record that the database operations will handle.
 */
export abstract class DatabaseDSBase<T> {
  abstract insertOne(data: any): Promise<T>;
  abstract insertMany(data: any): Promise<T[]>;
  abstract find(criteria: any, options: any, paginationOptions: any): Promise<T[]>;
  abstract findOne(criteria: any, options: any): Promise<T | null>;
  abstract updateOne(criteria: any, updateData: any, options: any): Promise<T | null>;
  abstract updateMany(criteria: any, updateData: any, options: any): Promise<T[]>;
  abstract deleteOne(criteria: any, options: any): Promise<T | null>;
  abstract count(criteria: any): Promise<number>;
}
