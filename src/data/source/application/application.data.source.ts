import { Application } from "../../../types/application.types";
import { ApplicationModel } from "../../model/application.model";
import { ApplicationDSBase } from "./application.data.source.base";

export class ApplicationDS implements ApplicationDSBase {
  async deleteOne(criteria: any, options: any): Promise<Application | null> {
    return ApplicationModel.findOneAndDelete(criteria, { ...options, lean: true });
  }
  async insertOne(data: any): Promise<Application> {
    return await ApplicationModel.create(data);
  }
  async insertMany(data: any): Promise<Application[]> {
    return (await ApplicationModel.insertMany(data, {
      lean: true,
    })) as Application[];
  }
  async find(criteria: any, options: any, paginationOptions: any): Promise<Application[]> {
    return await ApplicationModel.find(criteria, options, paginationOptions).lean().exec();
  }
  async findOne(criteria: any, options: any): Promise<Application | null> {
    const applicationData = await ApplicationModel.findOne(criteria, options).lean().exec();
    return applicationData;
  }
  async updateOne(criteria: any, updateData: any, options: any): Promise<Application | null> {
    return await ApplicationModel.findOneAndUpdate(criteria, updateData, options).lean().exec();
  }
  async updateMany(criteria: any, updateData: any, options: any): Promise<Application[]> {
    return (await ApplicationModel.updateMany(criteria, updateData)) as any;
  }
  async count(criteria: any): Promise<number> {
    return await ApplicationModel.count(criteria).lean().exec();
  }
}
