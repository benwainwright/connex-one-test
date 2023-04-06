import { Response, Request, request } from "express";
import { createRequest, createResponse } from "node-mocks-http";
import { HTTP_STATUS_CODES } from "../../core/http";
import { API_KEY } from "../../core/secrets";
import { authorise } from "./auth";

test("When the authorisation middleware is called without the correct header, it returns a 403 and sends the response", () => {
  const request = createRequest();
  const response = createResponse();

  const next = jest.fn();

  request.headers = {};

  authorise(request, response, next);

  expect(response.statusCode).toEqual(HTTP_STATUS_CODES.forbidden);
  expect(next).not.toHaveBeenCalled();
});

test("When the authorisation middleware is called without the correct header, the statuscode remains at 200 and next is called", () => {
  const request = createRequest({
    headers: {
      authorization: API_KEY,
    },
  });
  const response = createResponse();

  const next = jest.fn();

  authorise(request, response, next);

  expect(response.statusCode).toEqual(HTTP_STATUS_CODES.ok);
  expect(next).toHaveBeenCalled();
});
