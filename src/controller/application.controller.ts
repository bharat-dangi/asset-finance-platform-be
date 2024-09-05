import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../types/errorResponse.types";
import { buildResponse } from "../utils/response.utils";
import { ApplicationService } from "../service/application.service";
import { container } from "../config/dependency";
import { Application, DeleteApplication, GetApplication, UpdateApplication } from "../types/application.types";

/**
 * @class ApplicationController
 * @description Controller class for managing application-related operations.
 */
class ApplicationController {
  /**
   * Handles the creation of a new application using the ApplicationService.
   */
  static async createApplication(req: Request, res: Response, next: NextFunction) {
    try {
      const applicationService: ApplicationService = container.resolve("ApplicationService") as ApplicationService;
      const payloadData: Application = req.body;

      const { data, error } = await applicationService.createApplication(payloadData);
      if (error) return next(new ErrorResponse(error, 500));
      return res.status(200).json(buildResponse(true, data, "Application created successfully"));
    } catch (error) {
      console.error(error);
      return next(new ErrorResponse(error, 500));
    }
  }

  /**
   * Retrieves all applications based on the criteria provided using the ApplicationService.
   */
  static async getAllApplications(req: Request, res: Response, next: NextFunction) {
    try {
      const applicationService: ApplicationService = container.resolve("ApplicationService") as ApplicationService;
      const payload: GetApplication = req.body;

      const { data, error } = await applicationService.getAllApplications(payload);
      if (error) return next(new ErrorResponse(error, 500));

      return res.status(200).json(buildResponse(true, data, "Applications retrieved successfully"));
    } catch (error) {
      console.error(error);
      return next(new ErrorResponse(error, 500));
    }
  }

  /**
   * Retrieves a single application based on the provided criteria using the ApplicationService.
   */
  static async getOneApplication(req: Request, res: Response, next: NextFunction) {
    try {
      const applicationService: ApplicationService = container.resolve("ApplicationService") as ApplicationService;
      const payloadData: GetApplication = req.body;

      const { data, error } = await applicationService.getOneApplication(payloadData);
      if (error) return next(new ErrorResponse(error, 500));

      return res.status(200).json(buildResponse(true, data, "Application retrieved successfully"));
    } catch (error) {
      console.error(error);
      return next(new ErrorResponse(error, 500));
    }
  }

  /**
   * Deletes a single application using the ApplicationService.
   */
  static async deleteOneApplication(req: Request, res: Response, next: NextFunction) {
    try {
      const applicationService: ApplicationService = container.resolve("ApplicationService") as ApplicationService;
      const payloadData: DeleteApplication = req.query as any;

      const { data, error } = await applicationService.deleteOneApplication(payloadData);
      if (error) return next(new ErrorResponse(error, 500));

      return res.status(200).json(buildResponse(true, data, "Application deleted successfully"));
    } catch (error) {
      console.error(error);
      return next(new ErrorResponse(error, 500));
    }
  }

  /**
   * Updates an existing application using the ApplicationService.
   */
  static async updateOneApplication(req: Request, res: Response, next: NextFunction) {
    try {
      const applicationService: ApplicationService = container.resolve("ApplicationService") as ApplicationService;
      const payloadData: UpdateApplication = req.body;

      const { data, error } = await applicationService.updateApplication(payloadData);
      if (error) return next(new ErrorResponse(error, 500));

      return res.status(200).json(buildResponse(true, data, "Application updated successfully"));
    } catch (error) {
      console.error(error);
      return next(new ErrorResponse(error, 500));
    }
  }
}

export { ApplicationController };
