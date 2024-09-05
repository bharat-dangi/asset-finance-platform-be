import { User } from "../../../types/user.types";
import { UserModel } from "../../model/user.models";
import { UserDSBase } from "./user.data.source.base";

export class UserDS implements UserDSBase {
  async insertOne(data: any): Promise<User> {
    return await UserModel.create(data);
  }
  async insertMany(data: any): Promise<User[]> {
    return await UserModel.insertMany(data, { lean: true });
  }
  async find(criteria: any, options: any): Promise<User[]> {
    return await UserModel.find(criteria, {}, options).lean().exec();
  }
  async findOne(criteria: any, options: any): Promise<User | null> {
    return await UserModel.findOne(criteria, options).lean().exec();
  }
  async updateOne(criteria: any, updateData: any, options: any): Promise<User | null> {
    return UserModel.findOneAndUpdate(criteria, updateData, options).lean().exec();
  }
  async updateMany(criteria: any, updateData: any, options: any): Promise<User[]> {
    return UserModel.updateMany(criteria, updateData, options) as any;
  }
  async deleteOne(criteria: any, options: any): Promise<User | null> {
    return await UserModel.findOneAndDelete(criteria, { ...options, lean: true });
  }
  async count(criteria: any): Promise<number> {
    return await UserModel.count(criteria).lean().exec();
  }
}
