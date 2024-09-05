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

  /**
   * Creates a new application using the provided payload data.
   *
   * @param {Application} payloadData - The data for the application to be created.
   * @returns {Promise<PromiseResponse<Application, Error>>} A promise that resolves to a response containing
   * the created application or an error.
   */
  createApplication = async (payloadData: Application): Promise<PromiseResponse<Application, Error>> => {
    try {
      // Insert the new application into the repository
      const createdApplication: Application = await this.applicationRepository.insertOne(payloadData);

      // Return the created application data
      return { data: createdApplication };
    } catch (error) {
      // Return an error response if the operation fails
      return { error: error as Error };
    }
  };

  /**
   * Retrieves all applications that match the provided criteria from the payload.
   *
   * @param {GetApplication} payload - The criteria used to filter applications
   * (optional properties like assets, expenses, liabilities).
   * @returns {Promise<PromiseResponse<Application[], Error>>} A promise that resolves to a response
   * containing the array of matching applications or an error.
   */
  getAllApplications = async (payload: GetApplication): Promise<PromiseResponse<Application[], Error>> => {
    try {
      // Initialize criteria object for querying applications
      const criteria: { assets?: number; expenses?: number; liabilities?: number } = {};

      // Populate criteria based on the payload
      if (payload?.assets) criteria.assets = payload.assets;
      if (payload?.expenses) criteria.expenses = payload.expenses;
      if (payload?.liabilities) criteria.liabilities = payload.liabilities;

      // Find applications in the repository that match the criteria
      const applicationsData: Application[] = await this.applicationRepository.find(criteria, {
        sort: { createdAt: -1 },
        populate: ["userId"],
      });

      // Return the matching applications data
      return { data: applicationsData };
    } catch (error) {
      // Return an error response if the operation fails
      return { error: error as Error };
    }
  };

  /**
   * Retrieves a single application that matches the provided criteria from the payload.
   *
   * @param {GetApplication} payload - The criteria used to filter the application (typically the application ID).
   * @returns {Promise<PromiseResponse<Application | null, Error>>} A promise that resolves to a response
   * containing the matching application or null if not found, or an error.
   */
  getOneApplication = async (payload: GetApplication): Promise<PromiseResponse<Application | null, Error>> => {
    try {
      // Initialize criteria object for querying a single application
      const criteria: { id?: string } = {};

      // Populate criteria based on the payload
      if (payload?.id) criteria.id = payload.id;

      // Find a single application in the repository that matches the criteria
      const applicationsData: Application | null = await this.applicationRepository.findOne(criteria, {});

      // Return the found application data or null if not found
      return { data: applicationsData };
    } catch (error) {
      // Return an error response if the operation fails
      return { error: error as Error };
    }
  };

  /**
   * Deletes a single application that matches the provided criteria from the payload.
   *
   * @param {DeleteApplication} payload - The criteria used to identify the application to delete
   * (typically the application ID).
   * @returns {Promise<PromiseResponse<Application | null, Error>>} A promise that resolves to a response
   * containing the deleted application or null if not found, or an error.
   */
  deleteOneApplication = async (payload: DeleteApplication): Promise<PromiseResponse<Application | null, Error>> => {
    try {
      // Initialize criteria object for deleting a single application
      const criteria: { id: string } = { id: payload.id };

      // Delete the application in the repository that matches the criteria
      const applicationsData: Application | null = await this.applicationRepository.deleteOne(criteria, {});

      // Return the deleted application data or null if not found
      return { data: applicationsData };
    } catch (error) {
      // Return an error response if the operation fails
      return { error: error as Error };
    }
  };
}
