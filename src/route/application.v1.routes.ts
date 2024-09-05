import express, { RequestHandler } from "express";
import { validationHandler, validationQueryHandler } from "../middleware/validator.middleware";
import { ApplicationController } from "../controller/application.controller";
import {
  ApplicationSchema,
  DeleteApplicationSchema,
  GetApplicationSchema,
  updateApplicationSchema,
} from "../validator/application.validator";

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
  .delete(
    validationQueryHandler(DeleteApplicationSchema),
    ApplicationController.deleteOneApplication as RequestHandler,
  );

applicationV1Router
  .route("/update-one-application")
  .patch(validationHandler(updateApplicationSchema), ApplicationController.updateOneApplication as RequestHandler);

export { applicationV1Router };
