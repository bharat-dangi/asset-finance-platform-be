import { Types } from "mongoose";
import { User } from "../../../src/types/user.types";

// Mock data
export const mockUser: User = {
  _id: new Types.ObjectId("507f191e810c19729de860ea"),
  name: "John Doe",
  age: 30,
  address: "123 Main St, Springfield, USA",
};
