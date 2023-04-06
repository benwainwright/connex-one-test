import { Request, Response } from "express";
import { TimeResponse } from "../../types/time-response";

export const timeHandler = (_: Request, response: Response<TimeResponse>) => {
  response.json({
    epoch: Math.floor(Date.now() / 1000),
  });
};
