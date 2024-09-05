import { Application } from "../../types/application.types";
import { ApplicationDSBase } from "../source/application/application.data.source.base";
import { BaseRepository } from "./base/base.repository";

export class ApplicationRepository extends BaseRepository<Application> {
  constructor(opts: any) {
    super(opts.ApplicationDS as ApplicationDSBase);
  }
}
