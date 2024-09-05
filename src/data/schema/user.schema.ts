import { Schema } from "mongoose";
import { User } from "../../types/user.types";

/**
 * @constant UserSchemaBase
 * @description Mongoose schema for user details.
 */
export const UserSchemaBase = {
  name: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
};

export const UserSchema = new Schema<User>(UserSchemaBase, {
  timestamps: true,
  versionKey: false,
});
