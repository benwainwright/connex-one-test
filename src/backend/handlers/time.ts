import { Request, Response } from "express";
import { TimeResponse } from "../../types/time-response";

export const timeHandler = (_: Request, response: Response<TimeResponse>) => {
  response.json({
    epoch: 2
  });
};
