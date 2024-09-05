import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../types/errorResponse.types";
import { buildResponse } from "../utils/response.utils";
import { ApplicationService } from "../service/application.service";
import { container } from "../config/dependency";
import { Application, DeleteApplication, GetApplication } from "../types/application.types";

/**
 * @class ApplicationController
 * @description Controller class for managing application-related operations.
 */
class ApplicationController {
  /**
   * Handles the creation of a new application.
   * It uses the ApplicationService to create an application with the data provided in the request body.
   * @returns {Promise<void | Response>} Returns a promise that resolves to an Express response object
   * with the operation result or void if an error is handled.
   * @throws {ErrorResponse} Throws an ErrorResponse if an error occurs during application creation,
   * which is passed to the next middleware.
   */
  static async createApplication(req: Request, res: Response, next: NextFunction) {
    try {
      const applicationService: ApplicationService = container.resolve("ApplicationService") as ApplicationService;
      const payloadData: Application = req?.body;

      const { data, error } = await applicationService.createApplication(payloadData);
      if (error) return next(new ErrorResponse(error, 500));
      return res.status(200).json(buildResponse(true, data, "success"));
    } catch (error) {
      console.error(error);
      return next(new ErrorResponse(error, 500));
    }
  }

  /**
   * Retrieves all applications based on the criteria provided in the request body.
   *
   * @static
   * @method getAllApplications
   * @returns {Promise<void>} A promise that resolves to sending a JSON response with the result or handling an error.
   */
  static async getAllApplications(req: Request, res: Response, next: NextFunction) {
    try {
      // Resolve the ApplicationService from the dependency injection container
      const applicationService: ApplicationService = container.resolve("ApplicationService") as ApplicationService;

      // Extract the payload from the request body
      const payload: GetApplication = req.body;

      // Call the service method to get all applications
      const { data, error } = await applicationService.getAllApplications(payload);

      // If there is an error, pass it to the next middleware
      if (error) return next(new ErrorResponse(error, 500));

      // Send a successful JSON response with the retrieved applications
      return res.status(200).json(buildResponse(true, data, "success"));
    } catch (error) {
      // Log the error and pass it to the next middleware
      console.error(error);
      return next(new ErrorResponse(error, 500));
    }
  }

  /**
   * Retrieves a single application based on the criteria provided in the request body.
   *
   * @static
   * @method getOneApplication
   * @returns {Promise<void>} A promise that resolves to sending a JSON response with the result or handling an error.
   */
  static async getOneApplication(req: Request, res: Response, next: NextFunction) {
    try {
      // Resolve the ApplicationService from the dependency injection container
      const applicationService: ApplicationService = container.resolve("ApplicationService") as ApplicationService;

      // Extract the payload from the request body
      const payloadData: GetApplication = req?.body;

      // Call the service method to get one application
      const { data, error } = await applicationService.getOneApplication(payloadData);

      // If there is an error, pass it to the next middleware
      if (error) return next(new ErrorResponse(error, 500));

      // Send a successful JSON response with the retrieved application
      return res.status(200).json(buildResponse(true, data, "success"));
    } catch (error) {
      // Log the error and pass it to the next middleware
      console.error(error);
      return next(new ErrorResponse(error, 500));
    }
  }

  /**
   * Deletes a single application based on the criteria provided in the request body.
   *
   * @static
   * @method deleteOneApplication
   * @returns {Promise<void>} A promise that resolves to sending a JSON response with the result or handling an error.
   */
  static async deleteOneApplication(req: Request, res: Response, next: NextFunction) {
    try {
      // Resolve the ApplicationService from the dependency injection container
      const applicationService: ApplicationService = container.resolve("ApplicationService") as ApplicationService;

      // Extract the payload from the request body
      const payloadData: DeleteApplication = req?.body;

      // Call the service method to delete one application
      const { data, error } = await applicationService.deleteOneApplication(payloadData);

      // If there is an error, pass it to the next middleware
      if (error) return next(new ErrorResponse(error, 500));

      // Send a successful JSON response with the result of the deletion
      return res.status(200).json(buildResponse(true, data, "success"));
    } catch (error) {
      // Log the error and pass it to the next middleware
      console.error(error);
      return next(new ErrorResponse(error, 500));
    }
  }
}

export { ApplicationController };
