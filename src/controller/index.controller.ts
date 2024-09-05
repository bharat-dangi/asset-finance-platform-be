import { Request, Response } from "express";

class DefaultController {
  static status(req: Request, res: Response) {
    return res.status(200).json({
      status: "ok",
    });
  }
}

export { DefaultController };
