import express, { RequestHandler } from "express";
import { validationHandler } from "../middleware/validator.middleware";
import { ApplicationController } from "../controller/application.controller";
import { ApplicationSchema, DeleteApplicationSchema, GetApplicationSchema } from "../validator/application.validator";

const applicationV1Router = express.Router();

applicationV1Router
  .route("/")
  .post(validationHandler(ApplicationSchema), ApplicationController.createApplication as RequestHandler);

applicationV1Router
  .route("/")
  .get(validationHandler(GetApplicationSchema), ApplicationController.getAllApplications as RequestHandler);

applicationV1Router
  .route("/get-one-application")
  .post(validationHandler(GetApplicationSchema), ApplicationController.getOneApplication as RequestHandler);

applicationV1Router
  .route("/delete-one-application")
  .post(validationHandler(DeleteApplicationSchema), ApplicationController.deleteOneApplication as RequestHandler);

export { applicationV1Router };
