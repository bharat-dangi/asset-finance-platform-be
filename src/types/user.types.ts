import { Types } from "mongoose";

/**
 * @interface User
 * @description Represents the personal details of a user for finance applications.
 */
export interface User {
  _id?: Types.ObjectId;
  name: string; // The name of the user.
  age: number; // The age of the user.
  address: string; // The address of the user.
}

/**
 * @interface GetUser
 * @description Represents the criteria for retrieving user details. This interface is used for filtering users in queries.
 */
export interface GetUser {
  _id?: Types.ObjectId; // The optional unique identifier of the user for filtering purposes.
  name?: string; // The optional name of the user for filtering purposes.
  age?: number; // The optional age of the user for filtering purposes.
  address?: string; // The optional address of the user for filtering purposes.
}

/**
 * @interface DeleteUser
 * @description Represents the information required to delete a user. This includes the unique identifier of the user.
 */
export interface DeleteUser {
  _id: Types.ObjectId; // The unique identifier of the user to be deleted.
}
