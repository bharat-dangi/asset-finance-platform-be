import { ApplicationRepository } from "../data/repository/application.repository";
import { Application, DeleteApplication, GetApplication } from "../types/application.types";
import { PromiseResponse } from "../types/promiseResponse.types";

/**
 * @class ApplicationService
 * @description Service class that handles application-related business logic,
 * including tasks like creating, updating, and retrieving applications.
 */
export class ApplicationService {
  applicationRepository: ApplicationRepository;

  constructor(opts: any) {
    this.applicationRepository = opts.ApplicationRepo as ApplicationRepository;
  }

  // Service to handle application creation related tasks
  createApplication = async (payloadData: Application): Promise<PromiseResponse<Application, Error>> => {
    try {
      const createdApplication: Application = await this.applicationRepository.insertOne(payloadData);
      return { data: createdApplication };
    } catch (error) {
      return { error: error as Error };
    }
  };

  getAllApplications = async (payload: GetApplication): Promise<PromiseResponse<Application[], Error>> => {
    try {
      const criteria: { assets?: number; expenses?: number; liabilities?: number } = {};

      if (payload?.assets) criteria.assets = payload.assets;
      if (payload?.expenses) criteria.expenses = payload.expenses;
      if (payload?.liabilities) criteria.liabilities = payload.liabilities;

      const applicationsData: Application[] = await this.applicationRepository.find(criteria, {}, {});
      return { data: applicationsData };
    } catch (error) {
      return { error: error as Error };
    }
  };

  getOneApplication = async (payload: GetApplication): Promise<PromiseResponse<Application | null, Error>> => {
    try {
      const criteria: { id?: string } = {};

      if (payload?.id) criteria.id = payload.id;
      const applicationsData: Application | null = await this.applicationRepository.findOne(criteria, {});
      return { data: applicationsData };
    } catch (error) {
      return { error: error as Error };
    }
  };

  deleteOneApplication = async (payload: DeleteApplication): Promise<PromiseResponse<Application | null, Error>> => {
    try {
      const criteria: { id: string } = { id: payload.id };

      const applicationsData: Application | null = await this.applicationRepository.deleteOne(criteria, {});
      return { data: applicationsData };
    } catch (error) {
      return { error: error as Error };
    }
  };
}
