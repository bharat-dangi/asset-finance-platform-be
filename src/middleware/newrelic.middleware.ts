import newrelic from "newrelic";
import { NextFunction, Request, Response } from "express";

export const newRelicApiMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const payload = req?.query ?? req.body;
  const newRelicPayload: any = {
    ...payload,
    ipAddress: req.headers["x-forwarded-for"] || req.ip,
  };
  newrelic.addCustomAttributes(newRelicPayload);
  if (next) next();
};
