import express, { RequestHandler } from "express";
import { validationHandler } from "../middleware/validator.middleware";
import { UserController } from "../controller/user.controller";
import { GetUserSchema, UserSchema } from "../validator/user.validator";

const userV1Router = express.Router();

userV1Router.route("/").post(validationHandler(UserSchema), UserController.createUser as RequestHandler);

userV1Router.route("/").get(validationHandler(GetUserSchema), UserController.getAllUsers as RequestHandler);

export { userV1Router };
