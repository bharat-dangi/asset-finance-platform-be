import express, { RequestHandler } from "express";
import { validationHandler } from "../middleware/validator.middleware";
import { ApplicationController } from "../controller/application.controller";
import { ApplicationSchema } from "../validator/application.validator";

const applicationV1Router = express.Router();

applicationV1Router
  .route("/")
  .post(validationHandler(ApplicationSchema), ApplicationController.createApplication as RequestHandler);

export { applicationV1Router };
