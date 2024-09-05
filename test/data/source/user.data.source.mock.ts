import { UserDSBase } from "../../../src/data/source/user/user.data.source.base";
import { User } from "../../../src/types/user.types";

export class UserDSMock implements UserDSBase {
  insertOne(data: any): Promise<User> {
    throw new Error("Method not implemented.");
  }
  insertMany(data: any): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  find(criteria: any, options: any): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  findOne(criteria: any, options: any): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  updateOne(criteria: any, updateData: any, options: any): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  updateMany(criteria: any, updateData: any, options: any): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  deleteOne(criteria: any, options: any): Promise<User | null> {
    throw new Error("Method not implemented.");
  }
  count(criteria: any): Promise<number> {
    throw new Error("Method not implemented.");
  }
}
