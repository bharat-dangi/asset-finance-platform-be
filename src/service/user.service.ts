import { UserRepository } from "../data/repository/user.repository";

/**
 * @class ApplicationService
 * @description Service class that handles application-related business logic,
 * including tasks like creating, updating, and retrieving applications.
 */
export class UserService {
  userRepository: UserRepository;

  constructor(opts: any) {
    this.userRepository = opts.UserRepo as UserRepository;
  }
}
