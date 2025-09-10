import { StatusCodes, getReasonPhrase } from "http-status-codes";

export class CustomError extends Error {
  public statusCode: number;
  public details?: any;

  constructor(message: string, statusCode: number, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;

    Object.setPrototypeOf(this, new.target.prototype);

    // Clean stack trace (exclude constructor from stack)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// ========== Specific Errors ==========

export class BadRequestError extends CustomError {
  constructor(message = getReasonPhrase(StatusCodes.BAD_REQUEST), details?: any) {
    super(message, StatusCodes.BAD_REQUEST, details);
    this.name = "BadRequestError";
  }
}

export class UnauthorizedError extends CustomError {
  constructor(message = getReasonPhrase(StatusCodes.UNAUTHORIZED), details?: any) {
    super(message, StatusCodes.UNAUTHORIZED, details);
    this.name = "UnauthorizedError";
  }
}

export class ForbiddenError extends CustomError {
  constructor(message = getReasonPhrase(StatusCodes.FORBIDDEN), details?: any) {
    super(message, StatusCodes.FORBIDDEN, details);
    this.name = "ForbiddenError";
  }
}

export class NotFoundError extends CustomError {
  constructor(message = getReasonPhrase(StatusCodes.NOT_FOUND), details?: any) {
    super(message, StatusCodes.NOT_FOUND, details);
    this.name = "NotFoundError";
  }
}

export class InternalServerError extends CustomError {
  constructor(message = getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR), details?: any) {
    super(message, StatusCodes.INTERNAL_SERVER_ERROR, details);
    this.name = "InternalServerError";
  }
}

export class ValidationError extends CustomError {
  constructor(details: any, message = "Validation Error") {
    super(message, StatusCodes.UNPROCESSABLE_ENTITY, details);
    this.name = "ValidationError";
  }
}
