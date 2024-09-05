import { Schema } from "mongoose";
import { Application } from "../../types/application.types";

/**
 * @constant ApplicationSchemaBase
 * @description Mongoose schema for finance application.
 */
export const ApplicationSchemaBase = {
  personalDetails: {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
  },
  income: { type: Number, required: true },
  expenses: { type: Number, required: true },
  assets: { type: Number, required: true },
  liabilities: { type: Number, required: true },
};

export const ApplicationSchema = new Schema<Application>(ApplicationSchemaBase, {
  timestamps: true,
  versionKey: false,
});
