import { Request, Response } from "express";
import { timeHandler } from "./time";
import { mock } from "jest-mock-extended";
import { TimeResponse } from "../../types/time-response";

beforeEach(() => {
  jest.resetAllMocks();
  jest.useFakeTimers();
  jest.setSystemTime(new Date("4/6/2023"));
});

afterEach(() => {
  jest.useRealTimers();
});

const SIXTH_APRIL_EPOCH_SECONDS = 1680735600;

test("When the test route is called it returns the correct time in seconds", () => {
  const response = mock<Response<TimeResponse>>();

  timeHandler(mock(), response);
  expect(response.json).toBeCalledWith({
    epoch: SIXTH_APRIL_EPOCH_SECONDS,
  });
});
