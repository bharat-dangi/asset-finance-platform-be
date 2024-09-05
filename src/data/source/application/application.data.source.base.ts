import { Application } from "../../../types/application.types";
import { DatabaseDSBase } from "../database/database.data.source.base";

export abstract class ApplicationDSBase extends DatabaseDSBase<Application> {}
