import { NextFunction } from "express";
import { Request, Response } from "express";
import { HTTP_HEADERS, HTTP_STATUS_CODES } from "../../core/http";
import { API_KEY } from "../../core/secrets";
export const authorise = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.get(HTTP_HEADERS.authorization);
  if (token !== API_KEY) {
    console.log(`Requested route without token. Permission denied`);
    response.status(HTTP_STATUS_CODES.forbidden).send();
  } else {
    next();
  }
};
