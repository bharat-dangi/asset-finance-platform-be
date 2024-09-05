import { Schema } from "mongoose";
import { User } from "../../types/user.types";

/**
 * @constant UserSchemaBase
 * @description Defines the base schema for user details in Mongoose.
 * This includes fields for name, age, and address.
 */
export const UserSchemaBase = {
  name: { type: String, required: true }, // Required string for the name of the user
  age: { type: Number, required: true }, // Required number for the age of the user
  address: { type: String, required: true }, // Required string for the address of the user
};

/**
 * @constant UserSchema
 * @description Mongoose schema for user details, including timestamps and disabling the version key.
 * Uses the UserSchemaBase for defining the schema structure.
 */
export const UserSchema = new Schema<User>(UserSchemaBase, {
  timestamps: true, // Automatically manages createdAt and updatedAt fields
  versionKey: false, // Disables the __v version key added by Mongoose
});
