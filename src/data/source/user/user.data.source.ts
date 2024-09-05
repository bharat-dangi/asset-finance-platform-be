import { User } from "../../../types/user.types";
import { UserDSBase } from "./user.data.source.base";

export class UserDS implements UserDSBase {
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
