import { DatabaseDSBase } from "../../source/database/database.data.source.base";
import { Repository } from "./repository";

export class BaseRepository<T> implements Repository<T> {
  dataSource: DatabaseDSBase<T>;

  constructor(dataSource: DatabaseDSBase<T>) {
    this.dataSource = dataSource;
  }

  async count(criteria: any): Promise<number> {
    return await this.dataSource.count(criteria);
  }

  async insertOne(data: any): Promise<T> {
    return await this.dataSource.insertOne(data);
  }

  async insertMany(data: any): Promise<T[]> {
    return await this.dataSource.insertMany(data);
  }

  async find(criteria: any, options: any, paginationOptions: any): Promise<T[]> {
    return await this.dataSource.find(criteria, options, paginationOptions);
  }

  async findOne(criteria: any, options: any): Promise<T | null> {
    return await this.dataSource.findOne(criteria, options);
  }

  async updateOne(criteria: any, updateData: any, options: any): Promise<T | null> {
    return await this.dataSource.updateOne(criteria, updateData, options);
  }

  async updateMany(criteria: any, updateData: any, options: any): Promise<T[]> {
    return await this.dataSource.updateMany(criteria, updateData, options);
  }
}
