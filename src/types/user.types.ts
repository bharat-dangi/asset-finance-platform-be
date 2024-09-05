/**
 * @interface User
 * @description Represents personal details of a user for finance applications.
 */
export interface User {
  name: string; // The name of the user.
  age: number; // The age of the user.
  address: string; // The address of the user.
}

/**
 * @interface GetUser
 * @description Represents the criteria for retrieving user details. Used for filtering users in queries.
 */
export interface GetUser {
  _id?: string; // The optional unique identifier of the user.
  name?: string; // The optional name of the user for filtering purposes.
  age?: number; // The optional age of the user for filtering purposes.
  address?: string; // The optional address of the user for filtering purposes.
}

/**
 * @interface DeleteUser
 * @description Represents the information required to delete a user.
 * This includes the unique identifier of the user.
 */
export interface DeleteUser {
  _id: string; // The unique identifier of the user to be deleted.
}
