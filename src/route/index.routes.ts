import express from "express";
import { statusRouter } from "./status.routes";
import { applicationV1Router } from "./application.v1.routes";

const AppRouter = express.Router();

AppRouter.use("/", statusRouter);
AppRouter.use("/v1/application", applicationV1Router);

export { AppRouter };
