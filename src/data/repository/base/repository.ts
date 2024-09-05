export abstract class Repository<T> {
  abstract insertOne(data: any): Promise<T>;
  abstract insertMany(data: any): Promise<T[]>;
  abstract find(criteria: any, options: any, paginationOptions: any): Promise<T[]>;

  abstract findOne(criteria: any, options: any): Promise<T | null>;
  abstract updateOne(criteria: any, updateData: any, options: any): Promise<T | null>;

  abstract updateMany(criteria: any, updateData: any, options: any): Promise<T[]>;
  abstract count(criteria: any): Promise<number>;
}
