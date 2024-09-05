import { ApplicationRepository } from "../data/repository/application.repository";
import { Application } from "../types/application.types";
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
      return { data: [] as any };
    } catch (error) {
      return { error: error as Error };
    }
  };
}
