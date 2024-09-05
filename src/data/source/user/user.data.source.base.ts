import { User } from "../../../types/user.types";
import { DatabaseDSBase } from "../database/database.data.source.base";

export abstract class UserDSBase extends DatabaseDSBase<User> {}
