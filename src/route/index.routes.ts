import express from "express";
import { statusRouter } from "./status.routes";
import { applicationV1Router } from "./application.v1.routes";
import { userV1Router } from "./user.v1.routes";
import { newRelicApiMiddleware } from "../middleware/newrelic.middleware";

const AppRouter = express.Router();
AppRouter.use(newRelicApiMiddleware);

AppRouter.use("/", statusRouter);
AppRouter.use("/v1/application", applicationV1Router);
AppRouter.use("/v1/user", userV1Router);

export { AppRouter };
