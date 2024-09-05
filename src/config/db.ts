import mongoose from "mongoose";

/**
 * @function connectMongoDB
 * @description Asynchronously connects to a MongoDB database using the URI specified in environment variables.
 * It selects the URI based on the `NODE_ENV` value to either connect to the test or production database.
 * @returns {Promise<void>} A promise that resolves when the database connection is successful.
 */
export const connectMongoDB = async () => {
  const mongoUri = process.env.NODE_ENV == "testing" ? process.env.MONGO_TEST_URI : process.env.MONGO_URI;
  await mongoose.connect(mongoUri!);
  console.log("MongoDb Connected".blue.underline.bold);
};

/**
 * @function disconnectDB
 * @description Asynchronously disconnects from the MongoDB database by closing the existing connection.
 * @returns {Promise<void>} A promise that resolves when the database connection is closed.
 */
export const disconnectDB = async () => {
  await mongoose.connection.close();
};

/**
 * @function connectDB
 * @description Asynchronously connects to the MongoDB database using the `connectMongoDB` function.
 * This function is a simple wrapper around `connectMongoDB` for convenience.
 * @returns {Promise<void>} A promise that resolves when the database connection is successful.
 */
export const connectDB = async () => {
  await connectMongoDB();
};
