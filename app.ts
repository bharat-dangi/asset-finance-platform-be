import "colors";
import express, { Express } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import hpp from "hpp";
import cors from "cors";
import {
  errorHandler,
  error404Handler,
} from "./src/middleware/error.middleware";
import { AppRouter } from "./src/route/index.routes";
const xss = require("xss-clean");

dotenv.config();

const app: Express = express();

// Set security headers
app.use(helmet());
// Prevent http param pollution
app.use(hpp());
// Enable CORS
app.use(cors());
// Prevent XSS attacks
app.use(xss());

// body parser
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// router
app.use(AppRouter);

app.use(errorHandler);
app.use(error404Handler);

export { app };
