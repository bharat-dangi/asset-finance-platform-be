import mongoose from "mongoose";
import { ApplicationSchema } from "../schema/application.schema";

export const ApplicationModel = mongoose.model("Application", ApplicationSchema);
