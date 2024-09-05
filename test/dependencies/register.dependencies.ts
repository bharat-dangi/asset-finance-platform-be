import { asClass } from "awilix";
import { container } from "../../src/config/dependency";
import { ApplicationDSMock } from "../data/source/application.data.source.mock";
import { ApplicationRepository } from "../../src/data/repository/application.repository";
import { ApplicationService } from "../../src/service/application.service";
import { UserDSMock } from "../data/source/user.data.source.mock";
import { UserRepository } from "../../src/data/repository/user.repository";
import { UserService } from "../../src/service/user.service";

export const registerMockDependencies = () => {
  container.register({
    ApplicationDS: asClass(ApplicationDSMock).singleton(),
    ApplicationRepo: asClass(ApplicationRepository).singleton(),
    ApplicationService: asClass(ApplicationService),

    // Registering Mock Data Source
    UserDS: asClass(UserDSMock).singleton(),
    UserRepo: asClass(UserRepository).singleton(),
    UserService: asClass(UserService),
  });
};
