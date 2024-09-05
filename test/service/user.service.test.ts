import { container } from "../../src/config/dependency";
import { UserDSBase } from "../../src/data/source/user/user.data.source.base";
import { UserService } from "../../src/service/user.service";
import { User } from "../../src/types/user.types";
import { mockUser } from "../data/mocks/user.data.mock";
import { registerMockDependencies } from "../dependencies/register.dependencies";

describe("UserService Tests", () => {
  beforeEach(() => {
    registerMockDependencies();
  });

  afterEach(() => {
    container.dispose();
  });

  describe("createUser", () => {
    test("Scenario 1: Create user successfully", async () => {
      const userPayload: User = { ...mockUser };
      const userDataSource = container.resolve("UserDS") as UserDSBase;

      jest.spyOn(userDataSource, "insertOne").mockResolvedValue(userPayload);

      const userService = container.resolve("UserService") as UserService;
      const { data, error } = await userService.createUser(userPayload);

      expect(error).toBeUndefined();
      expect(data).toEqual(userPayload);
      expect(userDataSource.insertOne).toBeCalledTimes(1);
    });

    test("Scenario 2: Attempt to create user with invalid data", async () => {
      const invalidUserPayload: Partial<User> = {
        name: "John Doe",
      };

      const userDataSource = container.resolve("UserDS") as UserDSBase;
      jest.spyOn(userDataSource, "insertOne").mockImplementationOnce(() => {
        throw new Error("Validation Error: Missing required fields");
      });

      const userService = container.resolve("UserService") as UserService;
      const { data, error } = await userService.createUser(invalidUserPayload as User);

      expect(data).toBeUndefined();
      expect(error).toBeDefined();
      expect(userDataSource.insertOne).toBeCalledTimes(1);
    });

    test("Scenario 3: Handle database error during user creation", async () => {
      const userPayload: User = { ...mockUser };
      const userDataSource = container.resolve("UserDS") as UserDSBase;
      jest.spyOn(userDataSource, "insertOne").mockImplementationOnce(() => {
        throw new Error("Database Error");
      });

      const userService = container.resolve("UserService") as UserService;
      const { data, error } = await userService.createUser(userPayload);

      expect(data).toBeUndefined();
      expect(error).toBeDefined();
      expect(userDataSource.insertOne).toBeCalledTimes(1);
    });

    test("Scenario 4: Create user with additional unexpected fields", async () => {
      const userPayload: any = { ...mockUser, unexpectedField: "unexpected" };
      const userDataSource = container.resolve("UserDS") as UserDSBase;
      jest.spyOn(userDataSource, "insertOne").mockResolvedValue(userPayload);

      const userService = container.resolve("UserService") as UserService;
      const { data, error } = await userService.createUser(userPayload);

      expect(error).toBeUndefined();
      expect(data).toEqual(userPayload);
      expect(userDataSource.insertOne).toBeCalledTimes(1);
    });
  });

  describe("getAllUsers", () => {
    test("Scenario 1: Retrieve all users successfully", async () => {
      const userDataSource = container.resolve("UserDS") as UserDSBase;
      jest.spyOn(userDataSource, "find").mockResolvedValue([mockUser]);

      const userService = container.resolve("UserService") as UserService;
      const { data, error } = await userService.getAllUsers({});

      expect(error).toBeUndefined();
      expect(data).toEqual([mockUser]);
      expect(userDataSource.find).toBeCalledTimes(1);
    });

    test("Scenario 2: Retrieve users with filtering", async () => {
      const criteria = { name: "John Doe" };
      const userDataSource = container.resolve("UserDS") as UserDSBase;
      jest.spyOn(userDataSource, "find").mockResolvedValue([mockUser]);

      const userService = container.resolve("UserService") as UserService;
      const { data, error } = await userService.getAllUsers(criteria);

      expect(error).toBeUndefined();
      expect(data).toEqual([mockUser]);
      expect(userDataSource.find).toBeCalledTimes(1);
      expect(userDataSource.find).toBeCalledWith(criteria, expect.any(Object));
    });

    test("Scenario 3: Handle empty user list", async () => {
      const userDataSource = container.resolve("UserDS") as UserDSBase;
      jest.spyOn(userDataSource, "find").mockResolvedValue([]);

      const userService = container.resolve("UserService") as UserService;
      const { data, error } = await userService.getAllUsers({});

      expect(error).toBeUndefined();
      expect(data).toEqual([]);
      expect(userDataSource.find).toBeCalledTimes(1);
    });

    test("Scenario 4: Handle database error during user retrieval", async () => {
      const userDataSource = container.resolve("UserDS") as UserDSBase;
      jest.spyOn(userDataSource, "find").mockImplementationOnce(() => {
        throw new Error("Database Error");
      });

      const userService = container.resolve("UserService") as UserService;
      const { data, error } = await userService.getAllUsers({});

      expect(data).toBeUndefined();
      expect(error).toBeDefined();
      expect(userDataSource.find).toBeCalledTimes(1);
    });
  });
});
