import { getStopwatchTime } from "./get-stopwatch-time";

describe("getStopwatchTime", () => {
  it("should provide the stopwatch time for zero", () => {
    const seconds = 0;
    const result = getStopwatchTime(seconds);
    expect(result).toEqual(`00:00:00`);
  });

  it("should provide the stopwatch time for a time less than a minute", () => {
    const seconds = 56;
    const result = getStopwatchTime(seconds);
    expect(result).toEqual(`00:00:${seconds}`);
  });

  it("should provide the stopwatch time for a time greater than a minute", () => {
    const seconds = 142;
    const result = getStopwatchTime(seconds);
    expect(result).toEqual(`00:02:22`);
  });

  it("should provide the stopwatch time for a time greater than an hour", () => {
    const seconds = 123124;
    const result = getStopwatchTime(seconds);
    expect(result).toEqual(`34:12:04`);
  });
});
