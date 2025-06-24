import { config } from "../config/env.config.js";

// global error handling
const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  return res
    .status(statusCode)
    .json({
      msg: "Server Error",
      errorStack: config.env === "development" ? err.Stack : "",
    });
};
export default globalErrorHandler;