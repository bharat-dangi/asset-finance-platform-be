import { Types } from "mongoose";

/**
 * @interface Application
 * @description Represents the details of a finance application.
 */
export interface Application {
  userId: Types.ObjectId; // The ObjectId of the applicant's user.
  income: number; // The income of the applicant.
  expenses: number; // The expenses of the applicant.
  assets: number; // The assets of the applicant.
  liabilities: number; // The liabilities of the applicant.
}

/**
 * @interface GetApplication
 * @description Represents the criteria for retrieving finance application details. Used for filtering applications in queries.
 */
export interface GetApplication {
  id?: string; // Optional ID of the application.
  income?: number; // Optional income of the applicant for filtering.
  expenses?: number; // Optional expenses of the applicant for filtering.
  assets?: number; // Optional assets of the applicant for filtering.
  liabilities?: number; // Optional liabilities of the applicant for filtering.
}

/**
 * @interface DeleteApplication
 * @description Represents the information required to delete a finance application, including the application ID.
 */
export interface DeleteApplication {
  _id: string; // The unique identifier of the application to be deleted.
}

/**
 * @interface UpdateApplication
 * @description Represents the details required to update a finance application.
 */
export interface UpdateApplication {
  _id: string; // The unique identifier of the application to be updated.
  userId: Types.ObjectId; // The ObjectId of the applicant's user.
  income: number; // The updated income of the applicant.
  expenses: number; // The updated expenses of the applicant.
  assets: number; // The updated assets of the applicant.
  liabilities: number; // The updated liabilities of the applicant.
}
