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
   * @param {Request} req - The Express request object, containing the HTTP request data and application payload in the body.
   * @param {Response} res - The Express response object, used to send the HTTP response back to the client.
   * @param {NextFunction} next - The next middleware function in the Express stack. Used to pass control
   * to the next middleware or handle errors.
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

  static async getAllApplications(req: Request, res: Response, next: NextFunction) {
    try {
      const applicationService: ApplicationService = container.resolve("ApplicationService") as ApplicationService;
      const payload: GetApplication = req.body;
      const { data, error } = await applicationService.getAllApplications(payload);
      if (error) return next(new ErrorResponse(error, 500));
      return res.status(200).json(buildResponse(true, data, "success"));
    } catch (error) {
      console.error(error);
      return next(new ErrorResponse(error, 500));
    }
  }

  static async getOneApplication(req: Request, res: Response, next: NextFunction) {
    try {
      const applicationService: ApplicationService = container.resolve("ApplicationService") as ApplicationService;
      const payloadData: GetApplication = req?.body;

      const { data, error } = await applicationService.getOneApplication(payloadData);
      if (error) return next(new ErrorResponse(error, 500));
      return res.status(200).json(buildResponse(true, data, "success"));
    } catch (error) {
      console.error(error);
      return next(new ErrorResponse(error, 500));
    }
  }

  static async deleteOneApplication(req: Request, res: Response, next: NextFunction) {
    try {
      const applicationService: ApplicationService = container.resolve("ApplicationService") as ApplicationService;
      const payloadData: DeleteApplication = req?.body;

      const { data, error } = await applicationService.deleteOneApplication(payloadData);
      if (error) return next(new ErrorResponse(error, 500));
      return res.status(200).json(buildResponse(true, data, "success"));
    } catch (error) {
      console.error(error);
      return next(new ErrorResponse(error, 500));
    }
  }
}

export { ApplicationController };
