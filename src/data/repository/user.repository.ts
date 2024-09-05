import { User } from "../../types/user.types";
import { UserDSBase } from "../source/user/user.data.source.base";
import { BaseRepository } from "./base/base.repository";

export class UserRepository extends BaseRepository<User> {
  constructor(opts: any) {
    super(opts.UserDS as UserDSBase);
  }
}
