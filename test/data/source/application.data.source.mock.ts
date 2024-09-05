import { ApplicationDSBase } from "../../../src/data/source/application/application.data.source.base";
import { Application } from "../../../src/types/application.types";

export class ApplicationDSMock implements ApplicationDSBase {
  insertOne(data: any): Promise<Application> {
    throw new Error("Method not implemented.");
  }
  insertMany(data: any): Promise<Application[]> {
    throw new Error("Method not implemented.");
  }
  find(criteria: any, options: any): Promise<Application[]> {
    throw new Error("Method not implemented.");
  }
  findOne(criteria: any, options: any): Promise<Application | null> {
    throw new Error("Method not implemented.");
  }
  updateOne(criteria: any, updateData: any, options: any): Promise<Application | null> {
    throw new Error("Method not implemented.");
  }
  updateMany(criteria: any, updateData: any, options: any): Promise<Application[]> {
    throw new Error("Method not implemented.");
  }
  deleteOne(criteria: any, options: any): Promise<Application | null> {
    throw new Error("Method not implemented.");
  }
  count(criteria: any): Promise<number> {
    throw new Error("Method not implemented.");
  }
}
