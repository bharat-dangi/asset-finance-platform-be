import { UserRepository } from "../data/repository/user.repository";
import { PromiseResponse } from "../types/promiseResponse.types";
import { GetUser, User } from "../types/user.types";

/**
 * @class UserService
 * @description Service class that handles user-related business logic.
 */
export class UserService {
  userRepository: UserRepository;

  constructor(opts: any) {
    this.userRepository = opts.UserRepo as UserRepository;
  }

  /**
   * Creates a new user using the provided payload data.
   *
   * @method createUser
   * @param {User} payloadData - The data for the user to be created.
   * @returns {Promise<PromiseResponse<User, Error>>} A promise that resolves to a response
   * containing the created user or an error.
   */
  createUser = async (payloadData: User): Promise<PromiseResponse<User, Error>> => {
    try {
      // Insert the new user into the database
      const createdUser: User = await this.userRepository.insertOne(payloadData);

      // Return the created user data
      return { data: createdUser };
    } catch (error) {
      // Return an error response if the operation fails
      return { error: error as Error };
    }
  };

  /**
   * Retrieves all users that match the provided criteria from the payload.
   *
   * @method getAllUsers
   * @param {GetUser} payload - The criteria used to filter users (optional properties like name, age, address).
   * @returns {Promise<PromiseResponse<User[], Error>>} A promise that resolves to a response
   * containing the array of matching users or an error.
   */
  getAllUsers = async (payload: GetUser): Promise<PromiseResponse<User[], Error>> => {
    try {
      // Initialize criteria object for querying users
      const criteria: { name?: string; age?: number; address?: string } = {};

      // Populate criteria based on the payload
      if (payload?.age) criteria.age = payload.age;
      if (payload?.address) criteria.address = payload.address;
      if (payload?.name) criteria.name = payload.name;

      // Find users in the database that match the criteria
      const usersData: User[] = await this.userRepository.find(criteria, {});

      // Return the matching users data
      return { data: usersData };
    } catch (error) {
      // Return an error response if the operation fails
      return { error: error as Error };
    }
  };
}
