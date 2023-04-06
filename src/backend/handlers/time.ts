import { Request, Response } from "express";
import { TimeResponse } from "../../types/time-response";

const SIXTH_APRIL_EPOCH_SECONDS = 1680735600;

export const timeHandler = (_: Request, response: Response<TimeResponse>) => {
  response.json({
    epoch:SIXTH_APRIL_EPOCH_SECONDS 
  });
};
