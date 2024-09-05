import { Types } from "mongoose";
import { container } from "../../src/config/dependency";
import { ApplicationDSBase } from "../../src/data/source/application/application.data.source.base";
import { ApplicationService } from "../../src/service/application.service";
import { Application, UpdateApplication } from "../../src/types/application.types";
import { mockApplication } from "../data/mocks/application.data.mocks";
import { registerMockDependencies } from "../dependencies/register.dependencies";

describe("ApplicationService Tests", () => {
  beforeEach(() => {
    registerMockDependencies();
  });

  afterEach(() => {
    container.dispose();
  });

  describe("createApplication", () => {
    test("Scenario 1: Create application successfully", async () => {
      const applicationPayload: Application = { ...mockApplication };
      const applicationDataSource = container.resolve("ApplicationDS") as ApplicationDSBase;

      jest.spyOn(applicationDataSource, "insertOne").mockImplementationOnce(async (payload: Application) => {
        return applicationPayload;
      });

      const applicationService = container.resolve("ApplicationService") as ApplicationService;
      const { data, error } = await applicationService.createApplication(mockApplication);

      expect(error).toBeUndefined();
      expect(data).toEqual(applicationPayload);
      expect(applicationDataSource.insertOne).toBeCalledTimes(1);
    });

    test("Scenario 2: Attempt to create application with invalid data", async () => {
      const invalidApplicationPayload: Partial<Application> = {
        assets: 1000,
      };

      const applicationDataSource = container.resolve("ApplicationDS") as ApplicationDSBase;
      jest.spyOn(applicationDataSource, "insertOne").mockImplementationOnce(() => {
        throw new Error("Validation Error: Missing required fields");
      });

      const applicationService = container.resolve("ApplicationService") as ApplicationService;
      const { data, error } = await applicationService.createApplication(invalidApplicationPayload as Application);

      expect(data).toBeUndefined();
      expect(error).toBeDefined();
      expect(applicationDataSource.insertOne).toBeCalledTimes(1);
    });

    test("Scenario 3: Handle database error during creation", async () => {
      const applicationPayload: Application = { ...mockApplication };
      const applicationDataSource = container.resolve("ApplicationDS") as ApplicationDSBase;
      jest.spyOn(applicationDataSource, "insertOne").mockImplementationOnce(() => {
        throw new Error("Database Error");
      });

      const applicationService = container.resolve("ApplicationService") as ApplicationService;
      const { data, error } = await applicationService.createApplication(applicationPayload);

      expect(data).toBeUndefined();
      expect(error).toBeDefined();
      expect(applicationDataSource.insertOne).toBeCalledTimes(1);
    });

    test("Scenario 4: Create application with additional unexpected fields", async () => {
      const applicationPayload: any = { ...mockApplication, unexpectedField: "unexpected" };
      const applicationDataSource = container.resolve("ApplicationDS") as ApplicationDSBase;
      jest.spyOn(applicationDataSource, "insertOne").mockResolvedValue(mockApplication);

      const applicationService = container.resolve("ApplicationService") as ApplicationService;
      const { data, error } = await applicationService.createApplication(applicationPayload);

      expect(error).toBeUndefined();
      expect(data).toEqual(mockApplication);
      expect(applicationDataSource.insertOne).toBeCalledTimes(1);
    });
  });

  describe("getAllApplications", () => {
    test("Scenario 1: Retrieve all applications successfully", async () => {
      const applicationDataSource = container.resolve("ApplicationDS") as ApplicationDSBase;
      jest.spyOn(applicationDataSource, "find").mockResolvedValue([mockApplication]);

      const applicationService = container.resolve("ApplicationService") as ApplicationService;
      const { data, error } = await applicationService.getAllApplications({});

      expect(error).toBeUndefined();
      expect(data).toEqual([mockApplication]);
      expect(applicationDataSource.find).toBeCalledTimes(1);
    });

    test("Scenario 2: Retrieve all applications with filtering", async () => {
      const criteria = { assets: 1000 };
      const applicationDataSource = container.resolve("ApplicationDS") as ApplicationDSBase;
      jest.spyOn(applicationDataSource, "find").mockResolvedValue([mockApplication]);

      const applicationService = container.resolve("ApplicationService") as ApplicationService;
      const { data, error } = await applicationService.getAllApplications(criteria);

      expect(error).toBeUndefined();
      expect(data).toEqual([mockApplication]);
      expect(applicationDataSource.find).toBeCalledTimes(1);
      expect(applicationDataSource.find).toBeCalledWith(criteria, expect.any(Object));
    });

    test("Scenario 3: Handle empty application list", async () => {
      const applicationDataSource = container.resolve("ApplicationDS") as ApplicationDSBase;
      jest.spyOn(applicationDataSource, "find").mockResolvedValue([]);

      const applicationService = container.resolve("ApplicationService") as ApplicationService;
      const { data, error } = await applicationService.getAllApplications({});

      expect(error).toBeUndefined();
      expect(data).toEqual([]);
      expect(applicationDataSource.find).toBeCalledTimes(1);
    });

    test("Scenario 4: Handle database error during retrieval", async () => {
      const applicationDataSource = container.resolve("ApplicationDS") as ApplicationDSBase;
      jest.spyOn(applicationDataSource, "find").mockImplementationOnce(() => {
        throw new Error("Database Error");
      });

      const applicationService = container.resolve("ApplicationService") as ApplicationService;
      const { data, error } = await applicationService.getAllApplications({});

      expect(data).toBeUndefined();
      expect(error).toBeDefined();
      expect(applicationDataSource.find).toBeCalledTimes(1);
    });
  });

  describe("getOneApplication", () => {
    test("Scenario 1: Retrieve one application successfully", async () => {
      const applicationDataSource = container.resolve("ApplicationDS") as ApplicationDSBase;
      jest.spyOn(applicationDataSource, "findOne").mockResolvedValue(mockApplication);

      const applicationService = container.resolve("ApplicationService") as ApplicationService;
      const { data, error } = await applicationService.getOneApplication({ _id: mockApplication?._id });

      expect(error).toBeUndefined();
      expect(data).toEqual(mockApplication);
      expect(applicationDataSource.findOne).toBeCalledTimes(1);
      expect(applicationDataSource.findOne).toBeCalledWith({ _id: mockApplication?._id }, expect.any(Object));
    });

    test("Scenario 2: Attempt to retrieve non-existent application", async () => {
      const applicationDataSource = container.resolve("ApplicationDS") as ApplicationDSBase;
      jest.spyOn(applicationDataSource, "findOne").mockResolvedValue(null);

      const applicationService = container.resolve("ApplicationService") as ApplicationService;
      const { data, error } = await applicationService.getOneApplication({
        _id: new Types.ObjectId("527f191e810c19729de863eb"),
      });

      expect(error).toBeUndefined();
      expect(data).toBeNull();
      expect(applicationDataSource.findOne).toBeCalledTimes(1);
    });

    test("Scenario 3: Handle database error during retrieval of one application", async () => {
      const applicationDataSource = container.resolve("ApplicationDS") as ApplicationDSBase;
      jest.spyOn(applicationDataSource, "findOne").mockImplementationOnce(() => {
        throw new Error("Database Error");
      });

      const applicationService = container.resolve("ApplicationService") as ApplicationService;
      const { data, error } = await applicationService.getOneApplication({ _id: mockApplication?._id });

      expect(data).toBeUndefined();
      expect(error).toBeDefined();
      expect(applicationDataSource.findOne).toBeCalledTimes(1);
    });
  });

  describe("updateApplication", () => {
    test("Scenario 1: Update application successfully", async () => {
      const updatedApplication = { ...mockApplication, assets: 2000 };
      const applicationDataSource = container.resolve("ApplicationDS") as ApplicationDSBase;
      jest.spyOn(applicationDataSource, "updateOne").mockResolvedValue(updatedApplication);

      const applicationService = container.resolve("ApplicationService") as ApplicationService;
      const { data, error } = await applicationService.updateApplication({
        _id: mockApplication?._id,
        assets: 2000,
      });

      expect(error).toBeUndefined();
      expect(data).toEqual(updatedApplication);
      expect(applicationDataSource.updateOne).toBeCalledTimes(1);
    });

    test("Scenario 2: Attempt to update non-existent application", async () => {
      const applicationDataSource = container.resolve("ApplicationDS") as ApplicationDSBase;
      jest.spyOn(applicationDataSource, "updateOne").mockResolvedValue(null);

      const applicationService = container.resolve("ApplicationService") as ApplicationService;
      const { data, error } = await applicationService.updateApplication({
        _id: new Types.ObjectId("507d191e810c19729de863eb"),
        assets: 2000,
      });

      expect(error).toBeUndefined();
      expect(data).toBeNull();
      expect(applicationDataSource.updateOne).toBeCalledTimes(1);
    });

    test("Scenario 3: Handle database error during update", async () => {
      const applicationDataSource = container.resolve("ApplicationDS") as ApplicationDSBase;
      jest.spyOn(applicationDataSource, "updateOne").mockImplementationOnce(() => {
        throw new Error("Database Error");
      });

      const applicationService = container.resolve("ApplicationService") as ApplicationService;
      const { data, error } = await applicationService.updateApplication({
        _id: mockApplication._id,
        assets: 2000,
      });

      expect(data).toBeUndefined();
      expect(error).toBeDefined();
      expect(applicationDataSource.updateOne).toBeCalledTimes(1);
    });

    test("Scenario 4: Update application with additional unexpected fields", async () => {
      const updatedApplication = { ...mockApplication, unexpectedField: "unexpected", assets: 2000 };
      const applicationDataSource = container.resolve("ApplicationDS") as ApplicationDSBase;
      jest.spyOn(applicationDataSource, "updateOne").mockResolvedValue(updatedApplication);

      const applicationService = container.resolve("ApplicationService") as ApplicationService;
      const { data, error } = await applicationService.updateApplication({
        _id: mockApplication._id,
        assets: 2000,
      });

      expect(error).toBeUndefined();
      expect(data).toEqual(updatedApplication);
      expect(applicationDataSource.updateOne).toBeCalledTimes(1);
    });
  });

  describe("deleteOneApplication", () => {
    test("Scenario 1: Delete application successfully", async () => {
      const applicationDataSource = container.resolve("ApplicationDS") as ApplicationDSBase;
      jest.spyOn(applicationDataSource, "deleteOne").mockResolvedValue(mockApplication);

      const applicationService = container.resolve("ApplicationService") as ApplicationService;
      const { data, error } = await applicationService.deleteOneApplication({ _id: mockApplication._id });

      expect(error).toBeUndefined();
      expect(data).toEqual(mockApplication);
      expect(applicationDataSource.deleteOne).toBeCalledTimes(1);
    });

    test("Scenario 2: Attempt to delete non-existent application", async () => {
      const applicationDataSource = container.resolve("ApplicationDS") as ApplicationDSBase;
      jest.spyOn(applicationDataSource, "deleteOne").mockResolvedValue(null);

      const applicationService = container.resolve("ApplicationService") as ApplicationService;
      const { data, error } = await applicationService.deleteOneApplication({
        _id: new Types.ObjectId("507d191e810c19729de863eb"),
      });

      expect(error).toBeUndefined();
      expect(data).toBeNull();
      expect(applicationDataSource.deleteOne).toBeCalledTimes(1);
    });

    test("Scenario 3: Handle database error during deletion", async () => {
      const applicationDataSource = container.resolve("ApplicationDS") as ApplicationDSBase;
      jest.spyOn(applicationDataSource, "deleteOne").mockImplementationOnce(() => {
        throw new Error("Database Error");
      });

      const applicationService = container.resolve("ApplicationService") as ApplicationService;
      const { data, error } = await applicationService.deleteOneApplication({ _id: mockApplication._id });

      expect(data).toBeUndefined();
      expect(error).toBeDefined();
      expect(applicationDataSource.deleteOne).toBeCalledTimes(1);
    });

    test("Scenario 4: Delete application with additional conditions", async () => {
      const applicationDataSource = container.resolve("ApplicationDS") as ApplicationDSBase;
      jest.spyOn(applicationDataSource, "deleteOne").mockResolvedValue(mockApplication);

      const applicationService = container.resolve("ApplicationService") as ApplicationService;
      const { data, error } = await applicationService.deleteOneApplication({
        _id: mockApplication?._id,
      });

      expect(error).toBeUndefined();
      expect(data).toEqual(mockApplication);
      expect(applicationDataSource.deleteOne).toBeCalledTimes(1);
    });
  });
});
