/**
 * @interface PersonalDetails
 * @description Represents personal details of a user for finance applications.
 */
interface PersonalDetails {
  name: string; // Name of the user.
  age: number; // Age of the user.
  address: string; // Address of the user.
}

/**
 * @interface Application
 * @description Represents a finance application details.
 */

export interface Application {
  personalDetails: PersonalDetails; // Personal details of the applicant.
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
