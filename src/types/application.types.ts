import { Types } from "mongoose";

/**
 * @interface Application
 * @description Represents a finance application details.
 */
export interface Application {
  userId: Types.ObjectId; // User Id of the applicant.
  income: number; // Income of the applicant.
  expenses: number; // Expenses of the applicant.
  assets: number; // Assets of the applicant.
  liabilities: number; // Liabilities of the applicant.
}

export interface GetApplication {
  id?: string;
  income?: number; // Income of the applicant.
  expenses?: number; // Expenses of the applicant.
  assets?: number; // Assets of the applicant.
  liabilities?: number; // Liabilities of the applicant.
}

export interface DeleteApplication {
  id: string;
}
