import * as awilix from "awilix";
import { ApplicationDS } from "../data/source/application/application.data.source";
import { ApplicationRepository } from "../data/repository/application.repository";

/**
 * @constant {AwilixContainer} container
 * @description Dependency injection container created using Awilix. 
 * This container will manage all the dependencies of the application, allowing for better modularity and testability.
 */
export const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

/**
 * @function registerDependencies
 * @description Registers all the necessary dependencies in the Awilix container. 
 * This function maps classes to their respective dependencies, enabling dependency injection throughout the application.
 * @returns {void} This function does not return a value but sets up the dependency injection container.
 */
export const registerDependencies = () => {
  container.register({
    // Application Related Dependencies
    ApplicationDS: awilix.asClass(ApplicationDS),
    ApplicationRepo: awilix.asClass(ApplicationRepository),
  });

  console.log(`Dependencies: Registered`.blue.underline.bold);
};
