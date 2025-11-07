const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.status(statusCode).json({
        success: false,
        code: statusCode,
        title: "Validation Failed",
        message: err.message,
        errors: err.errors || [],
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.status(statusCode).json({
        success: false,
        code: statusCode,
        title: "Server Error",
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.status(statusCode).json({
        success: false,
        code: statusCode,
        title: "Not Found",
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.status(statusCode).json({
        success: false,
        code: statusCode,
        title: "Unauthorized",
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.status(statusCode).json({
        success: false,
        code: statusCode,
        title: "Forbidden",
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
      });
      break;
    default:
      res.status(500).json({
        success: false,
        code: 500,
        title: "Internal Server Error",
        message: "Something went wrong",
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
      });
      break;
  }
};

module.exports = errorHandler;
