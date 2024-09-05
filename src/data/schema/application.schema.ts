import mongoose, { Schema } from "mongoose";
import { Application } from "../../types/application.types";

/**
 * @constant ApplicationSchemaBase
 * @description Defines the base schema for a finance application in Mongoose.
 * This includes fields for user reference, income, expenses, assets, and liabilities.
 */
export const ApplicationSchemaBase = {
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the User model
  income: { type: Number, required: true }, // Required number for the income of the applicant
  expenses: { type: Number, required: true }, // Required number for the expenses of the applicant
  assets: { type: Number, required: true }, // Required number for the assets of the applicant
  liabilities: { type: Number, required: true }, // Required number for the liabilities of the applicant
};

/**
 * @constant ApplicationSchema
 * @description Mongoose schema for a finance application, including timestamps and disabling the version key.
 * Uses the ApplicationSchemaBase for defining the schema structure.
 */
export const ApplicationSchema = new Schema<Application>(ApplicationSchemaBase, {
  timestamps: true, // Automatically manages createdAt and updatedAt fields
  versionKey: false, // Disables the __v version key added by Mongoose
});
