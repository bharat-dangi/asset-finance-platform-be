import { Types } from "mongoose";
import { Application } from "../../../src/types/application.types";

export const mockApplication: Application = {
  _id: new Types.ObjectId("507f191e810c19729de864eb"),
  assets: 1000,
  expenses: 500,
  liabilities: 200,
  income: 1500,
  userId: new Types.ObjectId("507f191e810c19729de860eb"),
};
