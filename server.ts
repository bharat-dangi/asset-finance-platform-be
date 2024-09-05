import { app } from "./app";
import { connectDB } from "./src/config/db";
import { registerDependencies } from "./src/config/dependency";

const port = process.env.PORT;

connectDB().then(() => {
  registerDependencies();
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running on PORT:${port}`.inverse.green);
  });

  process.on("unhandledRejection", (err) => {
    console.log(`Server halted due to unhandled rejection ${err}`.red);
  });
});
