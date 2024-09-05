import { asClass } from "awilix";
import { container } from "../../src/config/dependency";
import { ApplicationDSMock } from "../data/source/application.data.source.mock";
import { ApplicationRepository } from "../../src/data/repository/application.repository";
import { ApplicationService } from "../../src/service/application.service";

export const registerMockDependencies = () => {
  container.register({
    ApplicationDS: asClass(ApplicationDSMock).singleton(),
    ApplicationRepo: asClass(ApplicationRepository).singleton(),
    ApplicationService: asClass(ApplicationService),
  });
};
