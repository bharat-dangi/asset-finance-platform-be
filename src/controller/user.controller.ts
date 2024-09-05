import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../types/errorResponse.types";
import { buildResponse } from "../utils/response.utils";
import { UserService } from "../service/user.service";
import { container } from "../config/dependency";
import { GetUser, User } from "../types/user.types";

/**
 * @class UserController
 * @description Controller class for managing user-related operations.
 */
class UserController {
  /**
   * Handles the creation of a new user using the UserService.
   */
  static async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userService: UserService = container.resolve("UserService") as UserService;
      const payloadData: User = req.body;

      const { data, error } = await userService.createUser(payloadData);
      if (error) return next(new ErrorResponse(error, 500));
      return res.status(200).json(buildResponse(true, data, "User created successfully"));
    } catch (error) {
      console.error(error);
      return next(new ErrorResponse(error, 500));
    }
  }

  /**
   * Retrieves all users based on the criteria provided in the request body using the UserService.
   */
  static async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const userService: UserService = container.resolve("UserService") as UserService;
      const payload: GetUser = req.body;

      const { data, error } = await userService.getAllUsers(payload);
      if (error) return next(new ErrorResponse(error, 500));

      return res.status(200).json(buildResponse(true, data, "Users retrieved successfully"));
    } catch (error) {
      console.error(error);
      return next(new ErrorResponse(error, 500));
    }
  }
}

export { UserController };
